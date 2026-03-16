import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

const WA_NUMBER = "7411108466";
const WA_MESSAGE = encodeURIComponent(
  "¡Hola! Me gustaría agendar una consulta en Orfit.",
);

export default function Hero() {
  return (
    <section
      className="relative flex items-center min-h-screen bg-[FAFAF7] overflow-hidden"
      id="hero"
    >
      {/* Right-half full-bleed image — absolutely positioned so it never
          affects the content container's horizontal alignment */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="hero-image-panel absolute top-0 right-0 bottom-0 w-1/2 overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=900&q=85"
          alt="Aesthetic medicine"
          className="w-full h-full object-cover block"
          style={{
            objectPosition: "center top",
          }}
        />
        {/* Soft left-edge blend into the ivory background */}
        <div
          className="absolute inset-0 pointer-none"
          style={{
            background:
              "linear-gradient(to right, rgba(250,250,247,0.4) 0%, transparent 18%)",
          }}
        />
      </motion.div>

      {/* Content container — identical to every other section */}
      <div className="relative mx-auto w-full pt-28 pb-12 px-12">
        {/* Text lives in the left ~half so it stays clear of the image */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-130 hero-text"
        >
          <span
            className="inline-block bg-[#FFF024] text-[#1A1A18] text-[0.68rem] font-bold uppercase rounded-sm mb-8"
            style={{
              letterSpacing: "0.2em",
              padding: "0.28rem 0.75rem",
            }}
          >
            Medicina Estética
          </span>

          <h1
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: "clamp(2.6rem, 4.5vw, 4.25rem)",
              fontWeight: 400,
              color: "#1A1A18",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "1.5rem",
            }}
          >
            Tu belleza,
            <br />
            <em
              style={{
                fontStyle: "italic",
                fontWeight: 500,
                color: "#1A1A18",
              }}
            >
              refinada.
            </em>
          </h1>

          <p
            style={{
              color: "#6B6B64",
              fontSize: "1rem",
              lineHeight: 1.8,
              marginBottom: "2.75rem",
              maxWidth: 420,
            }}
          >
            Precisión médica con visión artística. Ofrecemos resultados
            naturales y duraderos adaptados a tus rasgos únicos — porque el
            mejor trabajo estético jamás se nota.
          </p>

          <div
            className="hero-buttons"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.875rem",
              maxWidth: 300,
            }}
          >
            <a
              href="#procedures"
              style={{
                background: "#1A1A18",
                color: "#FAFAF7",
                textDecoration: "none",
                padding: "1rem 1.75rem",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#FFF024";
                (e.currentTarget as HTMLElement).style.color = "#1A1A18";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#1A1A18";
                (e.currentTarget as HTMLElement).style.color = "#FAFAF7";
              }}
            >
              Explorar Tratamientos
              <ArrowRight size={15} />
            </a>

            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "transparent",
                color: "#1A1A18",
                textDecoration: "none",
                padding: "1rem 1.75rem",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                border: "1.5px solid #D4C8BC",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "#FFF024")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "#D4C8BC")
              }
            >
              Consulta por WhatsApp
              <MessageCircle size={15} />
            </a>
          </div>

          {/* Stat strip */}
          <div
            className="hero-stats"
            style={{
              display: "flex",
              gap: "2.5rem",
              marginTop: "3.5rem",
              paddingTop: "2rem",
              borderTop: "1px solid #E8E0D8",
            }}
          >
            {[
              { value: "10+", label: "Años" },
              { value: "2k+", label: "Pacientes" },
              { value: "98%", label: "Satisfechos" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "#1A1A18",
                    lineHeight: 1,
                    marginBottom: "0.2rem",
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontSize: "0.72rem",
                    color: "#6B6B64",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-image-panel {
            position: relative !important;
            width: 100% !important;
            height: 55vw !important;
            min-height: 280px !important;
          }
          #hero {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .hero-text {
            max-width: 100% !important;
            text-align: center !important;
          }
          .hero-buttons {
            max-width: 100% !important;
            width: 100% !important;
            margin: 0 auto !important;
          }
          .hero-stats {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
