import type { Metadata } from "next";
import type { ReactNode } from "react";

import SiteHeader from "@/components/SiteHeader";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const title: Metadata["title"] = {
  default: "Stellar Stream Hive Docs",
  template: "%s | Stellar Stream Hive Docs",
};

const description =
  "Documentation for Stellar Stream Hive: real-time, on-chain payment streaming built on Stellar and Soroban.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    type: "website",
    siteName: "Stellar Stream Hive Docs",
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
