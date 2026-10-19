"use client";

import { usePathname } from "next/navigation";

const REPO_EDIT_BASE = "https://github.com/Stellar-Hive/stellar-stream-hive-api/edit/main/docs/app";

/** Links to the GitHub editor for the current page's source file (`app/<route>/page.mdx`). */
export default function EditOnGitHub() {
  const pathname = usePathname();
  const route = pathname.replace(/\/+$/, "");

  return (
    <p className="mt-8 text-sm">
      <a
        href={`${REPO_EDIT_BASE}${route}/page.mdx`}
        target="_blank"
        rel="noreferrer"
        className="text-slate-500 underline-offset-2 hover:underline dark:text-slate-400"
      >
        Edit this page on GitHub
      </a>
    </p>
  );
}
