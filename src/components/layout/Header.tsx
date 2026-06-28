import { Navigation, MobileMenu } from "./Navigation";
import { Download } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-14 md:h-16">
        <a
          href="#"
          className="text-xs font-medium text-text-secondary tracking-widest uppercase hover:text-text-primary transition-colors duration-300"
        >
          A. Марков
        </a>

        <div className="flex items-center gap-3">
          <Navigation />

          <a
            href="/resume.pdf"
            download="Артур Марков — Руководитель отдела продаж.pdf"
            className="btn-pdf hidden md:inline-flex"
          >
            <Download size={13} />
            PDF
          </a>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
