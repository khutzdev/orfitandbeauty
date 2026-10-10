import { brands } from "../data/site";

export default function Brands() {
  const track = [...brands, ...brands];

  return (
    <section id="brands" className="border-y border-ink/10 bg-cream">
      <div className="container-x flex flex-col gap-6 py-10 md:flex-row md:items-center md:gap-12">
        <p className="shrink-0 text-[0.7rem] font-semibold uppercase leading-relaxed tracking-[0.22em] text-muted md:max-w-48">
          Solo marcas certificadas a nivel internacional
        </p>

        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <ul className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
            {track.map((name, i) => (
              <li
                key={`${name}-${i}`}
                aria-hidden={i >= brands.length}
                className="flex items-center gap-14 pr-14 font-serif text-3xl font-light tracking-tight text-ink/45 transition-colors duration-300 hover:text-ink"
              >
                {name}
                <span className="text-base text-rose">✦</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
