import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "../data/site";
import Reveal from "./Reveal";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  useEffect(() => {
    const id = setTimeout(() => setActive((a) => (a + 1) % testimonials.length), 8000);
    return () => clearTimeout(id);
  }, [active]);

  return (
    <section id="testimonials" className="bg-blush/50 py-24 lg:py-36">
      <div className="container-x">
        <Reveal className="mx-auto max-w-4xl text-center">
          <span className="eyebrow">Historias de pacientes</span>

          <div className="relative mt-20 grid min-h-[16rem] place-items-center sm:min-h-[14rem]">
            <span
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 font-serif text-[9rem] leading-none text-rose/30"
            >
              “
            </span>
            <AnimatePresence mode="wait">
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <blockquote className="font-serif text-2xl font-light leading-snug tracking-tight sm:text-3xl lg:text-[2.6rem] lg:leading-[1.2]">
                  {t.text}
                </blockquote>
                <figcaption className="mt-10">
                  <span className="font-serif text-lg italic">{t.name}</span>
                  <span className="mx-3 text-muted">—</span>
                  <span className="text-[0.7rem] uppercase tracking-[0.18em] text-muted">
                    {t.treatment}
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-12 flex justify-center gap-3" role="tablist" aria-label="Testimonios">
            {testimonials.map((item, i) => (
              <button
                key={item.name}
                role="tab"
                aria-selected={i === active}
                aria-label={`Testimonio de ${item.name}`}
                onClick={() => setActive(i)}
                className="group relative h-6 w-14"
              >
                <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-ink/20" />
                <span
                  className={`absolute left-0 top-1/2 h-px -translate-y-1/2 bg-ink transition-all duration-700 ${
                    i === active ? "w-full" : "w-0 group-hover:w-1/3"
                  }`}
                />
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
