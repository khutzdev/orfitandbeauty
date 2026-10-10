import { useState } from "react";
import { Link, useSearchParams } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CalendarDays,
  Check,
  Clock,
  MessageCircle,
  Video,
} from "lucide-react";
import {
  generalConsultation,
  onlineServices,
  serviceCategories,
} from "../data/services";
import { openingHours, waLink } from "../data/site";

type Modality = "presencial" | "online";

interface Details {
  name: string;
  phone: string;
  email: string;
  firstVisit: "si" | "no";
  notes: string;
}

const ease = [0.22, 1, 0.36, 1] as const;
const steps = ["Modalidad", "Servicio", "Fecha y hora", "Tus datos"];
const DAYS_AHEAD = 21;

const modalities: { id: Modality; title: string; description: string; icon: typeof Video }[] = [
  {
    id: "presencial",
    title: "En consultorio",
    description: "Visítanos en Ometepec, Guerrero. Ideal para tratamientos, aparatología y faciales.",
    icon: Building2,
  },
  {
    id: "online",
    title: "Consulta en línea",
    description:
      "Por videollamada desde donde estés. Para valoración, bariatría y seguimiento de tu protocolo.",
    icon: Video,
  },
];

const toKey = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

const fromKey = (key: string) => {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d);
};

const longDate = (key: string) =>
  new Intl.DateTimeFormat("es-MX", { weekday: "long", day: "numeric", month: "long" }).format(
    fromKey(key),
  );

function slotsFor(key: string) {
  const date = fromKey(key);
  const now = new Date();
  const isToday = toKey(now) === key;
  return (openingHours[date.getDay()] ?? [])
    .flatMap(([start, end]) => Array.from({ length: end - start }, (_, i) => start + i))
    .filter((h) => !isToday || h > now.getHours() + 1)
    .map((h) => `${String(h).padStart(2, "0")}:00`);
}

function availableDays() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Array.from({ length: DAYS_AHEAD }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    return toKey(d);
  }).filter((key) => slotsFor(key).length > 0);
}

function OptionCard({
  selected,
  onClick,
  children,
  className = "",
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`relative rounded-2xl border text-left transition-all duration-300 ${
        selected
          ? "border-ink bg-ink text-cream"
          : "border-ink/10 bg-cream hover:border-ink/40"
      } ${className}`}
    >
      {children}
    </button>
  );
}

