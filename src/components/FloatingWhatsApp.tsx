import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { bookingLink } from "../data/site";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-5 right-5 z-40 flex items-end gap-3 sm:bottom-8 sm:right-8"
        >
          <AnimatePresence>
            {tooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ delay: 0.6, duration: 0.3 }}
                className="relative mb-1 hidden rounded-2xl bg-cream py-3 pl-4 pr-9 shadow-[0_20px_40px_-20px_rgba(29,27,24,0.45)] sm:block"
              >
                <button
                  onClick={() => setTooltip(false)}
                  aria-label="Cerrar"
                  className="absolute right-2.5 top-2.5 text-muted hover:text-ink"
                >
                  <X size={13} />
                </button>
                <p className="text-sm font-semibold">Chatea con nosotros</p>
                <p className="text-xs text-muted">Solemos responder en pocos minutos.</p>
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href={bookingLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chatear por WhatsApp"
            className="grid size-14 place-items-center rounded-full bg-ink text-cream shadow-[0_20px_40px_-15px_rgba(29,27,24,0.6)] transition-all duration-500 ease-soft hover:scale-105 hover:bg-[#25D366] hover:text-ink"
          >
            <MessageCircle size={22} strokeWidth={1.75} />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
