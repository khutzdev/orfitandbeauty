import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const WA_NUMBER = "7411108466";
const WA_MESSAGE = encodeURIComponent(
  "¡Hola! Me gustaría agendar una consulta en Orfit.",
);

export default function FloatingWhatsApp() {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "0.75rem",
      }}
    >
      <AnimatePresence>
        {tooltipVisible && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              background: "#1A1A18",
              color: "#FAFAF7",
              padding: "0.875rem 1.25rem",
              fontSize: "0.875rem",
              lineHeight: 1.5,
              maxWidth: 220,
              borderRadius: "12px",
              boxShadow: "0 8px 24px rgba(26,26,24,0.25)",
              position: "relative",
            }}
          >
            <button
              onClick={() => setTooltipVisible(false)}
              style={{
                position: "absolute",
                top: "0.5rem",
                right: "0.5rem",
                background: "transparent",
                border: "none",
                color: "rgba(250,250,247,0.5)",
                cursor: "pointer",
                padding: 0,
                display: "flex",
              }}
            >
              <X size={14} />
            </button>
            <p
              style={{
                fontWeight: 600,
                marginBottom: "0.25rem",
                paddingRight: "1rem",
              }}
            >
              Chátea con nosotros
            </p>
            <p style={{ color: "rgba(250,250,247,0.65)", fontSize: "0.8rem" }}>
              Solemos responder en pocos minutos.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ position: "relative" }}>
        {/* Pulse ring */}
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background: "#25D366",
            zIndex: -1,
          }}
        />

        <a
          href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setTooltipVisible(true)}
          onMouseLeave={() => setTooltipVisible(false)}
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "#25D366",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
            transition: "transform 0.2s",
            cursor: "pointer",
            textDecoration: "none",
          }}
          onFocus={(e) =>
            ((e.currentTarget as HTMLElement).style.transform = "scale(1.1)")
          }
          onBlur={(e) =>
            ((e.currentTarget as HTMLElement).style.transform = "scale(1)")
          }
          aria-label="Chatear por WhatsApp"
        >
          <MessageCircle size={26} color="#fff" fill="#fff" />
        </a>
      </div>
    </div>
  );
}
