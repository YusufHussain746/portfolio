"use client";

import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/data/projects";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col group hover:border-primary/50 transition-colors">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <CardTitle className="text-lg group-hover:text-primary transition-colors">
              {project.title}
            </CardTitle>
            <Badge variant="secondary" className="shrink-0 capitalize">
              {project.category}
            </Badge>
          </div>
          <CardDescription className="line-clamp-3">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col justify-end gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs font-normal"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 5 && (
              <Badge variant="outline" className="text-xs font-normal">
                +{project.technologies.length - 5}
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-3 pt-2">
            <Link
              href={`/projects/${project.slug}`}
              className="text-sm font-medium text-primary hover:underline"
            >
              View Details
            </Link>
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
              </Link>
            )}
            {project.demo && (
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
