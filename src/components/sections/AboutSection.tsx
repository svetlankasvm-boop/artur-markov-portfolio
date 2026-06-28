"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { resume } from "@/data/resume";

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <p className="section-label text-center">Обо мне</p>
          <h2 className="section-title mb-12 md:mb-16">
            {resume.name}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto aspect-[2/3] overflow-hidden rounded-lg">
              <Image
                src="/images/photo.png"
                alt="Артур Марков"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-20 h-20 border border-accent/20 rounded-lg hidden md:block pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="space-y-6"
          >
            <div className="flex flex-wrap gap-2">
              <span className="text-[0.6875rem] px-2.5 py-1 rounded-md bg-accent/8 text-accent/90 gold-border">
                {resume.location}
              </span>
              <span className="text-[0.6875rem] px-2.5 py-1 rounded-md bg-white/[0.03] text-text-secondary border border-white/[0.06]">
                {resume.age} года
              </span>
              <span className="text-[0.6875rem] px-2.5 py-1 rounded-md bg-white/[0.03] text-text-secondary border border-white/[0.06]">
                {resume.experienceYears}
              </span>
            </div>

            <p className="text-sm md:text-base text-text-secondary leading-relaxed">
              {resume.summary}
            </p>

            <div className="pt-5 border-t border-white/[0.04]">
              <p className="text-[0.6875rem] text-text-tertiary tracking-wide uppercase mb-3">
                Специализация
              </p>
              <div className="flex flex-wrap gap-2">
                {["Кондитерские изделия", "Снеки", "Детское питание", "FMCG дистрибьюция"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-[0.6875rem] px-2.5 py-1 rounded-md bg-surface-750 text-text-secondary border border-white/[0.04]"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
