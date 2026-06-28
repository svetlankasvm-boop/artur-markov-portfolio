export function Footer() {
  return (
    <footer className="border-t border-white/[0.03]">
      <div className="mx-auto max-w-6xl px-6 py-10 text-center">
        <p className="text-xs text-text-tertiary tracking-wide">
          &copy; {new Date().getFullYear()} Артур Марков
        </p>
      </div>
    </footer>
  );
}
