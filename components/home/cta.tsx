"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-6"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg">
            I&apos;m always interested in hearing about new opportunities,
            collaborations, or just having a chat about technology and AI.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href={`mailto:${siteConfig.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                {siteConfig.email}
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
