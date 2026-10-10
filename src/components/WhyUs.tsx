import { stats } from "../data/procedures";
import { pillars } from "../data/site";
import Reveal from "./Reveal";

export default function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-forest py-24 text-cream lg:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-48 top-0 size-[36rem] rounded-full bg-mint/10 blur-3xl"
      />

      <div className="container-x relative">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <span className="eyebrow text-blush!">Por qué Orfit</span>
            <h2 className="heading mt-6">
              Excelencia en la que <em className="italic text-blush">puedes confiar</em>
            </h2>
          </Reveal>
        </div>

        <Reveal
          delay={0.1}
          className="mt-16 grid grid-cols-2 gap-px border-y border-cream/15 bg-cream/15 lg:mt-20 lg:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-forest px-2 py-10 sm:px-6 lg:first:pl-0">
              <p className="font-serif text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">{s.value}</p>
              <p className="mt-3 text-[0.68rem] uppercase tracking-[0.18em] text-cream/60">
                {s.label}
              </p>
            </div>
          ))}
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <span className="font-serif text-sm italic text-blush">0{i + 1}</span>
              <h3 className="mt-4 font-serif text-2xl font-light tracking-tight">{p.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-cream/65">{p.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
