import { Link } from "react-router";
import { Plus } from "lucide-react";
import { formatPrice, type Product } from "../../data/products";
import { useCart } from "../../store/cart";

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  return (
    <article className="group flex h-full flex-col">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-sand">
        <Link to={`/tienda/${product.id}`} aria-label={product.name}>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="size-full object-cover transition-transform duration-[1.2s] ease-soft group-hover:scale-105"
          />
        </Link>
        <span className="pointer-events-none absolute left-3 top-3 whitespace-nowrap rounded-full bg-cream/90 px-3 py-1 text-[0.6rem] sm:left-4 sm:top-4 sm:text-[0.65rem] font-semibold uppercase tracking-[0.14em] backdrop-blur">
          {product.category}
        </span>
        <button
          onClick={() => add(product.id)}
          aria-label={`Agregar ${product.name} al carrito`}
          className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full bg-ink p-3 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-cream shadow-lg transition-all duration-500 ease-soft hover:bg-rose-deep lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:focus-visible:translate-y-0 lg:focus-visible:opacity-100"
        >
          <Plus size={14} strokeWidth={2} />
          <span className="hidden pr-1 lg:inline">Agregar</span>
        </button>
      </div>

      <Link to={`/tienda/${product.id}`} className="flex flex-1 flex-col pt-5">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-rose-deep">
          {product.brand}
        </p>
        <h3 className="mt-1.5 font-serif text-xl font-light leading-snug tracking-tight">
          {product.name}
        </h3>
        <div className="mt-auto flex items-baseline justify-between gap-4 pt-3">
          <span className="text-sm text-muted">{product.size}</span>
          <span className="font-serif text-lg">{formatPrice(product.price)}</span>
        </div>
      </Link>
    </article>
  );
}
