import Link from "next/link";
import { profile } from "@/data/profile";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-ink-deep text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <div>
            <p className="font-serif text-4xl font-light tracking-tight sm:text-5xl">
              Tawatchai<span className="text-teal">.</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone-light">
              Luxury Retail & Learning Development — building product knowledge, coaching and
              clienteling capability for luxury teams.
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-col gap-3">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                data-testid={`footer-link-${l.label.toLowerCase()}`}
                className="font-mono text-xs uppercase tracking-widest text-stone-light transition-colors duration-300 hover:text-ivory"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-widest text-stone-light" data-testid="footer-copyright">
            © {new Date().getFullYear()} {profile.name} · Portfolio
          </p>
          <a
            href={`mailto:${profile.email}`}
            data-testid="footer-email"
            className="font-mono text-[10px] uppercase tracking-widest text-stone-light transition-colors hover:text-ivory"
          >
            {profile.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
