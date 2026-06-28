import { Download } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.03]">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-xs text-text-tertiary tracking-wide">
          &copy; {new Date().getFullYear()} Артур Марков
        </p>

        <a
          href="/resume.pdf"
          download="Артур Марков — Руководитель отдела продаж.pdf"
          className="btn-pdf"
        >
          <Download size={13} />
          Скачать PDF
        </a>
      </div>
    </footer>
  );
}
