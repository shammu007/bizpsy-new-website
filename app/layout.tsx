import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://bizpsy-new-website.vercel.app";

export const viewport: Viewport = {
  themeColor: "#6D28D9",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "BizPsy The GTM Studio",
    template: "%s | BizPsy The GTM Studio",
  },
  description:
    "BizPsy is the GTM Studio that turns unclear positioning and ad-hoc marketing into a predictable customer acquisition system for early-stage B2B SaaS.",
  keywords: [
    "BizPsy",
    "Bizpsy The GTM Studio",
    "GTM Studio",
    "Go-To-Market Strategy",
    "B2B SaaS Growth",
    "Positioning Audit",
    "Customer Acquisition System",
    "SaaS Marketing",
    "GTM Growth Audit",
  ],
  authors: [{ name: "BizPsy The GTM Studio" }],
  creator: "BizPsy",
  icons: {
    icon: [
      { url: "/images/bizpsy-icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/bizpsy-icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/images/bizpsy-icon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/images/bizpsy-icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: ["/images/bizpsy-icon-32.png"],
    apple: [
      { url: "/images/bizpsy-icon-180.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon.png" },
    ],
  },
  openGraph: {
    title: "BizPsy The GTM Studio",
    description:
      "BizPsy is the GTM Studio that turns unclear positioning and ad-hoc marketing into a predictable customer acquisition system for early-stage B2B SaaS.",
    url: baseUrl,
    siteName: "BizPsy The GTM Studio",
    images: [
      {
        url: "/images/og-preview.png",
        width: 1200,
        height: 630,
        alt: "BizPsy The GTM Studio — Go-To-Market Systems for Early-Stage B2B SaaS",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BizPsy The GTM Studio",
    description:
      "BizPsy is the GTM Studio that turns unclear positioning and ad-hoc marketing into a predictable customer acquisition system for early-stage B2B SaaS.",
    images: ["/images/og-preview.png"],
    creator: "@bizpsy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/bizpsy-icon-32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/images/bizpsy-icon-48.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/images/bizpsy-icon-64.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/bizpsy-icon-192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/bizpsy-icon-180.png" />
        <link rel="shortcut icon" href="/images/bizpsy-icon-32.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800;900&family=Geist+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400..700;1,6..72,400..700&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-ink antialiased selection:bg-[#DDD6FE] selection:text-[#6D28D9]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
