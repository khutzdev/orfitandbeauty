import { specialist } from "../data/site";
import { Logo } from "./Logo";
import Reveal from "./Reveal";

export default function Specialist() {
  return (
    <section id="specialist" className="bg-sand/60 py-24 lg:py-36">
      <div className="container-x grid items-start gap-16 lg:grid-cols-12 lg:gap-10">
        <Reveal className="relative lg:sticky lg:top-28 lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2rem] bg-blush">
            {specialist.image ? (
              <img
                src={specialist.image}
                alt={specialist.name}
                loading="lazy"
                className="size-full object-cover object-top"
              />
            ) : (
              <div className="grid size-full place-items-center bg-[radial-gradient(circle_at_30%_20%,var(--color-cream),var(--color-blush)_60%)]">
                <Logo className="h-auto w-1/2 opacity-90" aria-hidden />
              </div>
            )}
          </div>
          <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-cream px-6 py-5 shadow-[0_30px_60px_-30px_rgba(29,27,24,0.4)] sm:left-auto sm:right-[-1.5rem] sm:max-w-xs">
            <p className="font-serif text-xl font-light leading-tight">{specialist.name}</p>
            <p className="mt-1.5 text-[0.65rem] uppercase tracking-[0.16em] text-muted">
              {specialist.role}
            </p>
            <p className="mt-3 border-t border-ink/10 pt-3 text-xs text-muted">
              Cédulas profesionales{" "}
              <span className="font-semibold tabular-nums text-ink">
                {specialist.licenses.join(" · ")}
              </span>
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="pt-6 lg:col-span-6 lg:col-start-7 lg:pt-0">
          <span className="eyebrow">Conoce a tu especialista</span>
          <h2 className="heading mt-6">
            Ciencia y calidez <em className="italic text-rose-deep">al servicio de tu belleza</em>
          </h2>
          <div className="mt-8 space-y-5 leading-relaxed text-muted">
            {specialist.bio.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <p className="mt-12 text-[0.7rem] font-semibold uppercase tracking-[0.2em]">
            Lo que me define
          </p>
          <ul className="mt-5 border-t border-ink/10">
            {specialist.values.map((v, i) => (
              <li key={v.title} className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-ink/10 py-5">
                <span className="pt-1 font-serif text-sm italic text-rose-deep">0{i + 1}</span>
                <span>
                  <span className="block font-serif text-xl font-light">{v.title}</span>
                  <span className="mt-1 block text-[0.95rem] text-muted">{v.description}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
