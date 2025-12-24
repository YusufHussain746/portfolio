"use client";

import { Button } from "@/components/ui/button";
import { ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectFilterProps {
  activeFilter: ProjectCategory;
  onFilterChange: (filter: ProjectCategory) => void;
}

const filters: { label: string; value: ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Machine Learning", value: "ml" },
];

export function ProjectFilter({
  activeFilter,
  onFilterChange,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <Button
          key={filter.value}
          variant={activeFilter === filter.value ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange(filter.value)}
          className={cn(
            "transition-all",
            activeFilter === filter.value && "shadow-sm"
          )}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
}
