import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { serviceCategories } from "../data/services";
import { waLink } from "../data/site";
import Reveal from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Services() {
  const [activeId, setActiveId] = useState(serviceCategories[0].id);
  const active = serviceCategories.find((c) => c.id === activeId)!;

  return (
    <section id="services" className="py-24 lg:py-36">
      <div className="container-x">
        <div className="mb-14 grid gap-8 lg:mb-16 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <span className="eyebrow">Nuestros servicios</span>
            <h2 className="heading mt-6">
              Un plan integral para tu piel, tu figura{" "}
              <em className="italic text-rose-deep">y tu bienestar</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="leading-relaxed text-muted">
              Desde la valoración médica hasta la tecnología más avanzada: elige
              un área para conocer cada tratamiento.
            </p>
          </Reveal>
        </div>

        <Reveal
          role="tablist"
          aria-label="Categorías de servicios"
          className="grid grid-cols-2 gap-3 lg:grid-cols-4"
        >
          {serviceCategories.map((c, i) => {
            const selected = c.id === activeId;
            return (
              <button
                key={c.id}
                role="tab"
                aria-selected={selected}
                aria-controls="services-panel"
                onClick={() => setActiveId(c.id)}
                className={`flex min-h-28 flex-col justify-between rounded-3xl border p-5 text-left transition-all duration-500 ease-soft sm:min-h-32 sm:p-6 ${
                  selected
                    ? "border-ink bg-ink text-cream"
                    : "border-ink/10 bg-sand/50 hover:border-ink/30 hover:bg-sand"
                }`}
              >
                <span
                  className={`font-serif text-sm italic ${selected ? "text-blush" : "text-rose-deep"}`}
                >
                  0{i + 1}
                </span>
                <span className="mt-4 font-serif text-lg font-light leading-tight sm:text-xl">
                  {c.name}
                </span>
              </button>
            );
          })}
        </Reveal>

        <div id="services-panel" role="tabpanel" className="mt-12 lg:mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6, ease }}
              className="grid gap-12 lg:grid-cols-12 lg:gap-16"
            >
              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-28">
                  <div className="aspect-[4/3] overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-sand sm:aspect-[5/4]">
                    <img
                      src={active.image}
                      alt={active.name}
                      loading="lazy"
                      className="size-full object-cover"
                    />
                  </div>
                  <p className="mt-8 font-serif text-2xl font-light italic leading-snug text-rose-deep">
                    {active.tagline}
                  </p>
                  <p className="mt-4 leading-relaxed text-muted">{active.intro}</p>
                  <a
                    href={waLink(
                      `¡Hola! Me gustaría agendar una valoración para ${active.name}.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-dark mt-8"
                  >
                    Agendar valoración
                    <ArrowUpRight size={15} strokeWidth={1.75} />
                  </a>
                </div>
              </div>

              <ol className="border-t border-ink/10 lg:col-span-7">
                {active.services.map((s, i) => (
                  <li key={s.name} className="group border-b border-ink/10">
                    <a
                      href={waLink(`¡Hola! Me interesa el tratamiento de ${s.name}. ¿Me pueden dar informes?`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid grid-cols-[2.5rem_1fr_auto] items-start gap-x-4 py-7 sm:grid-cols-[3.5rem_1fr_auto]"
                    >
                      <span className="pt-1.5 font-serif text-sm italic text-rose-deep">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <span className="block font-serif text-2xl font-light tracking-tight transition-colors group-hover:text-rose-deep sm:text-[1.75rem]">
                          {s.name}
                        </span>
                        <span className="mt-2 block max-w-xl text-[0.95rem] leading-relaxed text-muted">
                          {s.description}
                        </span>
                      </span>
                      <span
                        aria-hidden
                        className="mt-1 grid size-10 place-items-center rounded-full border border-ink/15 transition-all duration-500 ease-soft group-hover:border-ink group-hover:bg-ink group-hover:text-cream"
                      >
                        <ArrowUpRight size={15} strokeWidth={1.75} />
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
