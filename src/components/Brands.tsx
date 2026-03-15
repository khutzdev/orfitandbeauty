import { motion } from "framer-motion";
import { useState } from "react";

const brands = [
  { name: "Allergan",  sub: "AbbVie",             color: "#00A3E0" },
  { name: "Galderma",  sub: "Aesthetics",          color: "#C8102E" },
  { name: "Merz",      sub: "Aesthetics",          color: "#005EB8" },
  { name: "Teoxane",   sub: "Laboratories",        color: "#9B59B6" },
  { name: "Hugel",     sub: "Pharma",              color: "#E8171F" },
  { name: "IPSEN",     sub: "Biopharmaceuticals",  color: "#00539B" },
];

// Duplicate 3× for seamless infinite loop
const track = [...brands, ...brands, ...brands];

function BrandLogo({ name, sub, color }: { name: string; sub: string; color: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 3.5rem",
        cursor: "default",
        userSelect: "none",
        transition: "all 0.35s ease",
      }}
    >
      {/* Wordmark */}
      <span
        style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: "1.625rem",
          fontWeight: 600,
          letterSpacing: "-0.01em",
          lineHeight: 1,
          color: hovered ? color : "rgba(255,255,255,0.22)",
          transition: "color 0.4s ease",
          whiteSpace: "nowrap",
        }}
      >
        {name}
      </span>
      {/* Sub-label */}
      <span
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.6rem",
          fontWeight: 600,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginTop: "0.3rem",
          color: hovered ? `${color}99` : "rgba(255,255,255,0.12)",
          transition: "color 0.4s ease",
          whiteSpace: "nowrap",
        }}
      >
        {sub}
      </span>
    </div>
  );
}

export default function Brands() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      id="brands"
      style={{
        background: "#1A1A18",
        padding: "7rem 0",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .brands-track {
          animation: marquee 28s linear infinite;
          will-change: transform;
        }
        .brands-track.paused {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "4.5rem" }}
        >
          <span
            style={{
              display: "inline-block",
              background: "#FFF025",
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
            Marcas que usamos
          </span>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: "clamp(2rem, 3.5vw, 2.875rem)",
              fontWeight: 500,
              color: "#FAFAF7",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            Solo lo mejor para tu piel
          </h2>
          <p
            style={{
              color: "rgba(250,250,247,0.5)",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            Trabajamos exclusivamente con marcas certificadas y avaladas a nivel
            internacional, garantizando eficacia y seguridad en cada
            tratamiento.
          </p>
        </motion.div>
      </div>

      {/* Divider line top */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          marginBottom: "3rem",
        }}
      />

      {/* Carousel */}
      <div
        style={{ overflow: "hidden" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className={`brands-track${paused ? " paused" : ""}`}
          style={{
            display: "flex",
            width: "max-content",
            alignItems: "center",
          }}
        >
          {track.map((brand, i) => (
            <BrandLogo
              key={`${brand.name}-${i}`}
              name={brand.name}
              sub={brand.sub}
              color={brand.color}
            />
          ))}
        </div>
      </div>

      {/* Divider line bottom */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          marginTop: "3rem",
        }}
      />
    </section>
  );
}
