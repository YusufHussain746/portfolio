export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  type: "full-time" | "intern" | "trainee";
  description: string[];
  technologies?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export const experiences: Experience[] = [
  {
    id: "raincode",
    title: "Software Developer",
    company: "RAINCODE W.L.L",
    location: "Manama, Bahrain",
    startDate: "August 2025",
    endDate: "Present",
    type: "full-time",
    description: [
      "Developed production-ready backend systems for a Retrieval-Augmented Generation (RAG) chatbot with Agentic tool calling designed for core banking systems in LangChain and Azure deployment",
      "Created a document intelligence pipeline in Azure and Python to analyze and detect fraudulent bank statements and salary slips for loan applications",
      "Prepared data, trained, and deployed machine learning models on Azure for fraud transaction detection",
      "Developed and deployed Know Your Customer (KYC) system to track behavioral changes across customers",
      "Built RESTful microservices using Spring Boot with Spring Security and JWT authentication for secure API access across modules",
    ],
    technologies: [
      "Python",
      "LangChain",
      "Azure",
      "Spring Boot",
      "Java",
      "Machine Learning",
    ],
  },
  {
    id: "array-innovation",
    title: "Software Development Intern",
    company: "Array Innovation",
    location: "Manama, Bahrain",
    startDate: "May 2025",
    endDate: "August 2025",
    type: "intern",
    description: [
      "Worked alongside other developers to build backend systems for a Retrieval-Augmented Generation (RAG) chatbot, optimizing response accuracy and retrieval efficiency",
      "Reviewed pull requests to implement clean code practices, scalability, and maintainability across the codebase",
      "Developed and maintained automated tests in Java, improving feature reliability and reducing manual QA overhead",
    ],
    technologies: ["Python", "Java", "RAG", "Testing", "Git"],
  },
  {
    id: "nairdc",
    title: "Software Development Intern",
    company: "Nasser Al Research & Development Centre (NAIRDC)",
    location: "Manama, Bahrain",
    startDate: "February 2025",
    endDate: "May 2025",
    type: "intern",
    description: [
      "Developed scalable Django backend models and CRUD APIs for a multilingual chatbot knowledge base",
      "Integrated ChromaDB for vector similarity search and built embedding pipelines for Arabic & English",
      "Implemented language detection workflows, debouncing for performance, and conducted API testing with Postman",
    ],
    technologies: ["Django", "Python", "ChromaDB", "REST APIs", "Postman"],
  },
  {
    id: "gulf-air",
    title: "Technical Services Trainee",
    company: "Gulf Air",
    location: "Muharraq, Bahrain",
    startDate: "2022",
    endDate: "2022",
    type: "trainee",
    description: [
      "Configured and deployed new laptops into the corporate domain following security protocols",
      "Participated in end-to-end Oracle Database Server setup, gaining hands-on enterprise IT operations experience",
    ],
    technologies: ["IT Operations", "Oracle Database", "Windows Server"],
  },
];

export const education: Education[] = [
  {
    id: "bahrain-polytechnic",
    degree: "BSc ICT (Programming)",
    institution: "Bahrain Polytechnic",
    startDate: "2020",
    endDate: "2025",
    description:
      "Final Year Project: Full-stack web AI-driven applicant tracking system using Python & Large Language Models (LLMs)",
  },
  {
    id: "ib-diploma",
    degree: "International Baccalaureate (IB) Diploma",
    institution: "Arabian Pearl Gulf School",
    startDate: "2018",
    endDate: "May 2020",
  },
];
