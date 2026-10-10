import { Link } from "react-router";
import { Instagram, Facebook, ArrowUp } from "lucide-react";
import { Logo } from "./Logo";
import { contact, navLinks, socials } from "../data/site";

const socialIcons: Record<string, React.ReactNode> = {
  Instagram: <Instagram size={16} strokeWidth={1.5} />,
  Facebook: <Facebook size={16} strokeWidth={1.5} />,
};

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-forest-deep text-cream">
      <div className="container-x pt-20">
        <div className="grid gap-12 border-b border-cream/10 pb-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" aria-label="Orfit — inicio" className="inline-block rounded-2xl bg-cream p-3">
              <Logo className="h-12 w-auto" />
            </Link>
            <p className="mt-6 max-w-xs leading-relaxed text-cream/60">
              Clínica de medicina estética, regenerativa y bariatría dedicada a
              resultados naturales y duraderos.
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Pie de página">
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-cream/40">Explorar</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-cream/75 transition-colors hover:text-blush">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-cream/40">Contacto</p>
            <div className="mt-5 space-y-3 text-cream/75">
              <a href={contact.emailHref} className="block transition-colors hover:text-blush">
                {contact.email}
              </a>
              <a href={contact.phoneHref} className="block transition-colors hover:text-blush">
                {contact.phone}
              </a>
            </div>
            <div className="mt-8 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid size-11 place-items-center rounded-full border border-cream/20 text-cream/75 transition-all duration-300 hover:border-blush hover:bg-blush hover:text-ink"
                >
                  {socialIcons[s.label]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-8 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Orfit. Todos los derechos reservados.</p>
          <p>Los resultados pueden variar. Consulta con un especialista.</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 uppercase tracking-[0.18em] transition-colors hover:text-cream"
          >
            Volver arriba <ArrowUp size={13} />
          </a>
        </div>
      </div>

      <p
        aria-hidden
        className="select-none text-center font-serif text-[28vw] font-light italic leading-[0.75] tracking-[-0.05em] text-cream/[0.06]"
      >
        Orfit
      </p>
    </footer>
  );
}
