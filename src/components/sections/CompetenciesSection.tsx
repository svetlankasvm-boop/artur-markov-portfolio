"use client";

import { motion } from "framer-motion";
import { BarChart3, Handshake, Users, Brain, Target, Network } from "lucide-react";

const competencyData = [
  {
    icon: <BarChart3 size={18} />,
    title: "Стратегия продаж и P&L",
    description: "Формирование ценовой политики и ассортиментной матрицы под каждый канал сбыта. Контроль маржинальности контрактов и P&L дистрибьюторов.",
  },
  {
    icon: <Network size={18} />,
    title: "Развитие дистрибьюции",
    description: "Точечный отбор партнёров с индивидуальными коммерческими условиями. Управление сетью из 150+ дистрибьюторов с федеральным охватом.",
  },
  {
    icon: <Users size={18} />,
    title: "Управление командой",
    description: "Система мотивации, где KPI каждого менеджера связаны с фактической маржинальностью. Обучение и развитие до 20 сотрудников.",
  },
  {
    icon: <Handshake size={18} />,
    title: "Переговоры C-level",
    description: "Ведение переговоров с собственниками бизнеса и первыми лицами компаний. Заключение стратегических партнёрств.",
  },
  {
    icon: <Target size={18} />,
    title: "Планирование и аналитика",
    description: "ПРТ (планы развития территорий), прогнозы продаж, анализ рентабельности. Бюджетирование и контроль складских остатков.",
  },
  {
    icon: <Brain size={18} />,
    title: "Построение отделов продаж",
    description: "Создание региональных структур с нуля, разработка регламентов и коммерческих политик. Внедрение CRM и систем отчётности.",
  },
];

export function CompetenciesSection() {
  return (
    <section id="competencies" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <p className="section-label text-center">Компетенции</p>
          <h2 className="section-title mb-3">
            Ключевые компетенции
          </h2>
          <p className="text-sm text-text-secondary text-center max-w-lg mx-auto mb-12 md:mb-14">
            14 лет в FMCG — от стратегии до операционного управления
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {competencyData.map((comp, i) => (
            <motion.div
              key={comp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] as const }}
              className="glass-card-premium rounded-xl p-6 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                {comp.icon}
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
