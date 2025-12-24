"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";
import { siteConfig } from "@/lib/constants";
import { motion } from "framer-motion";

function TerminalAnimation() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Terminal key={key}>
      <TypingAnimation>&gt; whoami</TypingAnimation>

      <AnimatedSpan className="text-green-500">Yusuf Husain Ahmed</AnimatedSpan>

      <AnimatedSpan className="text-muted-foreground">
        Software Developer & ML Engineer
      </AnimatedSpan>

      <TypingAnimation>&gt; cat skills.txt</TypingAnimation>

      <AnimatedSpan className="text-blue-500">
        TypeScript, Python, React, Next.js
      </AnimatedSpan>

      <AnimatedSpan className="text-blue-500">
        RAG Systems, LLMs, Full-Stack Development
      </AnimatedSpan>

      <TypingAnimation>&gt; echo $STATUS</TypingAnimation>

      <AnimatedSpan className="text-green-500">
        ✔ Available for opportunities
      </AnimatedSpan>
    </Terminal>
  );
}

export function Hero() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start gap-6 lg:max-w-xl"
          >
            <div className="inline-flex items-center rounded-full border border-border/60 bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for opportunities
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Hi, I&apos;m{" "}
              <span className="text-primary">Yusuf Husain Ahmed</span>
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl">
              Software Developer & Machine Learning Engineer building intelligent
              systems that bridge AI and real-world applications. Specializing in{" "}
              <span className="text-foreground font-medium">RAG systems</span>,{" "}
              <span className="text-foreground font-medium">
                full-stack development
              </span>
              , and{" "}
              <span className="text-foreground font-medium">
                enterprise solutions
              </span>
              .
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button asChild size="lg">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-6">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <TerminalAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
