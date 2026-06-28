"use client";

import { motion } from "framer-motion";
import { Briefcase, Target, CheckCircle, User } from "lucide-react";
import { resume } from "@/data/resume";

const detailIcons = {
  problem: <Target size={16} />,
  solution: <Briefcase size={16} />,
  role: <User size={16} />,
  result: <CheckCircle size={16} />,
};

const labelMap: Record<string, string> = {
  problem: "Задача",
  solution: "Решение",
  role: "Моя роль",
  result: "Результат",
};

export function CaseStudiesSection() {
  return (
    <section id="cases" className="section-padding bg-surface-900/50">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <p className="section-label text-center">Кейсы</p>
          <h2 className="section-title mb-3">
            Результаты в действии
          </h2>
          <p className="text-sm text-text-secondary text-center max-w-lg mx-auto mb-12 md:mb-14">
            Четыре ключевых проекта, которые демонстрируют мой подход к управлению продажами
          </p>
        </motion.div>

        <div className="space-y-5 md:space-y-6">
          {resume.caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
              className="glass-card-premium rounded-xl overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-[0.6875rem] text-accent/80 tracking-wide uppercase mb-1">{cs.industry}</p>
                    <h3 className="text-lg md:text-xl font-heading font-semibold">{cs.company}</h3>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-5">
                  {(Object.keys(detailIcons) as Array<keyof typeof detailIcons>).map((key) => (
                    <div key={key} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                        {detailIcons[key]}
                      </div>
                      <div>
                        <p className="text-[0.625rem] text-text-tertiary tracking-wide uppercase mb-0.5">
                          {labelMap[key]}
                        </p>
                        <p className="text-sm text-text-secondary leading-relaxed">{cs[key]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
