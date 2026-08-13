import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BizPsy — AI Strategy & Business Consulting",
  description:
    "Transforming enterprises through high-octane AI strategy, business consulting, and custom intelligence platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-ink antialiased selection:bg-accent selection:text-ink">
        {children}
      </body>
    </html>
  );
}
