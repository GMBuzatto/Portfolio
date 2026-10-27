import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ExperienceSection } from "@/features/experience/components/experience-section";
import { AboutSection } from "@/features/profile/components/about-section";
import { HeroSection } from "@/features/profile/components/hero-section";
import { ProjectsSection } from "@/features/projects/components/projects-section";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex max-w-6xl flex-col gap-28 px-6 py-16 sm:py-24">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      <SiteFooter />
    </>
  );
}
