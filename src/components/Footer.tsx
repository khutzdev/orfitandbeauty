import { Instagram, Facebook } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { label: "Nosotros", href: "#about" },
  { label: "Tratamientos", href: "#procedures" },
  { label: "Resultados", href: "#why-us" },
  { label: "Contacto", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#1A1A18",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "4rem 2rem 2.5rem",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: "2rem",
            alignItems: "start",
            marginBottom: "3rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <a
              href="#"
              style={{
                display: "inline-block",
                marginBottom: "1rem",
                textDecoration: "none",
              }}
            >
              <Logo style={{ height: 48, width: "auto" }} />
            </a>
            <p
              style={{
                color: "rgba(250,250,247,0.45)",
                fontSize: "0.875rem",
                lineHeight: 1.7,
                maxWidth: 260,
              }}
            >
              Clínica de medicina estética dedicada a resultados naturales y
              duraderos.
            </p>
          </div>

          {/* Nav */}
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              alignItems: "center",
            }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  color: "rgba(250,250,247,0.5)",
                  textDecoration: "none",
                  fontSize: "0.8125rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#FFF024")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "rgba(250,250,247,0.5)")
                }
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Social + contact */}
          <div style={{ textAlign: "right" }}>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "flex-end",
                marginBottom: "1.25rem",
              }}
            >
              {[
                { icon: <Instagram size={16} />, label: "Instagram" },
                { icon: <Facebook size={16} />, label: "Facebook" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  style={{
                    width: 38,
                    height: 38,
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(250,250,247,0.55)",
                    textDecoration: "none",
                    transition:
                      "border-color 0.2s, color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "#FFF024";
                    (e.currentTarget as HTMLElement).style.color = "#FFF024";
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,240,36,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.12)";
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(250,250,247,0.55)";
                    (e.currentTarget as HTMLElement).style.background =
                      "transparent";
                  }}
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <a
              href="mailto:hola@orfit.mx"
              style={{
                color: "rgba(250,250,247,0.45)",
                fontSize: "0.8125rem",
                textDecoration: "none",
                display: "block",
                marginBottom: "0.375rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#FFF024")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  "rgba(250,250,247,0.45)")
              }
            >
              hola@orfit.mx
            </a>
            <a
              href="tel:+527411108466"
              style={{
                color: "rgba(250,250,247,0.45)",
                fontSize: "0.8125rem",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#FFF024")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  "rgba(250,250,247,0.45)")
              }
            >
              +52 222 905 1344
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <p style={{ color: "rgba(250,250,247,0.3)", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} Orfit. Todos los derechos reservados.
          </p>
          <p style={{ color: "rgba(250,250,247,0.3)", fontSize: "0.8rem" }}>
            Los resultados pueden variar. Consulta con un especialista.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            text-align: left !important;
          }
          .footer-grid > div:last-child {
            text-align: left !important;
          }
          .footer-grid nav {
            align-items: flex-start !important;
          }
          .footer-grid > div:last-child > div {
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </footer>
  );
}
