import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { waLink } from "../data/site";

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "10+", label: "Años de experiencia" },
  { value: "2k+", label: "Pacientes" },
  { value: "98%", label: "Satisfacción" },
];

function RotatingBadge() {
  return (
    <a
      href="#contact"
      aria-label="Agenda tu consulta"
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
    </a>
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
            Medicina Estética · Puebla
          </motion.span>

          <h1 className="mt-8 font-serif text-[clamp(3.2rem,8.5vw,7.5rem)] font-light leading-[0.95] tracking-[-0.035em]">
            {["Tu belleza,", "refinada."].map((line, i) => (
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
              Precisión médica con visión artística. Resultados naturales y
              duraderos adaptados a tus rasgos únicos — porque el mejor trabajo
              estético jamás se nota.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#procedures" className="btn-dark">
                Explorar tratamientos
                <ArrowRight size={15} strokeWidth={1.75} />
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <MessageCircle size={15} strokeWidth={1.75} />
                Consulta por WhatsApp
              </a>
            </div>

            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-ink/10 pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-serif text-3xl font-light sm:text-4xl">{s.value}</dd>
                  <dd className="mt-1 text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
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
