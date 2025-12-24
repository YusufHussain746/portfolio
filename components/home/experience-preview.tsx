"use client";

import Link from "next/link";
import { ArrowRight, Briefcase, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/experience";
import { motion } from "framer-motion";

export function ExperiencePreview() {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
          <p className="text-muted-foreground max-w-2xl">
            My professional journey in software development and machine learning
            engineering.
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.slice(0, 2).map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-6 last:pb-0 border-l border-border"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full border-2 bg-background border-primary flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              </div>

              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">{experience.title}</h3>
                    <p className="text-primary font-medium">
                      {experience.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1">
                    <span className="text-sm text-muted-foreground">
                      {experience.startDate} - {experience.endDate}
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {experience.location}
                    </span>
                  </div>
                </div>

                <Badge variant="secondary" className="capitalize text-xs">
                  {experience.type.replace("-", " ")}
                </Badge>

                <ul className="space-y-1.5 text-muted-foreground text-sm">
                  {experience.description.slice(0, 2).map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary mt-0.5 shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                  {experience.description.length > 2 && (
                    <li className="text-primary text-sm">
                      +{experience.description.length - 2} more...
                    </li>
                  )}
                </ul>

                {experience.technologies && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {experience.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {experience.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{experience.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Button variant="outline" asChild>
            <Link href="/experience">
              View Full Experience
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
