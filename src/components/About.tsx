import Reveal from "./Reveal";

const pillars = [
  "Médicos certificados y especializados",
  "Productos premium de calidad certificada",
  "Planes de tratamiento individualizados",
  "Acompañamiento continuo post-tratamiento",
];

export default function About() {
  return (
    <section id="about" className="bg-sand/60 py-24 lg:py-36">
      <div className="container-x grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <Reveal className="relative lg:col-span-6">
          <div className="relative mr-10 aspect-[4/5] overflow-hidden rounded-[2rem] sm:mr-24">
            <img
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=900&q=80"
              alt="Tratamiento facial en el consultorio de Orfit"
              loading="lazy"
              className="size-full object-cover"
            />
          </div>
          <div className="absolute -bottom-10 right-0 w-[46%] overflow-hidden rounded-t-full rounded-b-[1.5rem] border-[6px] border-cream shadow-[0_30px_60px_-30px_rgba(29,27,24,0.4)]">
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80"
              alt="Detalle de tratamiento facial"
              loading="lazy"
              className="aspect-[3/4] size-full object-cover"
            />
          </div>
          <div className="absolute left-6 top-6 rounded-2xl bg-cream/95 px-5 py-4 backdrop-blur">
            <p className="font-serif text-4xl font-light leading-none">10+</p>
            <p className="mt-1 text-[0.65rem] uppercase tracking-[0.18em] text-muted">
              Años de experiencia
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-5 lg:col-start-8">
          <span className="eyebrow">Sobre Orfit</span>
          <h2 className="heading mt-6">
            Medicina y arte, <em className="italic text-rose-deep">en perfecto equilibrio.</em>
          </h2>
          <div className="mt-8 space-y-5 leading-relaxed text-muted">
            <p>
              En Orfit creemos que la medicina estética es tanto ciencia como
              arte. Cada tratamiento está guiado por un profundo conocimiento
              anatómico y una refinada sensibilidad estética — para que los
              resultados siempre se sientan como tú, solo que mejor.
            </p>
            <p>
              Trabajamos con cada paciente de forma individual, escuchando
              primero y tratando después. Seguridad, sutileza y satisfacción son
              los pilares de todo lo que hacemos.
            </p>
          </div>

          <ul className="mt-10 border-t border-ink/10">
            {pillars.map((p, i) => (
              <li
                key={p}
                className="flex items-baseline gap-5 border-b border-ink/10 py-4 text-[0.95rem]"
              >
                <span className="font-serif text-sm italic text-rose-deep">
                  0{i + 1}
                </span>
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
