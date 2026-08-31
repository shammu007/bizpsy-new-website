import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// In-memory rate limiting (IP -> timestamps)
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

  if (rateLimitMap.size > 500) {
    for (const [key, times] of rateLimitMap.entries()) {
      if (times.every((t) => now - t >= windowMs)) {
        rateLimitMap.delete(key);
      }
    }
  }

  return false;
}

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
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute." },
        { status: 429 }
      );
    }

    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
    }

    const { email } = body;

    if (!email || typeof email !== "string" || email.trim().length === 0) {
      return NextResponse.json({ error: "Email address is required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (email.length > 120) {
      return NextResponse.json({ error: "Email exceeds allowed length." }, { status: 400 });
    }

    const safeEmail = escapeHtml(email.trim());
    const recipientEmails = ["info@bizpsy.in", "mshammu.007@gmail.com"];

    const emailSubject = `📬 New Newsletter Subscriber: ${safeEmail}`;
    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 540px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 16px; background-color: #ffffff;">
        <div style="border-bottom: 2px solid #EDE9FE; padding-bottom: 14px; margin-bottom: 18px;">
          <h2 style="color: #6D28D9; margin: 0; font-size: 20px; font-weight: 700;">New Newsletter Subscription</h2>
          <p style="margin: 4px 0 0 0; color: #6b7280; font-size: 13px;">Received via BizPsy Website Footer</p>
        </div>

        <div style="padding: 18px; background-color: #FAFAFD; border-radius: 12px; border: 1px solid #EDE9FE;">
          <div style="font-size: 12px; font-weight: bold; text-transform: uppercase; color: #6b7280; margin-bottom: 6px;">Subscriber Email</div>
          <div style="font-size: 16px; font-weight: 600; color: #111827;">
            <a href="mailto:${safeEmail}" style="color: #6D28D9; text-decoration: none;">${safeEmail}</a>
          </div>
        </div>

        <div style="margin-top: 24px; padding-top: 14px; border-top: 1px solid #f3f4f6; font-size: 11px; color: #9ca3af; text-align: center;">
          Destination: ${recipientEmails.join(", ")} • BizPsy Newsletter Engine
        </div>
      </div>
    `;

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

    console.log("=== NEW BIZPSY NEWSLETTER SUBSCRIBER ===");
    console.log("Subscriber:", safeEmail);
    console.log("Forwarded to:", recipientEmails.join(", "));
    console.log("========================================");

    return NextResponse.json({
      success: true,
      deliveredVia: "logged",
      recipients: recipientEmails,
    });
  } catch (error) {
    console.error("Error processing newsletter subscription:", error);
    return NextResponse.json(
      { error: "Failed to process subscription. Please try again." },
      { status: 500 }
    );
  }
}
