import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { procedures } from "../data/procedures";
import { contact, waLink } from "../data/site";
import Reveal from "./Reveal";

interface FormData {
  name: string;
  email: string;
  phone: string;
  treatment: string;
  message: string;
}

const info = [
  { label: "Ubicación", content: contact.address },
  { label: "Teléfono", content: contact.phone, href: contact.phoneHref },
  { label: "Correo", content: contact.email, href: contact.emailHref },
];

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted">
        {label}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-rose-deep">{error}</span>}
    </label>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = () => {
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-36">
      <div className="container-x">
        <div className="grid overflow-hidden rounded-[2.5rem] bg-sand/70 lg:grid-cols-12">
          <Reveal className="relative flex flex-col justify-between gap-12 bg-ink p-8 text-cream sm:p-12 lg:col-span-5 lg:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-32 -right-32 size-80 rounded-full bg-rose/30 blur-3xl"
            />
            <div className="relative">
              <span className="eyebrow text-blush!">Contáctanos</span>
              <h2 className="heading mt-6">
                Agenda tu <em className="italic text-blush">consulta</em>
              </h2>
              <p className="mt-6 max-w-sm leading-relaxed text-cream/65">
                ¿Listo para comenzar? Contáctanos y uno de nuestros especialistas
                te responderá en menos de 24 horas para agendar tu consulta
                personal.
              </p>
            </div>

            <dl className="relative space-y-6">
              {info.map((item) => (
                <div key={item.label} className="border-t border-cream/15 pt-5">
                  <dt className="text-[0.65rem] uppercase tracking-[0.2em] text-cream/50">
                    {item.label}
                  </dt>
                  <dd className="mt-2 whitespace-pre-line font-serif text-xl font-light">
                    {item.href ? (
                      <a href={item.href} className="transition-colors hover:text-blush">
                        {item.content}
                      </a>
                    ) : (
                      item.content
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn relative self-start bg-[#25D366] text-ink hover:bg-cream"
            >
              <MessageCircle size={16} strokeWidth={1.75} />
              Chatear por WhatsApp
            </a>
          </Reveal>

          <Reveal delay={0.1} className="p-8 sm:p-12 lg:col-span-7 lg:p-16">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex h-full min-h-96 flex-col items-center justify-center text-center"
                >
                  <span className="grid size-16 place-items-center rounded-full bg-ink text-cream">
                    <Check size={26} strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-8 font-serif text-4xl font-light">Mensaje recibido</h3>
                  <p className="mt-4 max-w-sm leading-relaxed text-muted">
                    Gracias por contactarnos. Nuestro equipo se comunicará contigo
                    en menos de 24 horas para confirmar tu consulta.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  exit={{ opacity: 0, y: -16 }}
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="space-y-9"
                >
                  <div className="grid gap-9 sm:grid-cols-2">
                    <Field label="Nombre *" error={errors.name && "Requerido"}>
                      <input
                        {...register("name", { required: true })}
                        placeholder="Tu nombre completo"
                        autoComplete="name"
                        className={`field ${errors.name ? "border-rose-deep" : ""}`}
                      />
                    </Field>
                    <Field
                      label="Correo electrónico *"
                      error={errors.email && "Correo electrónico válido requerido"}
                    >
                      <input
                        {...register("email", {
                          required: true,
                          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        })}
                        type="email"
                        placeholder="tu@correo.com"
                        autoComplete="email"
                        className={`field ${errors.email ? "border-rose-deep" : ""}`}
                      />
                    </Field>
                  </div>

                  <div className="grid gap-9 sm:grid-cols-2">
                    <Field label="Teléfono">
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="+52 000 000 0000"
                        autoComplete="tel"
                        className="field"
                      />
                    </Field>
                    <Field label="Tratamiento de interés">
                      <select {...register("treatment")} className="field cursor-pointer">
                        <option value="">Selecciona un tratamiento</option>
                        {procedures.map((p) => (
                          <option key={p.id}>{p.name}</option>
                        ))}
                        <option>Aún no lo sé</option>
                      </select>
                    </Field>
                  </div>

                  <Field label="Mensaje">
                    <textarea
                      {...register("message")}
                      placeholder="Cuéntanos sobre tus objetivos o cualquier duda que tengas..."
                      rows={4}
                      className="field resize-none"
                    />
                  </Field>

                  <button type="submit" className="btn-dark w-full sm:w-auto">
                    Enviar mensaje
                    <ArrowRight size={15} strokeWidth={1.75} />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
