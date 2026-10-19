import type { Metadata } from "next";
import type { ReactNode } from "react";

import SiteHeader from "@/components/SiteHeader";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Stellar Stream Hive Docs",
    template: "%s | Stellar Stream Hive Docs",
  },
  description:
    "Documentation for Stellar Stream Hive: real-time, on-chain payment streaming built on Stellar and Soroban.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-brand-700 focus:shadow-lg dark:focus:bg-slate-900 dark:focus:text-brand-300"
        >
          Skip to content
        </a>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
