import { useState } from "react";
import { motion } from "framer-motion";

const WA_NUMBER = "7411108466";

interface Product {
  brand: string;
  line: string;
  category: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    brand: "SVR",
    line: "Sebiaclear · Biotic · Ampoule",
    category: "Dermatología",
    description:
      "Fórmulas dermatológicas sin perfume ni parabenos para piel grasa, acnéica y sensible. Desarrolladas con dermatólogos para resultados clínicamente comprobados.",
    image:
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&q=80",
  },
  {
    brand: "La Roche-Posay",
    line: "Effaclar · Cicaplast · Hyalu B5",
    category: "Farmacéutica",
    description:
      "Soluciones clínicas con agua termal de La Roche-Posay para pieles sensibles, reactivas e irritadas. Recomendadas por dermatólogos en más de 90 países.",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80",
  },
  {
    brand: "Vichy",
    line: "Mineral 89 · Liftactiv · Normaderm",
    category: "Anti-edad",
    description:
      "Fórmulas enriquecidas con agua volcánica de Vichy para hidratación profunda, firmeza visible y control de imperfecciones en todo tipo de piel.",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80",
  },
  {
    brand: "CeraVe",
    line: "Hidratante · Limpiador · SA Suavizante",
    category: "Barrera cutánea",
    description:
      "Ceramidas esenciales + ácido hialurónico + niacinamida para restaurar y mantener la barrera natural de la piel. Desarrollado con dermatólogos.",
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80",
  },
];

function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);
  const [imgHovered, setImgHovered] = useState(false);

  const waMessage = encodeURIComponent(
    `¡Hola! Me interesa el producto ${product.brand} (${product.line}). ¿Tienen disponibilidad?`,
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onMouseEnter={() => { setHovered(true); setImgHovered(true); }}
      onMouseLeave={() => { setHovered(false); setImgHovered(false); }}
      style={{
        background: "#FAFAF7",
        border: `1.5px solid ${hovered ? "#1A1A18" : "#E8E0D8"}`,
        borderRadius: "16px",
        overflow: "hidden",
        transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
        boxShadow: hovered ? "0 12px 40px rgba(0,0,0,0.14)" : "none",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ overflow: "hidden", height: 200, flexShrink: 0 }}>
        <img
          src={product.image}
          alt={product.brand}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
            transform: imgHovered ? "scale(1.06)" : "scale(1)",
          }}
        />
      </div>

      <div
        style={{
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <div style={{ marginBottom: "0.5rem" }}>
          <span
            style={{
              display: "inline-block",
              background: "#FFF024",
              color: "#1A1A18",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "0.2rem 0.6rem",
              borderRadius: "4px",
            }}
          >
            {product.category}
          </span>
        </div>
        <h3
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: "1.375rem",
            fontWeight: 600,
            color: "#1A1A18",
            marginBottom: "0.3rem",
            lineHeight: 1.2,
          }}
        >
          {product.brand}
        </h3>
        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#6B6B64",
            marginBottom: "0.875rem",
          }}
        >
          {product.line}
        </p>
        <p
          style={{
            color: "#6B6B64",
            fontSize: "0.875rem",
            lineHeight: 1.7,
            flex: 1,
            marginBottom: "1.25rem",
          }}
        >
          {product.description}
        </p>
        <CTAButton waNumber={WA_NUMBER} waMessage={waMessage} />
      </div>
    </motion.div>
  );
}

function CTAButton({ waNumber, waMessage }: { waNumber: string; waMessage: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`https://wa.me/${waNumber}?text=${waMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        background: hovered ? "#FFF024" : "#1A1A18",
        color: hovered ? "#1A1A18" : "#FAFAF7",
        textDecoration: "none",
        padding: "0.75rem 1rem",
        fontSize: "0.75rem",
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        borderRadius: "8px",
        transition: "background 0.2s, color 0.2s",
        fontFamily: '"Inter", system-ui, sans-serif',
      }}
    >
      Consultar disponibilidad
    </a>
  );
}

export default function Products() {
  return (
    <section
      id="products"
      style={{
        background: "#FAFAF7",
        padding: "7rem 2rem",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
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
            Venta en consultorio
          </span>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: "clamp(2rem, 3.5vw, 2.875rem)",
              fontWeight: 500,
              color: "#1A1A18",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              maxWidth: 560,
              margin: "0 auto 1rem",
            }}
          >
            Productos de belleza seleccionados por expertos
          </h2>
          <p
            style={{
              color: "#6B6B64",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: 500,
              margin: "0 auto",
            }}
          >
            Complementa tus tratamientos con productos dermatológicos
            certificados, disponibles directamente en nuestro consultorio.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
          className="products-grid"
        >
          {products.map((p) => (
            <ProductCard key={p.brand} product={p} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .products-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
