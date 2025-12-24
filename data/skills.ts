export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Python", "Java", "C#", "JavaScript", "TypeScript", "Swift", "SQL"],
  },
  {
    name: "Web & Backend",
    skills: [
      "Django",
      "FastAPI",
      "Spring Boot",
      "Next.js",
      "React.js",
      "REST APIs",
      "Node.js",
    ],
  },
  {
    name: "AI/ML & NLP",
    skills: [
      "LangChain",
      "LlamaIndex",
      "RAG",
      "Embedding Models",
      "Azure ML",
      "Pandas",
      "NumPy",
      "Vector Databases",
    ],
  },
  {
    name: "Databases & Tools",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "ChromaDB",
      "Firebase",
      "Docker",
      "Git",
      "AWS",
      "Azure DevOps",
    ],
  },
];

export const getAllSkills = () =>
  skillCategories.flatMap((category) => category.skills);
