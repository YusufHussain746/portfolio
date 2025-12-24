import { Hero } from "@/components/home/hero";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { ExperiencePreview } from "@/components/home/experience-preview";
import { SkillsOverview } from "@/components/home/skills-overview";
import { CTA } from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <ExperiencePreview />
      <SkillsOverview />
      <CTA />
    </>
  );
}
