"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Download, Copy, Check } from "lucide-react";
import { resume } from "@/data/resume";
import { useState } from "react";

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 text-[0.6875rem] text-text-tertiary hover:text-accent transition-colors duration-300"
      aria-label={`Копировать ${label}`}
    >
      {copied ? <Check size={11} /> : <Copy size={11} />}
      {copied ? "Скопировано" : "Копировать"}
    </button>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-surface-900/50">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <p className="section-label text-center">Контакты</p>
          <h2 className="section-title mb-12 md:mb-14">
            Контакты
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="max-w-lg mx-auto"
        >
          <div className="space-y-3 mb-8">
            <a
              href={`tel:${resume.phone.replace(/[^\d+]/g, "")}`}
              className="glass-card-premium rounded-xl p-5 flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent/[0.15] transition-colors duration-300">
                <Phone size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[0.6875rem] text-text-tertiary tracking-wide uppercase mb-0.5">
                  Телефон
                </p>
                <p className="text-sm font-medium">{resume.phone}</p>
              </div>
              <CopyButton text={resume.phone} label="телефон" />
            </a>

            <a
              href={`mailto:${resume.email}`}
              className="glass-card-premium rounded-xl p-5 flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent/[0.15] transition-colors duration-300">
                <Mail size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[0.6875rem] text-text-tertiary tracking-wide uppercase mb-0.5">
                  Email
                </p>
                <p className="text-sm font-medium truncate">{resume.email}</p>
              </div>
              <CopyButton text={resume.email} label="email" />
            </a>
          </div>

          <div className="text-center space-y-4">
            <a
              href={`mailto:${resume.email}`}
              className="btn-primary"
            >
              <Mail size={15} />
              Написать мне
            </a>

            <div className="flex justify-center pt-2">
              <a
                href="/resume.pdf"
                download="Артур Марков — Руководитель отдела продаж.pdf"
                className="btn-pdf"
              >
                <Download size={13} />
                Скачать PDF
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
