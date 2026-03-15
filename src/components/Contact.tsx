import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, MessageCircle, CheckCircle2 } from "lucide-react";

const WA_NUMBER = "7411108466";
const WA_MESSAGE = encodeURIComponent(
  "¡Hola! Me gustaría agendar una consulta en Orfit.",
);

interface FormData {
  name: string;
  email: string;
  phone: string;
  treatment: string;
  message: string;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1.5px solid #D4C8BC",
  padding: "0.75rem 0",
  fontSize: "0.9375rem",
  color: "#1A1A18",
  outline: "none",
  fontFamily: '"Inter", system-ui, sans-serif',
  transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.72rem",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#6B6B64",
  marginBottom: "0.25rem",
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (_data: FormData) => {
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{
        background: "#F4F0EC",
        padding: "7rem 2rem",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "4.5rem" }}
        >
          <span
            style={{
              display: "inline-block",
              background: "#FFF024",
              color: "#1A1A18",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "0.3rem 0.8rem",
              borderRadius: "4px",
              marginBottom: "1.25rem",
            }}
          >
            Contáctanos
          </span>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: "clamp(2rem, 3.5vw, 2.875rem)",
              fontWeight: 500,
              color: "#1A1A18",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Agenda tu consulta
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              style={{
                color: "#6B6B64",
                fontSize: "0.9375rem",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
              }}
            >
              ¿Listo para comenzar? Contáctanos y uno de nuestros especialistas
              te responderá en menos de 24 horas para agendar tu consulta
              personal.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                marginBottom: "2.5rem",
              }}
            >
              {[
                {
                  icon: <MapPin size={16} style={{ color: "#1A1A18" }} />,
                  label: "Ubicación",
                  content: "Av. de la Paz 123, Col. Centro\nPuebla, México",
                },
                {
                  icon: <Phone size={16} style={{ color: "#1A1A18" }} />,
                  label: "Teléfono",
                  content: "+52 222 905 1344",
                  href: "tel:+527411108466",
                },
                {
                  icon: <Mail size={16} style={{ color: "#1A1A18" }} />,
                  label: "Correo",
                  content: "hola@orfit.mx",
                  href: "mailto:hola@orfit.mx",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      background: "#FFF024",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#6B6B64",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          color: "#1A1A18",
                          fontSize: "0.9rem",
                          textDecoration: "none",
                        }}
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p
                        style={{
                          color: "#1A1A18",
                          fontSize: "0.9rem",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {item.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                background: "#25D366",
                color: "#fff",
                textDecoration: "none",
                padding: "1rem 1.5rem",
                fontSize: "0.875rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                borderRadius: "12px",
                transition: "background 0.2s, transform 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#1da851";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#25D366";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              <MessageCircle size={20} />
              Chatear por WhatsApp
            </a>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              background: "#FAFAF7",
              padding: "3rem",
              border: "1.5px solid #E8E0D8",
              borderRadius: "20px",
            }}
          >
            {submitted ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: 300,
                  textAlign: "center",
                  gap: "1.25rem",
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    background: "#FFF024",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CheckCircle2 size={32} style={{ color: "#1A1A18" }} />
                </div>
                <h3
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: "1.75rem",
                    fontWeight: 500,
                    color: "#1A1A18",
                  }}
                >
                  Mensaje recibido
                </h3>
                <p style={{ color: "#6B6B64", lineHeight: 1.7, maxWidth: 340 }}>
                  Gracias por contactarnos. Nuestro equipo se comunicará contigo
                  en menos de 24 horas para confirmar tu consulta.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.75rem",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1.75rem",
                  }}
                  className="form-row"
                >
                  <div>
                    <label style={labelStyle}>Nombre *</label>
                    <input
                      {...register("name", { required: true })}
                      placeholder="Tu nombre completo"
                      style={{
                        ...inputStyle,
                        borderBottomColor: errors.name ? "#E05A5A" : "#D4C8BC",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderBottomColor = "#FFF024")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderBottomColor = errors.name
                          ? "#E05A5A"
                          : "#D4C8BC")
                      }
                    />
                    {errors.name && (
                      <p
                        style={{
                          color: "#E05A5A",
                          fontSize: "0.75rem",
                          marginTop: "0.25rem",
                        }}
                      >
                        Requerido
                      </p>
                    )}
                  </div>
                  <div>
                    <label style={labelStyle}>Correo electrónico *</label>
                    <input
                      {...register("email", {
                        required: true,
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      })}
                      placeholder="your@email.com"
                      style={{
                        ...inputStyle,
                        borderBottomColor: errors.email ? "#E05A5A" : "#D4C8BC",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderBottomColor = "#FFF024")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderBottomColor = errors.email
                          ? "#E05A5A"
                          : "#D4C8BC")
                      }
                    />
                    {errors.email && (
                      <p
                        style={{
                          color: "#E05A5A",
                          fontSize: "0.75rem",
                          marginTop: "0.25rem",
                        }}
                      >
                        Correo electrónico válido requerido
                      </p>
                    )}
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1.75rem",
                  }}
                  className="form-row"
                >
                  <div>
                    <label style={labelStyle}>Teléfono</label>
                    <input
                      {...register("phone")}
                      placeholder="+52 000 000 0000"
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.target.style.borderBottomColor = "#FFF024")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderBottomColor = "#D4C8BC")
                      }
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Tratamiento de interés</label>
                    <select
                      {...register("treatment")}
                      style={{
                        ...inputStyle,
                        cursor: "pointer",
                        appearance: "none",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236B6B64' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 0.5rem center",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderBottomColor = "#FFF024")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderBottomColor = "#D4C8BC")
                      }
                    >
                      <option value="">Selecciona un tratamiento</option>
                      <option>Botox</option>
                      <option>Rellenos de Ácido Hialurónico</option>
                      <option>Aumento de Labios</option>
                      <option>Peeling Químico</option>
                      <option>Mesoterapia</option>
                      <option>Terapia PRP</option>
                      <option>Tratamientos Láser</option>
                      <option>Hilo Tensor</option>
                      <option>Aún no lo sé</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Mensaje</label>
                  <textarea
                    {...register("message")}
                    placeholder="Cuéntanos sobre tus objetivos o cualquier duda que tengas..."
                    rows={4}
                    style={{
                      ...inputStyle,
                      resize: "none",
                      borderBottom: "none",
                      border: "1.5px solid #D4C8BC",
                      borderRadius: "10px",
                      padding: "0.875rem",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#FFF024")}
                    onBlur={(e) => (e.target.style.borderColor = "#D4C8BC")}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: "#000",
                    color: "#FFF",
                    border: "none",
                    padding: "1rem 2rem",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    borderRadius: "10px",
                    transition: "background 0.2s, transform 0.15s",
                    fontFamily: '"Inter", system-ui, sans-serif',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#222";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#000";
                  }}
                >
                  Enviar Mensaje
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
