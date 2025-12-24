"use client";

import Link from "next/link";
import { Download, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/constants";
import { skillCategories } from "@/data/skills";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {siteConfig.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </span>
            </div>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a Software Developer and Machine Learning Engineer based
              in Bahrain, passionate about building intelligent systems that
              bridge AI and real-world applications. With experience across the
              full stack and a deep focus on AI/ML, I specialize in creating
              production-ready solutions for enterprise environments.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My journey in tech started at Bahrain Polytechnic, where I
              developed a strong foundation in programming and software
              engineering. Since then, I&apos;ve had the opportunity to work on
              diverse projects ranging from Retrieval-Augmented Generation (RAG)
              chatbots to fraud detection systems using machine learning.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Currently at RAINCODE, I&apos;m building production-ready AI
              systems for core banking, including intelligent chatbots with
              agentic capabilities, document intelligence pipelines, and
              Know-Your-Customer (KYC) systems. I enjoy tackling complex
              problems that require both technical depth and creative
              problem-solving.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/Yusuf-Husain-Ahmed-FlowCV-Resume-20251215.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          <Separator />

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">What I Do</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-3"
              >
                <h3 className="text-lg font-medium text-primary">
                  Full-Stack Development
                </h3>
                <p className="text-muted-foreground text-sm">
                  Building scalable web applications using modern frameworks
                  like Next.js, React, Django, and Spring Boot. From frontend
                  interfaces to backend APIs and database design.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-3"
              >
                <h3 className="text-lg font-medium text-primary">
                  Machine Learning Engineering
                </h3>
                <p className="text-muted-foreground text-sm">
                  Developing and deploying ML models for fraud detection,
                  document analysis, and NLP applications. Experience with Azure
                  ML, LangChain, and vector databases.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-3"
              >
                <h3 className="text-lg font-medium text-primary">
                  AI/LLM Applications
                </h3>
                <p className="text-muted-foreground text-sm">
                  Creating intelligent systems powered by Large Language Models,
                  including RAG chatbots, agentic workflows, and document
                  intelligence solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-3"
              >
                <h3 className="text-lg font-medium text-primary">
                  Enterprise Solutions
                </h3>
                <p className="text-muted-foreground text-sm">
                  Designing and implementing enterprise-grade systems with focus
                  on security, scalability, and compliance. Experience in
                  banking and fintech domains.
                </p>
              </motion.div>
            </div>
          </div>

          <Separator />

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Technical Skills</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="space-y-3"
                >
                  <h3 className="text-sm font-medium text-primary">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Languages</h2>
            <div className="flex gap-4">
              <div className="space-y-1">
                <p className="font-medium">English</p>
                <p className="text-sm text-muted-foreground">Fluent</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium">Arabic</p>
                <p className="text-sm text-muted-foreground">Native</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
