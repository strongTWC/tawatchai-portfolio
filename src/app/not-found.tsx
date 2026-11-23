import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-start justify-center px-6 py-32 sm:px-10 lg:px-16">
      <p className="font-mono text-xs uppercase tracking-widest2 text-teal">Error 404</p>
      <h1 className="mt-6 font-serif text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
        This page is <em className="italic text-teal">not on display</em>
      </h1>
      <p className="mt-6 max-w-md leading-relaxed text-stone">
        The page you are looking for may have been moved, or the link is out of date.
      </p>
      <Link
        href="/"
        data-testid="not-found-back-home-link"
        className="mt-10 inline-flex items-center gap-3 border border-ink bg-ink px-7 py-4 font-mono text-xs uppercase tracking-widest text-ivory transition-colors duration-300 hover:bg-transparent hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back to home
      </Link>
    </section>
  );
}
