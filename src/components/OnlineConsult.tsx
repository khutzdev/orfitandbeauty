import { Link } from "react-router";
import { ArrowRight, CalendarCheck, MessageCircle, Video } from "lucide-react";
import { onlineServices } from "../data/services";
import Reveal from "./Reveal";

const howItWorks = [
  {
    icon: CalendarCheck,
    title: "Agenda en línea",
    description: "Elige servicio, día y hora en menos de un minuto.",
  },
  {
    icon: MessageCircle,
    title: "Confirmamos por WhatsApp",
    description: "Te confirmamos la cita y te enviamos el enlace de la videollamada.",
  },
  {
    icon: Video,
    title: "Consulta desde casa",
    description: "Plan personalizado y seguimiento sin salir de casa.",
  },
];

export default function OnlineConsult() {
  return (
    <section id="online" className="px-3 sm:px-5">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-ink py-20 text-cream lg:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 -top-32 size-[30rem] rounded-full bg-rose/25 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 right-0 size-[28rem] rounded-full bg-mint/10 blur-3xl"
        />

        <div className="container-x relative grid gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <span className="eyebrow text-blush!">Consultas en línea</span>
            <h2 className="heading mt-6">
              Tu consulta, <em className="italic text-blush">desde donde estés</em>
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-cream/65">
              ¿No estás en Ometepec? Atendemos por videollamada con la misma
              atención personalizada que en consultorio.
            </p>

            <p className="mt-10 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-cream/50">
              Disponible en línea
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {onlineServices.map((s) => (
                <li
                  key={s.name}
                  className="rounded-full border border-cream/20 px-4 py-2 text-sm text-cream/85"
                >
                  {s.name}
                </li>
              ))}
            </ul>

            <Link
              to="/agendar?modalidad=online"
              className="btn mt-10 bg-cream text-ink hover:bg-blush"
            >
              Agendar consulta en línea
              <ArrowRight size={15} strokeWidth={1.75} />
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <ol className="grid gap-4">
              {howItWorks.map((s, i) => (
                <li
                  key={s.title}
                  className="flex gap-5 rounded-3xl border border-cream/10 bg-cream/[0.04] p-6 backdrop-blur sm:p-7"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-cream/10 text-blush">
                    <s.icon size={20} strokeWidth={1.5} />
                  </span>
                  <span>
                    <span className="font-serif text-sm italic text-blush">0{i + 1}</span>
                    <span className="mt-1 block font-serif text-2xl font-light">{s.title}</span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-cream/60">
                      {s.description}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
