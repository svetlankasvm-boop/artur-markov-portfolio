"use client";

import { motion } from "framer-motion";
import { resume } from "@/data/resume";
import { BarChart3, Handshake, Brain, Target, Users } from "lucide-react";

const competencyIcons: Record<string, React.ReactNode> = {
  "Управление продажами": <BarChart3 size={18} />,
  "Ведение переговоров": <Handshake size={18} />,
  "Стратегическое мышление": <Brain size={18} />,
  "Ориентация на результат": <Target size={18} />,
  "Управление командой": <Users size={18} />,
};

export function CompetenciesSection() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label text-center">Навыки</p>
          <h2 className="section-title mb-12 md:mb-14">
            Ключевые компетенции
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {resume.competencies.map((comp, i) => (
            <motion.div
              key={comp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card-premium rounded-xl p-6 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                {competencyIcons[comp.title]}
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sm mb-1.5">{comp.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{comp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
