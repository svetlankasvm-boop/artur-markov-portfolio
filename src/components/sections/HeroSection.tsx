"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { resume } from "@/data/resume";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const ease = [0.16, 1, 0.3, 1] as const;

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

const metricItem = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.5 + i * 0.08, ease },
  }),
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-radial-top pointer-events-none" />
      <div className="absolute inset-0 hero-radial-bottom pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-28 pb-20 md:pt-32 md:pb-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.p
            variants={item}
            className="text-[0.625rem] md:text-xs uppercase tracking-[0.4em] text-accent/80"
          >
            {resume.title}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.95] tracking-tight"
          >
            {resume.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed px-4"
          >
            {resume.heroTagline}
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
          >
            <a
              href="#contact"
              className="btn-primary"
            >
              Обсудить возможности
            </a>

          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-16 md:mt-20 max-w-4xl mx-auto"
        >
          {resume.heroMetrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              custom={i}
              variants={metricItem}
              initial="hidden"
              animate="visible"
              className="glass-card rounded-xl p-5 md:p-6 text-center"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold gold-gradient mb-1.5 leading-none">
                {metric.value}
              </p>
              <p className="text-[0.6875rem] md:text-xs text-text-secondary leading-snug">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16"
        >
          <a
            href="#about"
            className="scroll-indicator"
          >
            <span className="tracking-[0.35em]">Далее</span>
            <ArrowDown size={12} className="animate-bounce mt-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
