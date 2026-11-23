import type { Metadata, Viewport } from "next";
import { SITE } from "@/lib/site";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: [
      {
        url: SITE.ogImage,
        width: 1536,
        height: 1024,
        alt: "Luxury beauty boutique interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="grain bg-ivory font-sans text-ink">
        <a
          href="#main"
          className="fixed left-4 top-4 z-[80] -translate-y-24 rounded-none bg-ink px-4 py-2 font-mono text-xs uppercase tracking-widest text-ivory transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <SmoothScroll>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
