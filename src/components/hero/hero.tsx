"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { MaskedLines, EASE } from "@/components/layout/reveal";
import { ArrowButton } from "@/components/ui/arrow-button";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 56]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -32]);

  return (
    <section
      ref={ref}
      data-testid="home-hero"
      className="relative overflow-hidden pb-20 pt-28 sm:pt-36 lg:pb-28 lg:pt-44"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 sm:px-10 lg:grid-cols-12 lg:items-center lg:gap-10 lg:px-16">
        <motion.div style={{ y: textY }} className="flex flex-col items-start lg:col-span-7">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            data-testid="hero-status-pill"
            className="inline-flex items-center gap-3 border border-hairline bg-ivory-soft px-4 py-2.5"
          >
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-stone">
              Transitioning into Learning & Development
            </span>
          </motion.div>

          <h1 className="mt-8 font-serif text-4xl font-light leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl">
            <MaskedLines
              delay={0.25}
              lineClassName="pb-1"
              lines={[
                "Luxury Retail",
                <>
                  and <em className="italic text-teal">Learning</em>
                </>,
                "Development",
              ]}
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
            data-testid="hero-supporting-statement"
            className="mt-8 max-w-xl text-base leading-relaxed text-stone sm:text-lg"
          >
            Fifteen-plus years in high-end retail — a decade with CHANEL — now dedicated to
            product knowledge, coaching and helping luxury teams learn with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: EASE }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <ArrowButton href="/projects" testId="hero-explore-work-button">
              Explore My Work
            </ArrowButton>
            <ArrowButton href="/about" variant="outline" testId="hero-about-button">
              About Me
            </ArrowButton>
          </motion.div>
        </motion.div>

        <div className="lg:col-span-5">
          <motion.div
            style={{ y: imgY }}
            initial={reduce ? { opacity: 0 } : { clipPath: "inset(100% 0 0 0)" }}
            animate={reduce ? { opacity: 1 } : { clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.1, delay: 0.4, ease: EASE }}
            data-testid="hero-image-frame"
            className="relative aspect-[4/5] w-full overflow-hidden border border-hairline"
          >
            <Image
              src="/images/hero_boutique.jpg"
              alt="Luxury beauty boutique interior with warm ivory walls and a travertine counter"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              data-testid="hero-image"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-3 font-mono text-[10px] uppercase tracking-widest text-stone-light"
          >
            The atelier — boutique & beauty editorial
          </motion.p>
        </div>
      </div>
    </section>
  );
}
