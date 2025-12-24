export type ProjectCategory = "fullstack" | "ml" | "all";

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  technologies: string[];
  featured: boolean;
  image?: string;
  github?: string;
  demo?: string;
  date: string;
}

export const projects: Project[] = [
  {
    slug: "rag-chatbot",
    title: "RAG Chatbot for Core Banking",
    description:
      "Production-ready backend system for a Retrieval-Augmented Generation chatbot with agentic tool calling designed for core banking systems.",
    longDescription:
      "Developed a sophisticated RAG chatbot system that integrates with core banking infrastructure. The system uses agentic tool calling to perform complex banking operations while maintaining conversational context. Built with LangChain and deployed on Azure, the chatbot handles customer queries, transaction lookups, and account management tasks with high accuracy and security.",
    category: "ml",
    technologies: [
      "Python",
      "LangChain",
      "Azure",
      "RAG",
      "LLMs",
      "FastAPI",
      "Vector Databases",
    ],
    featured: true,
    date: "2025",
    github: "https://github.com/yourusername/rag-chatbot",
  },
  {
    slug: "fraud-detection",
    title: "Document Intelligence & Fraud Detection",
    description:
      "AI-powered document intelligence pipeline to analyze and detect fraudulent bank statements and salary slips for loan applications.",
    longDescription:
      "Created an end-to-end document intelligence system using Azure Document Intelligence and custom ML models. The pipeline processes bank statements and salary slips, extracting key information and detecting anomalies indicative of fraud. Includes behavioral analysis for KYC compliance and real-time transaction monitoring.",
    category: "ml",
    technologies: [
      "Python",
      "Azure ML",
      "Document Intelligence",
      "Machine Learning",
      "Pandas",
      "NumPy",
    ],
    featured: true,
    date: "2025",
  },
  {
    slug: "ai-applicant-tracker",
    title: "AI-Driven Applicant Tracking System",
    description:
      "Full-stack web application using LLMs to automate and enhance the recruitment process with intelligent resume parsing and candidate matching.",
    longDescription:
      "Final year project implementing an intelligent applicant tracking system. Uses large language models to parse resumes, extract skills and experience, and match candidates to job requirements. Features include automated screening, interview scheduling, and analytics dashboards for HR teams.",
    category: "fullstack",
    technologies: [
      "Python",
      "Next.js",
      "LLMs",
      "PostgreSQL",
      "FastAPI",
      "React",
    ],
    featured: true,
    date: "2025",
    github: "https://github.com/yourusername/ai-ats",
  },
  {
    slug: "multilingual-chatbot",
    title: "Multilingual Knowledge Base Chatbot",
    description:
      "Django-based chatbot with ChromaDB integration supporting Arabic and English language detection and vector similarity search.",
    longDescription:
      "Developed a scalable multilingual chatbot system with Django backend and ChromaDB for vector storage. Implemented custom embedding pipelines for both Arabic and English languages, with automatic language detection and appropriate response generation. Features debouncing for performance optimization.",
    category: "fullstack",
    technologies: [
      "Django",
      "ChromaDB",
      "Python",
      "REST APIs",
      "Embeddings",
      "NLP",
    ],
    featured: false,
    date: "2025",
  },
  {
    slug: "kyc-system",
    title: "Know Your Customer (KYC) System",
    description:
      "Behavioral analytics system to track and analyze customer patterns for compliance and risk assessment.",
    longDescription:
      "Built a comprehensive KYC system that monitors customer behavior across banking touchpoints. The system tracks behavioral changes, flags suspicious patterns, and generates compliance reports. Integrated with existing banking infrastructure using Spring Boot microservices.",
    category: "fullstack",
    technologies: [
      "Spring Boot",
      "Java",
      "JWT",
      "PostgreSQL",
      "REST APIs",
      "Spring Security",
    ],
    featured: false,
    date: "2025",
  },
];

export const getFeaturedProjects = () =>
  projects.filter((project) => project.featured);

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const getProjectsByCategory = (category: ProjectCategory) =>
  category === "all"
    ? projects
    : projects.filter((project) => project.category === category);
