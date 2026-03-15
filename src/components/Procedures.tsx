import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Sparkles, X } from "lucide-react";
import { procedures, type Procedure } from "../data/procedures";

function ProcedureCard({
  procedure,
  onClick,
}: {
  procedure: Procedure;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        cursor: "pointer",
        background: "#FAFAF7",
        border: "1.5px solid",
        borderColor: hovered ? "#000" : "#E8E0D8",
        borderRadius: "16px",
        overflow: "hidden",
        transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
        boxShadow: hovered
          ? "0 12px 40px rgba(0,0,0,0.18)"
          : "0 1px 4px rgba(26,26,24,0.05)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <div style={{ overflow: "hidden", height: 220 }}>
        <img
          src={procedure.image}
          alt={procedure.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
        />
      </div>
      <div style={{ padding: "1.5rem" }}>
        <span
          style={{
            display: "inline-block",
            background: "#FFF024",
            color: "#1A1A18",
            fontSize: "0.65rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            padding: "0.2rem 0.6rem",
            borderRadius: "4px",
            marginBottom: "0.625rem",
          }}
        >
          {procedure.tagline}
        </span>
        <h3
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: "1.375rem",
            fontWeight: 500,
            color: "#1A1A18",
            marginBottom: "0.75rem",
            lineHeight: 1.3,
          }}
        >
          {procedure.name}
        </h3>
        <p
          style={{
            color: "#6B6B64",
            fontSize: "0.875rem",
            lineHeight: 1.7,
            marginBottom: "1.25rem",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {procedure.description}
        </p>
        <div
          style={{
            display: "flex",
            gap: "1.25rem",
            borderTop: "1px solid #E8E0D8",
            paddingTop: "1rem",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}
          >
            <Clock size={13} style={{ color: "#1A1A18" }} />
            <span style={{ fontSize: "0.8rem", color: "#6B6B64" }}>
              {procedure.duration}
            </span>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}
          >
            <Sparkles size={13} style={{ color: "#1A1A18" }} />
            <span style={{ fontSize: "0.8rem", color: "#6B6B64" }}>
              {procedure.recovery}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Modal({
  procedure,
  onClose,
}: {
  procedure: Procedure;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(26,26,24,0.75)",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          style={{
            background: "#FAFAF7",
            maxWidth: 640,
            width: "100%",
            maxHeight: "90vh",
            overflowY: "auto",
            borderRadius: "20px",
            overflow: "hidden",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ position: "relative" }}>
            <img
              src={procedure.image}
              alt={procedure.name}
              style={{
                width: "100%",
                height: 280,
                objectFit: "cover",
                display: "block",
              }}
            />
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "#1A1A18",
                border: "none",
                color: "#FAFAF7",
                width: 36,
                height: 36,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <X size={16} />
            </button>
          </div>
          <div style={{ padding: "2rem" }}>
            <span
              style={{
                display: "inline-block",
                background: "#FFF024",
                color: "#1A1A18",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "0.25rem 0.7rem",
                borderRadius: "4px",
                marginBottom: "0.75rem",
              }}
            >
              {procedure.tagline}
            </span>
            <h3
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: "2rem",
                fontWeight: 500,
                color: "#1A1A18",
                marginBottom: "1.25rem",
                lineHeight: 1.2,
              }}
            >
              {procedure.name}
            </h3>
            <p
              style={{
                color: "#3A3A36",
                lineHeight: 1.8,
                marginBottom: "2rem",
                fontSize: "0.9375rem",
              }}
            >
              {procedure.description}
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                borderTop: "1px solid #E8E0D8",
                paddingTop: "1.5rem",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  background: "#F4F0EC",
                  padding: "1rem",
                  borderRadius: "10px",
                }}
              >
                <p
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "#6B6B64",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: "0.25rem",
                  }}
                >
                  Duración
                </p>
                <p style={{ fontWeight: 600, color: "#1A1A18" }}>
                  {procedure.duration}
                </p>
              </div>
              <div
                style={{
                  background: "#F4F0EC",
                  padding: "1rem",
                  borderRadius: "10px",
                }}
              >
                <p
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "#6B6B64",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: "0.25rem",
                  }}
                >
                  Recuperación
                </p>
                <p style={{ fontWeight: 600, color: "#1A1A18" }}>
                  {procedure.recovery}
                </p>
              </div>
            </div>
            <a
              href="#contact"
              onClick={onClose}
              style={{
                display: "block",
                background: "#FFF024",
                color: "#1A1A18",
                textDecoration: "none",
                padding: "0.9rem",
                textAlign: "center",
                fontSize: "0.875rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                borderRadius: "10px",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#e6d800")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#FFF024")
              }
            >
              Agendar una Consulta
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Procedures() {
  const [selected, setSelected] = useState<Procedure | null>(null);

  return (
    <section
      id="procedures"
      style={{
        background: "#F4F0EC",
        padding: "7rem 2rem",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
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
            Nuestros Tratamientos
          </span>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: "clamp(2rem, 3.5vw, 2.875rem)",
              fontWeight: 500,
              color: "#1A1A18",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            Tratamientos diseñados para ti
          </h2>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {procedures.map((p) => (
            <ProcedureCard
              key={p.id}
              procedure={p}
              onClick={() => setSelected(p)}
            />
          ))}
        </div>
      </div>

      {selected && (
        <Modal procedure={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
