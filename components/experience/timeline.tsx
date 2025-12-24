"use client";

import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Experience, Education } from "@/data/experience";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  item: Experience | Education;
  index: number;
  type: "experience" | "education";
}

function TimelineItem({ item, index, type }: TimelineItemProps) {
  const isExperience = type === "experience";
  const experience = isExperience ? (item as Experience) : null;
  const education = !isExperience ? (item as Education) : null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-[11px] top-2 bottom-0 w-px bg-border last:hidden" />

      {/* Timeline dot */}
      <div
        className={cn(
          "absolute left-0 top-1 h-6 w-6 rounded-full border-2 flex items-center justify-center",
          "bg-background border-primary"
        )}
      >
        {isExperience ? (
          <Briefcase className="h-3 w-3 text-primary" />
        ) : (
          <GraduationCap className="h-3 w-3 text-primary" />
        )}
      </div>

      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold">
              {isExperience ? experience?.title : education?.degree}
            </h3>
            <p className="text-primary font-medium">
              {isExperience ? experience?.company : education?.institution}
            </p>
          </div>
          <div className="flex flex-col sm:items-end gap-1">
            <span className="text-sm text-muted-foreground">
              {isExperience
                ? `${experience?.startDate} - ${experience?.endDate}`
                : `${education?.startDate} - ${education?.endDate}`}
            </span>
            {isExperience && experience?.location && (
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {experience.location}
              </span>
            )}
          </div>
        </div>

        {isExperience && experience?.type && (
          <Badge variant="secondary" className="capitalize text-xs">
            {experience.type.replace("-", " ")}
          </Badge>
        )}

        {isExperience && experience?.description && (
          <ul className="space-y-2 text-muted-foreground">
            {experience.description.map((point, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-primary mt-1.5 shrink-0">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        {!isExperience && education?.description && (
          <p className="text-muted-foreground">{education.description}</p>
        )}

        {isExperience && experience?.technologies && (
          <div className="flex flex-wrap gap-1.5 pt-2">
            {experience.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

interface TimelineProps {
  experiences: Experience[];
  education: Education[];
}

export function Timeline({ experiences, education }: TimelineProps) {
  return (
    <div className="space-y-16">
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-8 flex items-center gap-2"
        >
          <Briefcase className="h-6 w-6 text-primary" />
          Work Experience
        </motion.h2>
        <div>
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              item={experience}
              index={index}
              type="experience"
            />
          ))}
        </div>
      </div>

      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-8 flex items-center gap-2"
        >
          <GraduationCap className="h-6 w-6 text-primary" />
          Education
        </motion.h2>
        <div>
          {education.map((edu, index) => (
            <TimelineItem
              key={edu.id}
              item={edu}
              index={index}
              type="education"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
