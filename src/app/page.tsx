import { Hero } from "@/components/hero/hero";
import { QuickScan } from "@/components/sections/quick-scan";
import { RibbonMarquee } from "@/components/sections/marquee";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Competencies } from "@/components/sections/competencies";
import { ContactCta } from "@/components/sections/contact-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickScan />
      <RibbonMarquee />
      <FeaturedProjects />
      <Competencies />
      <ContactCta />
    </>
  );
}
