import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Clock, Sparkles, X } from "lucide-react";
import { procedures, type Procedure } from "../data/procedures";
import Reveal from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

function ProcedureCard({
  procedure,
  index,
  onClick,
}: {
  procedure: Procedure;
  index: number;
  onClick: () => void;
}) {
  return (
    <Reveal delay={(index % 4) * 0.08}>
      <button onClick={onClick} className="group block w-full text-left">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-sand sm:aspect-[3/4]">
          <img
            src={procedure.image}
            alt={procedure.name}
            loading="lazy"
            className="size-full object-cover transition-transform duration-[1.2s] ease-soft group-hover:scale-105"
          />
          <span className="absolute left-5 top-5 rounded-full bg-cream/90 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.12em] text-ink backdrop-blur">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="absolute right-5 top-5 grid size-10 translate-y-2 place-items-center rounded-full bg-cream text-ink opacity-0 transition-all duration-500 ease-soft group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight size={16} strokeWidth={1.75} />
          </span>
        </div>
        <h3 className="mt-5 font-serif text-2xl font-light tracking-tight">{procedure.name}</h3>
        <p className="mt-1.5 text-sm text-muted">{procedure.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[0.72rem] uppercase tracking-[0.12em] text-ink/60">
          <span className="flex items-center gap-1.5">
            <Clock size={12} strokeWidth={1.75} />
            {procedure.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles size={12} strokeWidth={1.75} />
            {procedure.recovery}
          </span>
        </div>
      </button>
    </Reveal>
  );
}

function Drawer({ procedure, onClose }: { procedure: Procedure; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex justify-end bg-ink/40 backdrop-blur-sm"
    >
      <motion.aside
        role="dialog"
        aria-modal="true"
        aria-label={procedure.name}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.6, ease }}
        onClick={(e) => e.stopPropagation()}
        className="flex h-full w-full max-w-xl flex-col overflow-y-auto bg-cream"
      >
        <div className="relative aspect-[4/3] shrink-0 overflow-hidden">
          <img src={procedure.image} alt={procedure.name} className="size-full object-cover" />
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-cream text-ink transition-transform duration-300 hover:rotate-90"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex flex-1 flex-col p-8 sm:p-12">
          <span className="eyebrow">{procedure.tagline}</span>
          <h3 className="mt-5 font-serif text-4xl font-light tracking-tight sm:text-5xl">
            {procedure.name}
          </h3>
          <p className="mt-6 leading-relaxed text-muted">{procedure.description}</p>

          <dl className="mt-10 grid grid-cols-2 border-y border-ink/10">
            <div className="py-6 pr-6">
              <dt className="text-[0.68rem] uppercase tracking-[0.18em] text-muted">Duración</dt>
              <dd className="mt-2 font-serif text-xl font-light sm:text-2xl">{procedure.duration}</dd>
            </div>
            <div className="border-l border-ink/10 py-6 pl-6">
              <dt className="text-[0.68rem] uppercase tracking-[0.18em] text-muted">Recuperación</dt>
              <dd className="mt-2 font-serif text-xl font-light sm:text-2xl">{procedure.recovery}</dd>
            </div>
          </dl>

          <a href="#contact" onClick={onClose} className="btn-dark mt-10 w-full">
            Agendar una consulta
            <ArrowUpRight size={15} strokeWidth={1.75} />
          </a>
        </div>
      </motion.aside>
    </motion.div>
  );
}

export default function Procedures() {
  const [selected, setSelected] = useState<Procedure | null>(null);

  return (
    <section id="procedures" className="py-24 lg:py-36">
      <div className="container-x">
        <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <span className="eyebrow">Nuestros tratamientos</span>
            <h2 className="heading mt-6">
              Tratamientos diseñados <em className="italic text-rose-deep">para ti</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="leading-relaxed text-muted">
              Cada procedimiento se adapta a tu anatomía y objetivos. Toca un
              tratamiento para conocer los detalles, tiempos y recuperación.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {procedures.map((p, i) => (
            <ProcedureCard key={p.id} procedure={p} index={i} onClick={() => setSelected(p)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <Drawer procedure={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
