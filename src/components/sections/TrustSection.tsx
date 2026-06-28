"use client";

import { motion } from "framer-motion";
import { Target, Share2, Users } from "lucide-react";
import { resume } from "@/data/resume";

const iconMap: Record<string, React.ReactNode> = {
  target: <Target size={20} />,
  network: <Share2 size={20} />,
  users: <Users size={20} />,
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function TrustSection() {
  return (
    <section id="trust" className="section-padding bg-surface-900/50">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label text-center">Компетенции</p>
          <h2 className="section-title mb-3">
            Основания для доверия
          </h2>
          <p className="text-sm text-text-secondary text-center max-w-lg mx-auto mb-12 md:mb-14">
            14 лет в FMCG — от регионального менеджера до коммерческого директора
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {resume.trustCards.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="glass-card-premium rounded-xl p-7 md:p-8"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-5">
                {iconMap[card.icon]}
              </div>
              <h3 className="text-lg md:text-xl font-heading font-semibold mb-3 leading-snug">
                {card.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