export default function Booking() {
  const [params] = useSearchParams();
  const presetModality = params.get("modalidad") === "online" ? "online" : null;

  const [step, setStep] = useState(presetModality ? 1 : 0);
  const [modality, setModality] = useState<Modality | null>(presetModality);
  const [service, setService] = useState<string | null>(params.get("servicio"));
  const [date, setDate] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const [days] = useState(availableDays);
  const slots = date ? slotsFor(date) : [];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Details>({ defaultValues: { firstVisit: "si" } });

  const chooseModality = (m: Modality) => {
    setModality(m);
    if (m === "online" && service && !onlineServices.some((s) => s.name === service)) {
      setService(null);
    }
  };

  const canContinue = [!!modality, !!service, !!date && !!time, true][step];

  const onSubmit = (data: Details) => {
    const lines = [
      "¡Hola! Quiero agendar una cita en OR´Fit & Beauty.",
      "",
      `• Modalidad: ${modality === "online" ? "Consulta en línea (videollamada)" : "En consultorio"}`,
      `• Servicio: ${service}`,
      `• Fecha: ${date && longDate(date)}`,
      `• Hora: ${time}`,
      `• Nombre: ${data.name}`,
      `• Teléfono: ${data.phone}`,
      data.email ? `• Correo: ${data.email}` : false,
      `• Primera consulta: ${data.firstVisit === "si" ? "Sí" : "No"}`,
      data.notes ? `• Comentarios: ${data.notes}` : false,
      "",
      "Quedo pendiente de su confirmación. ¡Gracias!",
    ].filter((l): l is string => l !== false);
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const summary = [
    {
      label: "Modalidad",
      value: modality && (modality === "online" ? "Consulta en línea" : "En consultorio"),
    },
    { label: "Servicio", value: service },
    { label: "Fecha", value: date && longDate(date) },
    { label: "Hora", value: time },
  ];

  if (sent) {
    return (
      <div className="container-x flex min-h-[80vh] items-center justify-center pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="max-w-lg text-center"
        >
          <span className="mx-auto grid size-16 place-items-center rounded-full bg-ink text-cream">
            <Check size={26} strokeWidth={1.5} />
          </span>
          <h1 className="mt-8 font-serif text-4xl font-light sm:text-5xl">¡Casi listo!</h1>
          <p className="mt-5 leading-relaxed text-muted">
            Abrimos WhatsApp con los datos de tu cita. Envía el mensaje y te
            confirmaremos el horario lo antes posible.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <button onClick={handleSubmit(onSubmit)} className="btn-outline">
              <MessageCircle size={15} strokeWidth={1.75} />
              Abrir WhatsApp de nuevo
            </button>
            <Link to="/" className="btn-dark">
              Volver al inicio
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24 lg:pt-36 lg:pb-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Agenda tu cita</span>
          <h1 className="mt-6 font-serif text-4xl font-light leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Reserva en <em className="italic text-rose-deep">cuatro pasos</em>
          </h1>
          <p className="mt-5 leading-relaxed text-muted">
            Elige cómo, qué y cuándo. Al final te enviamos a WhatsApp con tu
            solicitud lista para confirmar.
          </p>
        </div>

        <ol className="mt-10 grid grid-cols-4 gap-2" aria-label="Progreso">
          {steps.map((label, i) => (
            <li key={label}>
              <button
                type="button"
                disabled={i > step}
                onClick={() => setStep(i)}
                className="group w-full text-left disabled:cursor-default"
                aria-current={i === step ? "step" : undefined}
              >
                <span className="block h-1 overflow-hidden rounded-full bg-ink/10">
                  <span
                    className={`block h-full rounded-full bg-ink transition-all duration-700 ease-soft ${
                      i <= step ? "w-full" : "w-0"
                    }`}
                  />
                </span>
                <span
                  className={`mt-3 hidden text-[0.68rem] font-semibold uppercase tracking-[0.16em] sm:block ${
                    i <= step ? "text-ink" : "text-muted/60"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")} · {label}
                </span>
              </button>
            </li>
          ))}
        </ol>
        <p className="mt-3 text-[0.7rem] font-semibold uppercase tracking-[0.16em] sm:hidden">
          Paso {step + 1} de 4 · {steps[step]}
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="lg:col-span-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.45, ease }}
              >
                {step === 0 && (
                  <fieldset>
                    <legend className="font-serif text-2xl font-light sm:text-3xl">
                      ¿Cómo prefieres tu consulta?
                    </legend>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {modalities.map((m) => (
                        <OptionCard
                          key={m.id}
                          selected={modality === m.id}
                          onClick={() => chooseModality(m.id)}
                          className="p-6 sm:p-7"
                        >
                          <span
                            className={`grid size-12 place-items-center rounded-full ${
                              modality === m.id ? "bg-cream/10" : "bg-blush"
                            }`}
                          >
                            <m.icon size={20} strokeWidth={1.5} />
                          </span>
                          <span className="mt-6 block font-serif text-2xl font-light">{m.title}</span>
                          <span
                            className={`mt-2 block text-sm leading-relaxed ${
                              modality === m.id ? "text-cream/70" : "text-muted"
                            }`}
                          >
                            {m.description}
                          </span>
                        </OptionCard>
                      ))}
                    </div>
                  </fieldset>
                )}

                {step === 1 && (
                  <fieldset>
                    <legend className="font-serif text-2xl font-light sm:text-3xl">
                      ¿Qué servicio te interesa?
                    </legend>
                    {modality === "online" && (
                      <p className="mt-2 text-sm text-muted">
                        Servicios disponibles por videollamada.
                      </p>
                    )}
                    <div className="mt-6 space-y-8">
                      {(modality === "online"
                        ? [{ id: "online", name: "", services: onlineServices }]
                        : [
                            { id: "general", name: "", services: [generalConsultation] },
                            ...serviceCategories,
                          ]
                      ).map((group) => (
                        <div key={group.id}>
                          {group.name && (
                            <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-rose-deep">
                              {group.name}
                            </p>
                          )}
                          <div className="grid gap-2 sm:grid-cols-2">
                            {group.services.map((s) => (
                              <OptionCard
                                key={s.name}
                                selected={service === s.name}
                                onClick={() => setService(s.name)}
                                className="flex items-center justify-between gap-3 px-5 py-4"
                              >
                                <span className="text-[0.95rem] font-medium">{s.name}</span>
                                {service === s.name && <Check size={16} className="shrink-0" />}
                              </OptionCard>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                )}

                {step === 2 && (
                  <fieldset>
                    <legend className="font-serif text-2xl font-light sm:text-3xl">
                      Elige fecha y hora
                    </legend>
                    <p className="mt-2 text-sm text-muted">
                      Horarios según nuestra agenda. Te confirmamos disponibilidad por WhatsApp.
                    </p>

                    <div className="-mx-5 mt-6 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-5 sm:overflow-visible sm:px-0 lg:grid-cols-6">
                      {days.map((key) => {
                        const d = fromKey(key);
                        const selected = date === key;
                        return (
                          <OptionCard
                            key={key}
                            selected={selected}
                            onClick={() => {
                              setDate(key);
                              setTime(null);
                            }}
                            className="w-20 shrink-0 px-3 py-4 text-center sm:w-auto"
                          >
                            <span className={`block text-[0.65rem] uppercase tracking-[0.14em] ${selected ? "text-cream/70" : "text-muted"}`}>
                              {d.toLocaleDateString("es-MX", { weekday: "short" }).replace(".", "")}
                            </span>
                            <span className="mt-1 block font-serif text-2xl font-light">{d.getDate()}</span>
                            <span className={`block text-[0.65rem] uppercase tracking-[0.14em] ${selected ? "text-cream/70" : "text-muted"}`}>
                              {d.toLocaleDateString("es-MX", { month: "short" }).replace(".", "")}
                            </span>
                          </OptionCard>
                        );
                      })}
                    </div>

                    <div className="mt-8">
                      <p className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted">
                        <Clock size={13} /> {date ? `Horarios · ${longDate(date)}` : "Selecciona un día para ver horarios"}
                      </p>
                      {date && (
                        <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-5">
                          {slots.map((t) => (
                            <OptionCard
                              key={t}
                              selected={time === t}
                              onClick={() => setTime(t)}
                              className="py-3 text-center text-sm font-medium tabular-nums"
                            >
                              {t}
                            </OptionCard>
                          ))}
                        </div>
                      )}
                    </div>
                  </fieldset>
                )}

                {step === 3 && (
                  <fieldset className="space-y-8">
                    <legend className="font-serif text-2xl font-light sm:text-3xl">
                      Tus datos
                    </legend>
                    <div className="grid gap-8 sm:grid-cols-2">
                      <label className="block">
                        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted">
                          Nombre completo *
                        </span>
                        <input
                          {...register("name", { required: "Escribe tu nombre" })}
                          autoComplete="name"
                          placeholder="Tu nombre"
                          className={`field ${errors.name ? "border-rose-deep" : ""}`}
                        />
                        {errors.name && <span className="mt-1.5 block text-xs text-rose-deep">{errors.name.message}</span>}
                      </label>
                      <label className="block">
                        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted">
                          WhatsApp *
                        </span>
                        <input
                          {...register("phone", {
                            required: "Escribe tu número",
                            validate: (v) => v.replace(/\D/g, "").length >= 10 || "Número a 10 dígitos",
                          })}
                          type="tel"
                          inputMode="tel"
                          autoComplete="tel"
                          placeholder="741 000 0000"
                          className={`field ${errors.phone ? "border-rose-deep" : ""}`}
                        />
                        {errors.phone && <span className="mt-1.5 block text-xs text-rose-deep">{errors.phone.message}</span>}
                      </label>
                    </div>

                    <label className="block">
                      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted">
                        Correo (opcional)
                      </span>
                      <input
                        {...register("email", {
                          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Correo no válido" },
                        })}
                        type="email"
                        autoComplete="email"
                        placeholder="tu@correo.com"
                        className={`field ${errors.email ? "border-rose-deep" : ""}`}
                      />
                      {errors.email && <span className="mt-1.5 block text-xs text-rose-deep">{errors.email.message}</span>}
                    </label>

                    <div>
                      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted">
                        ¿Es tu primera consulta?
                      </span>
                      <div className="mt-3 flex gap-2">
                        {[
                          { v: "si", l: "Sí, es la primera" },
                          { v: "no", l: "Ya soy paciente" },
                        ].map((o) => (
                          <label key={o.v} className="cursor-pointer">
                            <input type="radio" value={o.v} {...register("firstVisit")} className="peer sr-only" />
                            <span className="block rounded-full border border-ink/15 px-5 py-2.5 text-sm transition-colors peer-checked:border-ink peer-checked:bg-ink peer-checked:text-cream peer-focus-visible:ring-2 peer-focus-visible:ring-rose">
                              {o.l}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <label className="block">
                      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted">
                        Comentarios (opcional)
                      </span>
                      <textarea
                        {...register("notes")}
                        rows={3}
                        placeholder="Cuéntanos tus objetivos o dudas"
                        className="field resize-none"
                      />
                    </label>
                  </fieldset>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="mt-12 flex items-center justify-between gap-4 border-t border-ink/10 pt-8">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
                >
                  <ArrowLeft size={15} /> Atrás
                </button>
              ) : (
                <span />
              )}
              {step < 3 ? (
                <button
                  type="button"
                  disabled={!canContinue}
                  onClick={() => setStep(step + 1)}
                  className="btn-dark disabled:pointer-events-none disabled:opacity-30"
                >
                  Continuar <ArrowRight size={15} strokeWidth={1.75} />
                </button>
              ) : (
                <button type="submit" className="btn bg-[#25D366] text-ink hover:bg-ink hover:text-cream">
                  <MessageCircle size={16} strokeWidth={1.75} />
                  Confirmar por WhatsApp
                </button>
              )}
            </div>
          </form>

          <aside className="lg:col-span-4">
            <div className="rounded-3xl bg-sand/70 p-6 sm:p-8 lg:sticky lg:top-28">
              <p className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em]">
                <CalendarDays size={14} /> Tu cita
              </p>
              <dl className="mt-5 divide-y divide-ink/10">
                {summary.map((row) => (
                  <div key={row.label} className="flex justify-between gap-4 py-3.5 text-sm">
                    <dt className="text-muted">{row.label}</dt>
                    <dd className={`text-right first-letter:uppercase ${row.value ? "font-medium" : "text-muted/50"}`}>
                      {row.value || "—"}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-xs leading-relaxed text-muted">
                Tu cita queda confirmada cuando te respondamos por WhatsApp.
                {modality === "online" &&
                  " Para la consulta en línea te enviaremos el enlace de la videollamada."}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
