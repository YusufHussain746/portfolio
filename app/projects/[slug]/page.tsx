import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Calendar } from "lucide-react";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { projects, getProjectBySlug } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-20">
      <div className="container mx-auto max-w-3xl px-4">
        <Button variant="ghost" size="sm" className="mb-8" asChild>
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="capitalize">
                {project.category}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-1.5 h-4 w-4" />
                {project.date}
              </div>
            </div>

            <h1 className="text-4xl font-bold tracking-tight">
              {project.title}
            </h1>

            <p className="text-lg text-muted-foreground">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {project.github && (
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Source
                  </Link>
                </Button>
              )}
              {project.demo && (
                <Button size="sm" asChild>
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              )}
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">About the Project</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="px-3 py-1 text-sm"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
