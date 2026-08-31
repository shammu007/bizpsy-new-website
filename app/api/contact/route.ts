import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// In-memory rate limiting map (IP -> Array of timestamps)
const rateLimitMap = new Map<string, number[]>();

function isRateLimited(ip: string, maxRequests = 5, windowMs = 60000): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recentTimestamps = timestamps.filter((time) => now - time < windowMs);

  if (recentTimestamps.length >= maxRequests) {
    return true;
  }

  recentTimestamps.push(now);
  rateLimitMap.set(ip, recentTimestamps);

  // Clean up old entries periodically
  if (rateLimitMap.size > 500) {
    for (const [key, times] of rateLimitMap.entries()) {
      if (times.every((t) => now - t >= windowMs)) {
        rateLimitMap.delete(key);
      }
    }
  }

  return false;
}

// Sanitize user inputs to prevent HTML/script injection in email clients
function escapeHtml(str: string): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    // 1. Extract IP for rate limiting
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute before submitting again." },
        { status: 429 }
      );
    }

    // 2. Parse and validate JSON payload
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
    }

    const { fullName, email, company, phone, services, message } = body;

    // 3. Strict Field Validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length === 0) {
      return NextResponse.json({ error: "Full Name is required." }, { status: 400 });
    }

    if (!email || typeof email !== "string" || email.trim().length === 0) {
      return NextResponse.json({ error: "Work Email is required." }, { status: 400 });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    // Enforce reasonable character bounds
    if (fullName.length > 100 || email.length > 120 || (phone && phone.length > 30) || (company && company.length > 120) || (message && message.length > 3000)) {
      return NextResponse.json({ error: "One or more fields exceed maximum allowed length." }, { status: 400 });
    }

    // 4. Sanitize all fields
    const safeName = escapeHtml(fullName.trim());
    const safeEmail = escapeHtml(email.trim());
    const safePhone = phone ? escapeHtml(phone.trim()) : "Not provided";
    const safeCompany = company ? escapeHtml(company.trim()) : "Not provided";
    const safeServices = Array.isArray(services)
      ? services.map((s: string) => escapeHtml(String(s))).join(", ")
      : "General Inquiry";
    const safeMessage = message ? escapeHtml(message.trim()) : "No specific message provided.";

    const recipientEmails = ["info@bizpsy.in", "mshammu.007@gmail.com"];

    // 5. Construct secure HTML email body
    const emailSubject = `🚀 New GTM Strategy Inquiry: ${safeName} (${safeCompany})`;
    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 16px; background-color: #ffffff;">
        <div style="border-bottom: 2px solid #EDE9FE; padding-bottom: 14px; margin-bottom: 20px;">
          <h2 style="color: #6D28D9; margin: 0; font-size: 20px; font-weight: 700;">New GTM Strategy Inquiry</h2>
          <p style="margin: 4px 0 0 0; color: #6b7280; font-size: 13px;">Received via BizPsy Website Contact Form</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
          <tr>
            <td style="padding: 9px 0; color: #6b7280; width: 140px; font-size: 13px; font-weight: 600;">Full Name:</td>
            <td style="padding: 9px 0; color: #111827; font-size: 14px; font-weight: 600;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 9px 0; color: #6b7280; font-size: 13px; font-weight: 600;">Work Email:</td>
            <td style="padding: 9px 0; color: #111827; font-size: 14px;"><a href="mailto:${safeEmail}" style="color: #6D28D9; text-decoration: none;">${safeEmail}</a></td>
          </tr>
          <tr>
            <td style="padding: 9px 0; color: #6b7280; font-size: 13px; font-weight: 600;">Phone / WhatsApp:</td>
            <td style="padding: 9px 0; color: #111827; font-size: 14px;">${safePhone}</td>
          </tr>
          <tr>
            <td style="padding: 9px 0; color: #6b7280; font-size: 13px; font-weight: 600;">Company Name:</td>
            <td style="padding: 9px 0; color: #111827; font-size: 14px;">${safeCompany}</td>
          </tr>
          <tr>
            <td style="padding: 9px 0; color: #6b7280; font-size: 13px; font-weight: 600;">Areas of Interest:</td>
            <td style="padding: 9px 0; color: #111827; font-size: 14px;">${safeServices}</td>
          </tr>
        </table>
        
        <div style="margin-top: 22px; padding: 16px; background-color: #FAFAFD; border-radius: 12px; border: 1px solid #EDE9FE; border-left: 4px solid #6D28D9;">
          <h4 style="margin: 0 0 8px 0; color: #374151; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Message / Goals:</h4>
          <p style="margin: 0; color: #1f2937; line-height: 1.6; font-size: 14px; white-space: pre-wrap;">${safeMessage}</p>
        </div>

        <div style="margin-top: 28px; padding-top: 16px; border-top: 1px solid #f3f4f6; font-size: 11px; color: #9ca3af; text-align: center;">
          Destination: ${recipientEmails.join(", ")} • BizPsy Security Filter Verified
        </div>
      </div>
    `;

    // 6. Check for SMTP credentials
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"BizPsy Website" <${smtpUser}>`,
        to: recipientEmails.join(", "),
        replyTo: email.trim(),
        subject: emailSubject,
        html: emailHtml,
      });

      return NextResponse.json({ success: true, deliveredVia: "smtp" });
    }

    // Server-side logged output
    console.log("=== NEW BIZPSY CONTACT INQUIRY ===");
    console.log("Recipients:", recipientEmails.join(", "));
    console.log("Name:", safeName);
    console.log("Email:", safeEmail);
    console.log("Phone:", safePhone);
    console.log("Company:", safeCompany);
    console.log("Services:", safeServices);
    console.log("Message:", safeMessage);
    console.log("===================================");

    return NextResponse.json({
      success: true,
      deliveredVia: "logged",
      recipients: recipientEmails,
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry. Please email info@bizpsy.in directly." },
      { status: 500 }
    );
  }
}
