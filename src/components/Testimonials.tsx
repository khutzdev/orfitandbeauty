import { ArrowUpRight, Star } from "lucide-react";
import { googleReviews } from "../data/site";
import Reveal from "./Reveal";

function GoogleMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.7z" />
      <path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.9-3c-1.1.7-2.5 1.2-4.1 1.2-3.1 0-5.8-2.1-6.7-5H1.3v3.1A12 12 0 0 0 12 24z" />
      <path fill="#FBBC05" d="M5.3 14.3a7.2 7.2 0 0 1 0-4.6V6.6H1.3a12 12 0 0 0 0 10.8l4-3.1z" />
      <path fill="#EA4335" d="M12 4.8c1.8 0 3.4.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1c.9-2.9 3.6-4.9 6.7-4.9z" />
    </svg>
  );
}

function Stars({ size = 14 }: { size?: number }) {
  return (
    <span className="flex gap-0.5 text-[#E8A33D]" aria-label="5 de 5 estrellas">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={size} fill="currentColor" strokeWidth={0} />
      ))}
    </span>
  );
}

export default function Testimonials() {
  const { rating, count, href, reviews } = googleReviews;

  return (
    <section id="testimonials" className="bg-blush/50 py-24 lg:py-36">
      <div className="container-x">
        <div className="mb-14 grid gap-10 lg:mb-16 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <span className="eyebrow">Reseñas de pacientes</span>
            <h2 className="heading mt-6">
              Lo que dicen <em className="italic text-rose-deep">de nosotros</em>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-3xl bg-cream p-5 transition-shadow hover:shadow-[0_20px_40px_-25px_rgba(29,27,24,0.4)]"
            >
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-sand/70">
                <GoogleMark className="size-7" />
              </span>
              <span className="flex-1">
                <span className="flex items-baseline gap-2">
                  <span className="font-serif text-4xl font-light leading-none">
                    {rating.toFixed(1)}
                  </span>
                  <Stars />
                </span>
                <span className="mt-1.5 block text-xs text-muted">{count} reseñas en Google</span>
              </span>
              <ArrowUpRight
                size={18}
                strokeWidth={1.5}
                className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.author} delay={i * 0.08} className="h-full">
              <figure className="flex h-full flex-col rounded-[1.75rem] bg-cream p-7 sm:p-8">
                <div className="flex items-center justify-between">
                  <Stars />
                  <GoogleMark className="size-4" />
                </div>
                <blockquote className="mt-6 flex-1 font-serif text-xl font-light leading-snug tracking-tight">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 border-t border-ink/10 pt-5">
                  <span className="grid size-10 place-items-center rounded-full bg-blush font-serif text-lg">
                    {r.author[0]}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{r.author}</span>
                    <span className="block text-xs text-muted">{r.date}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a href={href} target="_blank" rel="noopener noreferrer" className="btn-outline">
            Ver reseñas en Google
            <ArrowUpRight size={15} strokeWidth={1.75} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
