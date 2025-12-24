import { Metadata } from "next";
import { Timeline } from "@/components/experience/timeline";
import { experiences, education } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "My professional journey in software development and machine learning engineering.",
};

export default function ExperiencePage() {
  return (
    <div className="py-20">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Experience</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            My professional journey in software development, machine learning,
            and building intelligent systems for enterprise applications.
          </p>
        </div>

        <Timeline experiences={experiences} education={education} />
      </div>
    </div>
  );
}
