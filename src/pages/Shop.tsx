import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { productBrands, productCategories, products } from "../data/products";
import ProductCard from "../components/shop/ProductCard";
import Reveal from "../components/Reveal";

type Sort = "featured" | "price-asc" | "price-desc";

const chip = (active: boolean) =>
  `whitespace-nowrap rounded-full border px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.12em] transition-colors ${
    active ? "border-ink bg-ink text-cream" : "border-ink/15 text-ink/70 hover:border-ink hover:text-ink"
  }`;

export default function Shop() {
  const [category, setCategory] = useState<string | null>(null);
  const [brand, setBrand] = useState("");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<Sort>("featured");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = products.filter(
      (p) =>
        (!category || p.category === category) &&
        (!brand || p.brand === brand) &&
        (!q || `${p.name} ${p.brand} ${p.description}`.toLowerCase().includes(q)),
    );
    if (sort === "price-asc") return [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") return [...list].sort((a, b) => b.price - a.price);
    return [...list].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  }, [category, brand, query, sort]);

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-36">
      <div className="container-x">
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow">Tienda Orfit</span>
            <h1 className="mt-6 font-serif text-5xl font-light leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              Skincare de grado <em className="italic text-rose-deep">profesional</em>
            </h1>
          </div>
          <p className="leading-relaxed text-muted lg:col-span-4 lg:col-start-9">
            Los mismos productos que usamos y recomendamos en consulta, de marcas
            certificadas. Arma tu pedido y lo confirmamos contigo por WhatsApp.
          </p>
        </Reveal>

        <div className="z-30 -mx-5 mt-14 lg:sticky lg:top-18 border-y border-ink/10 bg-cream/90 px-5 py-4 backdrop-blur-xl sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none]">
              <button onClick={() => setCategory(null)} className={chip(category === null)}>
                Todo
              </button>
              {productCategories.map((c) => (
                <button key={c} onClick={() => setCategory(c)} className={chip(category === c)}>
                  {c}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <label className="relative flex-1 lg:w-56 lg:flex-none">
                <span className="sr-only">Buscar productos</span>
                <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar…"
                  className="w-full rounded-full border border-ink/15 bg-transparent py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-ink"
                />
              </label>
              <label className="relative">
                <span className="sr-only">Marca</span>
                <select
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  className="cursor-pointer appearance-none rounded-full border border-ink/15 bg-transparent py-2.5 pl-4 pr-9 text-sm outline-none focus:border-ink"
                >
                  <option value="">Todas las marcas</option>
                  {productBrands.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
                <SlidersHorizontal size={13} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted" />
              </label>
              <label>
                <span className="sr-only">Ordenar</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as Sort)}
                  className="cursor-pointer rounded-full border border-ink/15 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-ink"
                >
                  <option value="featured">Destacados</option>
                  <option value="price-asc">Precio: menor a mayor</option>
                  <option value="price-desc">Precio: mayor a menor</option>
                </select>
              </label>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-muted">
          {visible.length} {visible.length === 1 ? "producto" : "productos"}
        </p>

        {visible.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-serif text-3xl font-light">Sin resultados</p>
            <p className="mt-2 text-muted">Prueba con otra categoría, marca o búsqueda.</p>
            <button
              onClick={() => {
                setCategory(null);
                setBrand("");
                setQuery("");
              }}
              className="btn-outline mt-8"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 lg:grid-cols-4">
            {visible.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
