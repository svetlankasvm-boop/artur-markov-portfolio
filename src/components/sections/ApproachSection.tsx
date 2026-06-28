"use client";

import { motion } from "framer-motion";
import { resume } from "@/data/resume";
import { TrendingUp, Network, Users } from "lucide-react";

const principles = [
  {
    icon: <TrendingUp size={18} />,
    title: "Измеримая стратегия",
    description:
      "Каждое решение опирается на цифры и анализ рентабельности. Разработал систему KPI, привязанную к фактической маржинальности, что увеличило прибыль предприятия на 15%.",
  },
  {
    icon: <Network size={18} />,
    title: "Сильная дистрибьюция",
    description:
      "Вместо хаотичного наращивания — точечный отбор партнёров и индивидуальные коммерческие условия. Управлял сетью из 150 дистрибьюторов, подключил более 50 новых партнёров.",
  },
  {
    icon: <Users size={18} />,
    title: "Мотивированная команда",
    description:
      "Система мотивации, где KPI каждого менеджера связаны с P&L дистрибьюторов. Работаю на всех уровнях: от переговоров с собственниками до обучения региональных менеджеров.",
  },
];

export function ApproachSection() {
  return (
    <section id="approach" className="section-padding bg-surface-900/50">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <p className="section-label text-center">Философия</p>
          <h2 className="section-title mb-6">
            Мой подход к управлению
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] as const }}
          className="max-w-3xl mx-auto mb-12"
        >
          <p className="text-sm md:text-base text-text-secondary text-center leading-relaxed">
            {resume.philosophy}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
              className="glass-card-premium rounded-xl p-6 md:p-7"
            >
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                {p.icon}
              </div>
              <h3 className="font-heading font-semibold text-base mb-2">{p.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
