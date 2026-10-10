import { ArrowUpRight } from "lucide-react";
import { products, waLink, type Product } from "../data/site";
import Reveal from "./Reveal";

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <Reveal delay={index * 0.08} className="group flex h-full flex-col">
      <div className="relative aspect-square overflow-hidden rounded-[1.75rem] bg-sand">
        <img
          src={product.image}
          alt={product.brand}
          loading="lazy"
          className="size-full object-cover transition-transform duration-[1.2s] ease-soft group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] backdrop-blur">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col pt-6">
        <h3 className="font-serif text-2xl font-light tracking-tight">{product.brand}</h3>
        <p className="mt-1 text-[0.72rem] uppercase tracking-[0.14em] text-rose-deep">
          {product.line}
        </p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{product.description}</p>
        <a
          href={waLink(
            `¡Hola! Me interesa el producto ${product.brand} (${product.line}). ¿Tienen disponibilidad?`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 self-start border-b border-ink/30 pb-1 text-[0.75rem] font-semibold uppercase tracking-[0.14em] transition-colors hover:border-rose-deep hover:text-rose-deep"
        >
          Consultar disponibilidad
          <ArrowUpRight size={14} strokeWidth={1.75} />
        </a>
      </div>
    </Reveal>
  );
}

export default function Products() {
  return (
    <section id="products" className="py-24 lg:py-36">
      <div className="container-x">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center lg:mb-20">
          <span className="eyebrow">Venta en consultorio</span>
          <h2 className="heading mt-6">
            Productos seleccionados <em className="italic text-rose-deep">por expertos</em>
          </h2>
          <p className="mt-6 leading-relaxed text-muted">
            Complementa tus tratamientos con productos dermatológicos
            certificados, disponibles directamente en nuestro consultorio.
          </p>
        </Reveal>

        <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <ProductCard key={p.brand} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
