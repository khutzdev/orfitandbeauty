import { useState } from "react";
import { Link, useParams } from "react-router";
import { ArrowLeft, Check, Minus, Plus, MessageCircle } from "lucide-react";
import { formatPrice, products } from "../data/products";
import { waLink } from "../data/site";
import { useCart } from "../store/cart";
import ProductCard from "../components/shop/ProductCard";
import Reveal from "../components/Reveal";

export default function ProductPage() {
  const { productId } = useParams();
  // Keyed so quantity resets when navigating between related products.
  return <ProductView key={productId} productId={productId} />;
}

function ProductView({ productId }: { productId?: string }) {
  const product = products.find((p) => p.id === productId);
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="container-x py-48 text-center">
        <p className="font-serif text-4xl font-light">Producto no encontrado</p>
        <Link to="/tienda" className="btn-dark mt-8">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  const related = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.brand === product.brand))
    .slice(0, 4);

  return (
    <div className="pt-28 pb-24 lg:pt-36 lg:pb-36">
      <div className="container-x">
        <Link
          to="/tienda"
          className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft size={14} /> Tienda
        </Link>

        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <div className="aspect-square overflow-hidden rounded-[2rem] bg-sand">
              <img src={product.image} alt={product.name} className="size-full object-cover" />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6 lg:py-6">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-rose-deep">
              {product.brand} · {product.category}
            </p>
            <h1 className="mt-4 font-serif text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
              {product.name}
            </h1>
            <div className="mt-6 flex items-baseline gap-4">
              <span className="font-serif text-3xl">{formatPrice(product.price)}</span>
              <span className="text-sm text-muted">{product.size}</span>
            </div>

            <p className="mt-8 leading-relaxed text-muted">{product.description}</p>

            <ul className="mt-8 flex flex-wrap gap-2">
              {product.benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-1.5 rounded-full bg-blush/70 px-3.5 py-1.5 text-xs font-medium"
                >
                  <Check size={12} strokeWidth={2} /> {b}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <div className="flex items-center justify-between rounded-full border border-ink/15 sm:justify-start">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Quitar uno"
                  className="grid size-13 place-items-center"
                >
                  <Minus size={15} />
                </button>
                <span className="w-8 text-center tabular-nums">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Agregar uno"
                  className="grid size-13 place-items-center"
                >
                  <Plus size={15} />
                </button>
              </div>
              <button onClick={() => add(product.id, qty)} className="btn-dark flex-1">
                Agregar al carrito · {formatPrice(product.price * qty)}
              </button>
            </div>
            <a
              href={waLink(
                `¡Hola! Tengo una duda sobre ${product.brand} ${product.name} (${product.size}). ¿Es adecuado para mi piel?`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
            >
              <MessageCircle size={15} strokeWidth={1.75} />
              ¿No sabes si es para ti? Pregúntanos por WhatsApp
            </a>

            <dl className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
              <div className="py-5">
                <dt className="text-[0.68rem] uppercase tracking-[0.18em] text-muted">Modo de uso</dt>
                <dd className="mt-2 leading-relaxed">{product.howTo}</dd>
              </div>
              <div className="py-5">
                <dt className="text-[0.68rem] uppercase tracking-[0.18em] text-muted">Entrega</dt>
                <dd className="mt-2 leading-relaxed">
                  Recoge en el consultorio o solicita envío. Confirmamos
                  disponibilidad y pago por WhatsApp.
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        {related.length > 0 && (
          <section className="mt-24 lg:mt-36">
            <h2 className="font-serif text-3xl font-light tracking-tight sm:text-4xl">
              También te puede gustar
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
