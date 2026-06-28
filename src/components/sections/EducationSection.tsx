"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { resume } from "@/data/resume";

export function EducationSection() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="glass-card-premium rounded-xl p-7 md:p-9 max-w-xl mx-auto text-center"
        >
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mx-auto mb-5">
            <GraduationCap size={20} />
          </div>
          <p className="section-label">Образование</p>
          <h3 className="text-lg md:text-xl font-heading font-semibold mb-1 leading-snug">
            {resume.education.institution}
          </h3>
          <p className="text-sm text-text-secondary mb-0.5">
            {resume.education.faculty}
          </p>
          <p className="text-sm text-text-secondary">
            {resume.education.specialty}
          </p>
          <div className="mt-4">
            <span className="inline-block text-[0.6875rem] px-2.5 py-1 rounded-md bg-accent/10 text-accent/90">
              {resume.education.year} год
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
