import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with BizPsy GTM Studio. Book a 30-minute strategic consultation for startup go-to-market strategy, positioning audits, and repeatable SaaS customer acquisition.",
  alternates: {
    canonical: "https://bizpsy.in/contact",
  },
  openGraph: {
    title: "Contact Us | BizPsy GTM Studio",
    description:
      "Book a strategic consultation with BizPsy GTM Studio. We help B2B SaaS and startup founders build repeatable go-to-market systems, acquire users, and scale customer acquisition.",
    url: "https://bizpsy.in/contact",
    siteName: "BizPsy GTM Studio",
    images: [
      {
        url: "https://bizpsy.in/images/og-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Contact BizPsy GTM Studio — Go-To-Market & Growth Strategy Consultation",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | BizPsy GTM Studio",
    description:
      "Get in touch with BizPsy GTM Studio to discuss go-to-market strategy, product positioning, and startup user acquisition.",
    images: ["https://bizpsy.in/images/og-preview.jpg"],
    creator: "@bizpsy",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
