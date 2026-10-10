import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs, waLink } from "../data/site";
import Reveal from "./Reveal";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-36">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2 className="heading mt-6">
              Resolvemos <em className="italic text-rose-deep">tus dudas</em>
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              ¿No encuentras lo que buscas? Escríbenos y con gusto te orientamos.
            </p>
            <a
              href={waLink("¡Hola! Tengo una pregunta sobre sus tratamientos.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline mt-8"
            >
              Hacer una pregunta
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
          <ul className="border-t border-ink/10">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.question} className="border-b border-ink/10">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 py-7 text-left"
                  >
                    <span className="font-serif text-xl font-light leading-snug tracking-tight sm:text-2xl">
                      {f.question}
                    </span>
                    <span
                      className={`mt-1 grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-500 ease-soft ${
                        isOpen ? "rotate-45 border-ink bg-ink text-cream" : "border-ink/15"
                      }`}
                    >
                      <Plus size={15} strokeWidth={1.75} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-8 pr-14 leading-relaxed text-muted">{f.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
