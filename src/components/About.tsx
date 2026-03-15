import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const pillars = [
  "Médicos certificados y especializados",
  "Productos premium de calidad certificada",
  "Planes de tratamiento individualizados",
  "Acompañamiento continuo post-tratamiento",
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "#FAFAF7",
        padding: "7rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
            Sobre Orfit
          </span>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 500,
              color: "#1A1A18",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}
          >
            Medicina y arte,
            <br />
            en perfecto equilibrio.
          </h2>
          <p
            style={{
              color: "#6B6B64",
              fontSize: "1rem",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            En Orfit creemos que la medicina estética es tanto ciencia como
            arte. Cada tratamiento está guiado por un profundo conocimiento
            anatómico y una refinada sensibilidad estética — para que los
            resultados siempre se sientan como tú, solo que mejor.
          </p>
          <p
            style={{
              color: "#6B6B64",
              fontSize: "1rem",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
            }}
          >
            Trabajamos con cada paciente de forma individual, escuchando
            primero y tratando después. Seguridad, sutileza y satisfacción son
            los pilares de todo lo que hacemos.
          </p>

          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "0.875rem",
            }}
          >
            {pillars.map((p) => (
              <li
                key={p}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <div
                  style={{
                    width: 22,
                    height: 22,
                    background: "#FFF024",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <CheckCircle2 size={14} style={{ color: "#1A1A18" }} />
                </div>
                <span style={{ color: "#3A3A36", fontSize: "0.9375rem" }}>
                  {p}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          style={{ position: "relative" }}
        >
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=700&q=80"
            alt="Orfit clinic environment"
            style={{
              width: "100%",
              height: 480,
              objectFit: "cover",
              display: "block",
              borderRadius: "16px",
            }}
          />
          {/* Floating badge */}
          <div
            style={{
              position: "absolute",
              bottom: "-1.5rem",
              right: "-1rem",
              background: "#1A1A18",
              color: "#FAFAF7",
              padding: "1.25rem 1.5rem",
              borderRadius: "12px",
              boxShadow: "0 8px 32px rgba(26,26,24,0.25)",
            }}
          >
            <p
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: "2rem",
                fontWeight: 600,
                color: "#FFF024",
                lineHeight: 1,
              }}
            >
              10+
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginTop: "0.25rem",
                color: "rgba(250,250,247,0.6)",
              }}
            >
              Años de experiencia
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
