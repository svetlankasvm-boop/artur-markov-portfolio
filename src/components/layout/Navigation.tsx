"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { href: "#about", label: "Обо мне" },
  { href: "#cases", label: "Кейсы" },
  { href: "#timeline", label: "Опыт" },
  { href: "#competencies", label: "Компетенции" },
  { href: "#contact", label: "Контакты" },
];

export function Navigation() {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-[0.6875rem] text-text-tertiary tracking-wide hover:text-accent-dim transition-colors duration-300"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden text-text-tertiary hover:text-accent-dim transition-colors duration-300"
        aria-label="Открыть меню"
      >
        <Menu size={22} />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 bg-surface-850 p-8 shadow-2xl border-l border-white/5">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 text-text-tertiary hover:text-accent-dim transition-colors"
              aria-label="Закрыть меню"
            >
              <X size={22} />
            </button>

            <div className="mt-16 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-text-tertiary hover:text-accent-dim transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-6 pt-6 border-t border-white/5">
                <a
                  href="/resume.pdf"
                  download="Артур Марков — Руководитель отдела продаж.pdf"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 text-sm text-accent-dim hover:text-accent transition-colors"
                >
                  <Download size={16} />
                  Скачать PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
