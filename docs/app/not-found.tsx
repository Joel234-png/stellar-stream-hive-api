import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-xl flex-col items-center px-6 py-32 text-center">
      <p className="text-6xl font-bold text-brand-600 dark:text-brand-400">404</p>
      <h1 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
        Page not found
      </h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
        >
          Back to home
        </Link>
        <Link
          href="/docs/getting-started"
          className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
        >
          Getting Started
        </Link>
      </div>
    </main>
  );
}
