import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { label: "Tratamientos", href: "#procedures" },
  { label: "Nosotros", href: "#about" },
  { label: "Resultados", href: "#why-us" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-b-[#E8E0D8] backdrop-blur-lg bg-[#FAFAF6]">
      <nav className="h-20 flex items-center justify-between gap-10 px-12">
        {/* Logo — left */}
        <a className="flex items-center no-underline shrink-0" href="#">
          <Logo style={{ height: 52, width: "auto" }} />
        </a>

        {/* Links — beside logo */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}
          className="desktop-nav"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                color: "#3A3A36",
                textDecoration: "none",
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#1A1A18")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#3A3A36")
              }
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Spacer */}
        {/*<div style={{ flex: 1 }} />*/}

        {/* Reservar — far right */}
        <a
          href="#contact"
          style={{
            background: "#FFF024",
            color: "#1A1A18",
            textDecoration: "none",
            padding: "0.55rem 1.4rem",
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            borderRadius: "6px",
            flexShrink: 0,
            transition: "background 0.2s, transform 0.15s",
          }}
          className="desktop-nav"
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#e6d800";
            (e.currentTarget as HTMLElement).style.transform =
              "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#FFF024";
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          Reservar
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#1A1A18",
            padding: "0.25rem",
            flexShrink: 0,
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "#FAFAF7",
            borderTop: "1px solid #E8E0D8",
            padding: "1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "#1A1A18",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 500,
                letterSpacing: "0.04em",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              background: "#FFF024",
              color: "#1A1A18",
              textDecoration: "none",
              padding: "0.75rem 1.5rem",
              fontSize: "0.875rem",
              fontWeight: 700,
              textAlign: "center",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              borderRadius: "6px",
            }}
          >
            Reservar
          </a>
        </div>
      )}

      {/*<style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>*/}
    </header>
  );
}
