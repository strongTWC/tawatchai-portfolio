"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { EASE } from "@/components/layout/reveal";

const LINKS = [
  { href: "/projects", label: "Projects", index: "01" },
  { href: "/about", label: "About", index: "02" },
  { href: "/contact", label: "Contact", index: "03" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        data-testid="site-header"
        className="fixed inset-x-0 top-0 z-50 border-b border-hairline/80 bg-ivory/85 backdrop-blur-xl backdrop-saturate-150"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:h-20 sm:px-10 lg:px-16">
          <Link
            href="/"
            data-testid="header-logo-link"
            className="flex items-baseline gap-1.5"
            aria-label="Tawatchai — home"
          >
            <span className="font-serif text-2xl leading-none tracking-tight">Tawatchai</span>
            <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden />
          </Link>

          <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                aria-current={pathname.startsWith(l.href) ? "page" : undefined}
                className={cn(
                  "font-mono text-xs uppercase tracking-widest transition-colors duration-300 hover:text-ink",
                  pathname.startsWith(l.href) ? "text-ink" : "text-stone"
                )}
              >
                <span className="mr-1.5 text-teal">{l.index}</span>
                {l.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center text-ink md:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-x-0 bottom-0 top-16 z-40 bg-ivory md:hidden"
            data-testid="mobile-menu-overlay"
          >
            <nav aria-label="Mobile" className="flex h-full flex-col justify-center gap-2 px-6">
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.08 + i * 0.07, ease: EASE }}
                >
                  <Link
                    href={l.href}
                    data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
                    className={cn(
                      "flex items-baseline gap-4 border-b border-hairline py-6",
                      pathname.startsWith(l.href) ? "text-ink" : "text-ink/70"
                    )}
                  >
                    <span className="font-mono text-xs text-teal">{l.index}</span>
                    <span className="font-serif text-4xl font-light tracking-tight">{l.label}</span>
                  </Link>
                </motion.div>
              ))}
              <p className="mt-10 font-mono text-[10px] uppercase tracking-widest text-stone-light">
                Luxury Retail & Learning Development
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
