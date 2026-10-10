import { motion } from "framer-motion";
import { Link } from "react-router";
import { ArrowRight, ArrowUpRight, HeartPulse, Sparkles } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const specialties = [
  {
    category: "medicina-estetica",
    icon: Sparkles,
    title: "Medicina Estética",
    description: "Bótox, rellenos, faciales médicos y medicina regenerativa.",
  },
  {
    category: "consultas",
    icon: HeartPulse,
    title: "Bariatría",
    description: "Control de peso médico y Protocolo VIP Tirzepatide.",
    badge: "También en línea",
  },
];

function RotatingBadge() {
  return (
    <Link
      to="/agendar"
      aria-label="Agenda tu cita"
      className="group absolute -left-10 bottom-16 hidden size-32 place-items-center rounded-full bg-cream shadow-[0_20px_50px_-20px_rgba(29,27,24,0.35)] sm:grid"
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 animate-[spin_18s_linear_infinite]">
        <defs>
          <path id="badge-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
        </defs>
        <text className="fill-ink text-[8.5px] font-semibold uppercase tracking-[0.32em]">
          <textPath href="#badge-circle">Agenda tu consulta · Orfit ·</textPath>
        </text>
      </svg>
      <span className="grid size-11 place-items-center rounded-full bg-ink text-cream transition-colors duration-500 group-hover:bg-rose-deep">
        <ArrowRight size={16} strokeWidth={1.75} className="-rotate-45" />
      </span>
    </Link>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 size-[44rem] rounded-full bg-blush/70 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-60 bottom-0 size-[32rem] rounded-full bg-mint/50 blur-3xl"
      />

      <div className="container-x relative grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="eyebrow"
          >
            Medicina Estética y Bariatría
          </motion.span>

          <h1 className="mt-8 font-serif text-[clamp(2.9rem,7vw,4.6rem)] font-light leading-[1] tracking-[-0.035em]">
            {["Belleza que se\u00a0nota,", "salud que se\u00a0siente."].map((line, i) => (
              <span key={line} className="block overflow-hidden pb-2">
                <motion.span
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, delay: 0.15 + i * 0.12, ease }}
                  className={`block ${i === 1 ? "italic text-rose-deep" : ""}`}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease }}
          >
            <p className="mt-8 max-w-md text-[1.05rem] leading-relaxed text-muted">
              Rejuvenece tu piel, moldea tu figura y alcanza tu peso ideal con
              un plan médico diseñado para ti por la Dra.&nbsp;Karen De&nbsp;la&nbsp;O.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to="/agendar" className="btn-dark">
                Agenda tu valoración
                <ArrowRight size={15} strokeWidth={1.75} />
              </Link>
              <a href="#services" className="btn-outline">
                Ver tratamientos
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:mt-12">
              {specialties.map((sp) => (
                <Link
                  key={sp.title}
                  to="/#services"
                  state={{ serviceCategory: sp.category }}
                  className="group relative rounded-3xl border border-ink/10 bg-cream/70 p-4 backdrop-blur sm:p-5 transition-all duration-500 ease-soft hover:-translate-y-0.5 hover:border-ink/30 hover:bg-cream"
                >
                  <span className="flex items-start justify-between">
                    <span className="grid size-9 place-items-center rounded-full bg-blush text-rose-deep sm:size-10">
                      <sp.icon size={18} strokeWidth={1.5} />
                    </span>
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      className="text-muted transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                    />
                  </span>
                  <span className="mt-3 block font-serif text-lg font-light leading-tight sm:mt-4 sm:text-xl">{sp.title}</span>
                  <span className="mt-1 block text-xs leading-snug text-muted sm:text-sm">{sp.description}</span>
                  {sp.badge && (
                    <span className="mt-3 inline-block rounded-full bg-mint px-2 py-1 text-[0.55rem] sm:px-2.5 sm:text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-forest">
                      {sp.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.2, ease }}
          className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2rem] bg-sand">
            <motion.img
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease }}
              src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1000&q=85"
              alt="Paciente recibiendo un tratamiento facial en Orfit"
              className="size-full object-cover object-top"
            />
          </div>
          <RotatingBadge />
        </motion.div>
      </div>
    </section>
  );
}
