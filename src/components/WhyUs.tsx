import { motion } from "framer-motion";
import { stats } from "../data/procedures";
import { ShieldCheck, Microscope, HeartHandshake, Award } from "lucide-react";

const pillars = [
  {
    icon: <ShieldCheck size={26} style={{ color: "#FFF024" }} />,
    title: "Seguridad Ante Todo",
    description:
      "Cada tratamiento sigue protocolos basados en evidencia. Usamos únicamente productos certificados de proveedores premium para garantizar tu seguridad en cada paso.",
  },
  {
    icon: <Microscope size={26} style={{ color: "#FFF024" }} />,
    title: "Precisión Clínica",
    description:
      "Nuestros especialistas combinan formación médica con educación continua en las técnicas más avanzadas, asegurando resultados precisos y predecibles.",
  },
  {
    icon: <HeartHandshake size={26} style={{ color: "#FFF024" }} />,
    title: "Atención Personalizada",
    description:
      "Sin tratamientos genéricos. Cada plan se diseña en torno a tu anatomía, objetivos y estilo de vida para resultados que complementan tus rasgos naturales.",
  },
  {
    icon: <Award size={26} style={{ color: "#FFF024" }} />,
    title: "Resultados Comprobados",
    description:
      "Más de una década de experiencia y miles de pacientes satisfechos reflejan nuestro compromiso con la excelencia y la mejora continua.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      style={{
        background: "#1A1A18",
        padding: "7rem 2rem",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.06)",
            marginBottom: "6rem",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "16px",
            overflow: "hidden",
          }}
          className="stats-grid"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                background: "#1A1A18",
                padding: "2.5rem 2rem",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3vw, 2.75rem)",
                  fontWeight: 600,
                  color: "#FFF024",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                {s.value}
              </p>
              <p
                style={{
                  color: "rgba(250,250,247,0.5)",
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span
            style={{
              display: "inline-block",
              background: "#FFF024",
              color: "#1A1A18",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "0.3rem 0.8rem",
              borderRadius: "4px",
              marginBottom: "1.25rem",
            }}
          >
            Por qué Orfit
          </span>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: "clamp(2rem, 3.5vw, 2.875rem)",
              fontWeight: 500,
              color: "#FAFAF7",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Excelencia en la que puedes confiar
          </h2>
        </motion.div>

        {/* Pillars grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                padding: "2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                transition: "border-color 0.3s, background 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,240,36,0.35)";
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,240,36,0.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.background =
                  "transparent";
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  background: "rgba(255,240,36,0.12)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                }}
              >
                {p.icon}
              </div>
              <h3
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: "1.25rem",
                  fontWeight: 500,
                  color: "#FAFAF7",
                  marginBottom: "0.875rem",
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  color: "rgba(250,250,247,0.55)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                }}
              >
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
