import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { products } from "../data/products";
import ProductCard from "./shop/ProductCard";
import Reveal from "./Reveal";

const featured = products.filter((p) => p.featured).slice(0, 4);

export default function Products() {
  return (
    <section id="products" className="py-24 lg:py-36">
      <div className="container-x">
        <div className="mb-14 flex flex-col gap-8 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Tienda de skincare</span>
            <h2 className="heading mt-6">
              Tu rutina, <em className="italic text-rose-deep">recetada por expertos</em>
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-muted">
              Complementa tus tratamientos con los productos dermatológicos que
              usamos en consulta. Pide en línea y recoge en el consultorio.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/tienda" className="btn-outline">
              Ver toda la tienda
              <ArrowRight size={15} strokeWidth={1.75} />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 lg:grid-cols-4">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
