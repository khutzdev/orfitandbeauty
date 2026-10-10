import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks } from "../data/site";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-soft ${
        scrolled || menuOpen
          ? "border-b border-ink/5 bg-cream/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className={`container-x flex items-center justify-between gap-8 transition-all duration-500 ${
          scrolled ? "h-18" : "h-22"
        }`}
      >
        <a href="#" className="shrink-0" aria-label="Orfit — inicio">
          <Logo
            className={`w-auto transition-all duration-500 ${scrolled ? "h-10" : "h-12"}`}
          />
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-[0.78rem] font-medium uppercase tracking-[0.14em] text-ink/70 transition-colors hover:text-ink"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-ink transition-transform duration-500 ease-soft group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="btn-dark hidden px-6 py-3 lg:inline-flex"
        >
          Reservar cita
          <ArrowUpRight size={15} strokeWidth={1.75} />
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="-mr-2 p-2 text-ink lg:hidden"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 5.5rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <div className="container-x flex h-full flex-col justify-between pb-10 pt-6">
              <ul className="flex flex-col">
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                    className="border-b border-ink/10"
                  >
                    <a
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-baseline justify-between py-5 font-serif text-3xl font-light"
                    >
                      {l.label}
                      <span className="font-sans text-xs text-muted">0{i + 1}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-dark w-full"
              >
                Reservar cita
                <ArrowUpRight size={15} strokeWidth={1.75} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
