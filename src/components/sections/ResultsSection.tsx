"use client";

import { motion } from "framer-motion";
import { TrendingUp, Building2, Handshake, Users } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const results = [
  {
    value: 15,
    suffix: "%",
    label: "Рост прибыли предприятия",
    context: "Кондитерское производство «Меренга»",
    icon: <TrendingUp size={18} />,
  },
  {
    value: 10,
    prefix: "до ",
    suffix: " млрд ₽",
    label: "Товарооборот под управлением",
    context: "Канал дистрибьюции, «Славянка»",
    icon: <Building2 size={18} />,
  },
  {
    value: 150,
    suffix: "+",
    label: "Партнёров-дистрибьюторов",
    context: "Федеральный охват",
    icon: <Handshake size={18} />,
  },
  {
    value: 20,
    suffix: "",
    label: "Сотрудников в подчинении",
    context: "Региональные менеджеры, KAM, координаторы",
    icon: <Users size={18} />,
  },
];

export function ResultsSection() {
  return (
    <section className="section-padding bg-surface-900/50">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <p className="section-label text-center">Результаты</p>
          <h2 className="section-title mb-12 md:mb-14">
            Ключевые достижения
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {results.map((result, i) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
              className="glass-card rounded-xl p-6 md:p-7 text-center"
            >
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent mx-auto mb-4">
                {result.icon}
              </div>
              <p className="text-3xl md:text-4xl font-heading font-bold gold-gradient mb-1.5 leading-none">
                {result.prefix && (
                  <span className="text-lg md:text-xl font-body font-medium opacity-80">{result.prefix}</span>
                )}
                <AnimatedCounter from={0} to={result.value} />
                {result.suffix}
              </p>
              <p className="text-sm text-text-primary mb-1 font-medium">{result.label}</p>
              <p className="text-xs text-text-secondary leading-snug">{result.context}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
