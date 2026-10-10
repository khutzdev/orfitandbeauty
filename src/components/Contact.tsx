import { Link } from "react-router";
import { ArrowRight, ArrowUpRight, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { bookingLink, contact, hoursSummary, openEmail } from "../data/site";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-36">
      <div className="container-x">
        <Reveal className="mb-14 max-w-2xl lg:mb-16">
          <span className="eyebrow">Contacto</span>
          <h2 className="heading mt-6">
            Visítanos o <em className="italic text-rose-deep">agenda en línea</em>
          </h2>
        </Reveal>

        <div className="grid overflow-hidden rounded-[2.5rem] bg-sand/70 lg:grid-cols-12">
          <Reveal className="relative flex flex-col gap-10 bg-ink p-8 text-cream sm:p-12 lg:col-span-5 lg:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-32 -right-32 size-80 rounded-full bg-rose/30 blur-3xl"
            />

            <div className="relative space-y-8">
              <div>
                <p className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-cream/50">
                  <MapPin size={13} /> Consultorio
                </p>
                <p className="mt-3 whitespace-pre-line font-serif text-xl font-light leading-snug">
                  {contact.address}
                </p>
                <a
                  href={contact.directionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm text-blush underline-offset-4 hover:underline"
                >
                  Cómo llegar <ArrowUpRight size={14} />
                </a>
              </div>

              <div className="border-t border-cream/15 pt-6">
                <p className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-cream/50">
                  <Clock size={13} /> Horario
                </p>
                <dl className="mt-3 space-y-1.5 text-sm">
                  {hoursSummary.map((h) => (
                    <div key={h.days} className="flex justify-between gap-4">
                      <dt className="text-cream/65">{h.days}</dt>
                      <dd className="text-right tabular-nums">{h.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="grid gap-6 border-t border-cream/15 pt-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div>
                  <p className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-cream/50">
                    <Phone size={13} /> Teléfono
                  </p>
                  <a href={contact.phoneHref} className="mt-2 block font-serif text-xl font-light hover:text-blush">
                    {contact.phone}
                  </a>
                </div>
                <div>
                  <p className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-cream/50">
                    <Mail size={13} /> Correo
                  </p>
                  <button
                    type="button"
                    onClick={openEmail}
                    className="mt-2 block text-left font-serif text-xl font-light hover:text-blush"
                  >
                    {contact.emailLabel}
                  </button>
                </div>
              </div>
            </div>

            <div className="relative mt-auto flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link to="/agendar" className="btn bg-cream text-ink hover:bg-blush">
                Agendar cita
                <ArrowRight size={15} strokeWidth={1.75} />
              </Link>
              <a
                href={bookingLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-cream/25 text-cream hover:border-[#25D366] hover:bg-[#25D366] hover:text-ink"
              >
                <MessageCircle size={15} strokeWidth={1.75} />
                WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="min-h-[22rem] lg:col-span-7">
            <iframe
              title="Ubicación de OR´Fit & Beauty en Google Maps"
              src={contact.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block size-full min-h-[22rem] border-0"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
