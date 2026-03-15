import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "../data/procedures";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        background: "#FAFAF7",
        padding: "7rem 2rem",
        borderTop: "1px solid #E8E0D8",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
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
            Historias de Pacientes
          </span>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: "clamp(2rem, 3.5vw, 2.875rem)",
              fontWeight: 500,
              color: "#1A1A18",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Lo que dicen nuestros pacientes
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{
                background: "#FAFAF7",
                border: "1.5px solid #E8E0D8",
                borderRadius: "16px",
                padding: "2.5rem",
                position: "relative",
                transition: "border-color 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#000";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 8px 32px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#E8E0D8";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  background: "#FFF024",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <Quote size={18} style={{ color: "#1A1A18" }} />
              </div>
              <p
                style={{
                  color: "#3A3A36",
                  fontSize: "0.9375rem",
                  lineHeight: 1.8,
                  marginBottom: "2rem",
                  fontStyle: "italic",
                }}
              >
                "{t.text}"
              </p>
              <div
                style={{
                  borderTop: "1px solid #E8E0D8",
                  paddingTop: "1.25rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <p
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontWeight: 500,
                    color: "#1A1A18",
                    fontSize: "1rem",
                  }}
                >
                  {t.name}
                </p>
                <span
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    background: "#1A1A18",
                    color: "#FFF024",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "4px",
                  }}
                >
                  {t.treatment}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
