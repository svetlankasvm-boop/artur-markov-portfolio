"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Building2 } from "lucide-react";
import { clsx } from "clsx";
import { resume } from "@/data/resume";

function TimelineCard({
  entry,
  index,
}: {
  entry: (typeof resume.timeline)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className={clsx(
          "w-full text-left glass-card-premium rounded-xl p-5 md:p-6 transition-all duration-500",
          expanded && "gold-border"
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 min-w-0">
            <div className="w-10 h-10 rounded-lg bg-accent/[0.07] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Building2 size={17} className="text-accent/70" />
            </div>
            <div className="min-w-0">
              <p className="text-[0.6875rem] text-accent/80 mb-1.5 font-medium tracking-wide">
                {entry.years}
              </p>
              <h3 className="text-sm md:text-base font-heading font-semibold leading-snug mb-0.5">
                {entry.position}
              </h3>
              <p className="text-[0.8125rem] text-text-secondary">{entry.company}</p>
            </div>
          </div>

          <div
            className={clsx(
              "flex items-center gap-2 flex-shrink-0 mt-1 px-2.5 py-1 rounded-md text-xs transition-all duration-300",
              expanded
                ? "bg-accent/10 text-accent"
                : "bg-white/[0.03] text-text-tertiary"
            )}
          >
            <span>{expanded ? "Свернуть" : "Подробнее"}</span>
            <ChevronDown
              size={13}
              className={clsx(
                "transition-transform duration-300",
                expanded && "rotate-180"
              )}
            />
          </div>
        </div>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-5 mt-5 border-t border-white/[0.04] space-y-4">
                <ul className="space-y-2">
                  {entry.description.map((item, i) => (
                    <li key={i} className="text-[0.8125rem] text-text-secondary flex items-start gap-2.5 leading-relaxed">
                      <span className="text-accent/60 mt-1 flex-shrink-0 text-xs">—</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {entry.highlights && entry.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {entry.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="text-[0.6875rem] px-2.5 py-1 rounded-md bg-accent/10 text-accent/90"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                )}

                {entry.industry && (
                  <div className="flex flex-wrap gap-1.5">
                    {entry.industry.map((ind) => (
                      <span
                        key={ind}
                        className="text-[0.625rem] text-text-tertiary bg-white/[0.03] px-2 py-0.5 rounded"
                      >
                        {ind}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
}

export function TimelineSection() {
  return (
    <section id="timeline" className="section-padding">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label text-center">Карьера</p>
          <h2 className="section-title mb-3">
            Опыт работы
          </h2>
          <p className="text-sm text-text-secondary text-center max-w-lg mx-auto mb-12 md:mb-14">
            14 лет 6 месяцев в FMCG — от менеджера до коммерческого директора
          </p>
        </motion.div>

        <div className="space-y-3 md:space-y-4">
          {resume.timeline.map((entry, index) => (
            <TimelineCard key={entry.id} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
