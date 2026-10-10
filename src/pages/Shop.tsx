import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Search, SlidersHorizontal, X } from "lucide-react";
import { productBrands, productCategories, products, type Product } from "../data/products";
import ProductCard from "../components/shop/ProductCard";
import Reveal from "../components/Reveal";

type Sort = "featured" | "price-asc" | "price-desc" | "name";

const sortLabels: Record<Sort, string> = {
  featured: "Destacados",
  "price-asc": "Precio: menor a mayor",
  "price-desc": "Precio: mayor a menor",
  name: "Nombre: A–Z",
};

interface Filters {
  category: string | null;
  brands: string[];
  query: string;
}

const matches = (p: Product, f: Filters, skip?: "category" | "brands") => {
  const q = f.query.trim().toLowerCase();
  return (
    (skip === "category" || !f.category || p.category === f.category) &&
    (skip === "brands" || f.brands.length === 0 || f.brands.includes(p.brand)) &&
    (!q || `${p.name} ${p.brand} ${p.category} ${p.description}`.toLowerCase().includes(q))
  );
};

function FilterPanel({
  filters,
  setFilters,
}: {
  filters: Filters;
  setFilters: (f: Filters) => void;
}) {
  const categoryCount = (c: string | null) =>
    products.filter((p) => matches(p, { ...filters, category: c }, c ? undefined : "category")).length;
  const brandCount = (b: string) =>
    products.filter((p) => matches(p, { ...filters, brands: [b] })).length;

  const toggleBrand = (b: string) =>
    setFilters({
      ...filters,
      brands: filters.brands.includes(b)
        ? filters.brands.filter((x) => x !== b)
        : [...filters.brands, b],
    });

  return (
    <div className="space-y-10">
      <fieldset>
        <legend className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted">
          Categoría
        </legend>
        <ul className="mt-4 space-y-1">
          {[null, ...productCategories].map((c) => {
            const active = filters.category === c;
            const count = categoryCount(c);
            return (
              <li key={c ?? "all"}>
                <button
                  type="button"
                  onClick={() => setFilters({ ...filters, category: c })}
                  aria-pressed={active}
                  disabled={count === 0 && !active}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-[0.95rem] transition-colors disabled:opacity-35 ${
                    active ? "bg-ink text-cream" : "hover:bg-sand"
                  }`}
                >
                  {c ?? "Todos los productos"}
                  <span className={`text-xs tabular-nums ${active ? "text-cream/60" : "text-muted"}`}>
                    {count}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </fieldset>

      <fieldset>
        <legend className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted">
          Marca
        </legend>
        <ul className="mt-4 space-y-1">
          {productBrands.map((b) => {
            const checked = filters.brands.includes(b);
            return (
              <li key={b}>
                <label className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-sand">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleBrand(b)}
                    className="peer sr-only"
                  />
                  <span
                    className={`grid size-5 shrink-0 place-items-center rounded-md border transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-rose ${
                      checked ? "border-ink bg-ink text-cream" : "border-ink/25"
                    }`}
                  >
                    {checked && <Check size={12} strokeWidth={2.5} />}
                  </span>
                  <span className="flex-1 text-[0.95rem]">{b}</span>
                  <span className="text-xs tabular-nums text-muted">{brandCount(b)}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </fieldset>
    </div>
  );
}

function SortSelect({ sort, setSort }: { sort: Sort; setSort: (s: Sort) => void }) {
  return (
    <label className="relative flex h-14 items-center rounded-full border border-ink/15 bg-cream pl-5 pr-11 transition-colors focus-within:border-ink hover:border-ink/40">
      <span className="mr-2 hidden text-sm text-muted sm:inline">Ordenar:</span>
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value as Sort)}
        className="absolute inset-0 cursor-pointer opacity-0"
        aria-label="Ordenar productos"
      >
        {Object.entries(sortLabels).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <span className="truncate text-sm font-medium">{sortLabels[sort]}</span>
      <ChevronDown size={16} className="pointer-events-none absolute right-4 text-muted" />
    </label>
  );
}

export default function Shop() {
  const [filters, setFilters] = useState<Filters>({ category: null, brands: [], query: "" });
  const [sort, setSort] = useState<Sort>("featured");
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    if (!sheetOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sheetOpen]);

  const visible = useMemo(() => {
    const list = products.filter((p) => matches(p, filters));
    const sorters: Record<Sort, (a: Product, b: Product) => number> = {
      featured: (a, b) => Number(!!b.featured) - Number(!!a.featured),
      "price-asc": (a, b) => a.price - b.price,
      "price-desc": (a, b) => b.price - a.price,
      name: (a, b) => a.name.localeCompare(b.name, "es"),
    };
    return [...list].sort(sorters[sort]);
  }, [filters, sort]);

  const activeChips = [
    ...(filters.category
      ? [{ label: filters.category, clear: () => setFilters({ ...filters, category: null }) }]
      : []),
    ...filters.brands.map((b) => ({
      label: b,
      clear: () => setFilters({ ...filters, brands: filters.brands.filter((x) => x !== b) }),
    })),
  ];
  const activeCount = activeChips.length;
  const clearAll = () => setFilters({ category: null, brands: [], query: "" });

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

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-28">
              <div className="mb-8 flex items-baseline justify-between">
                <p className="font-serif text-2xl font-light">Filtrar</p>
                {activeCount > 0 && (
                  <button
                    onClick={clearAll}
                    className="text-xs text-muted underline underline-offset-4 hover:text-ink"
                  >
                    Limpiar
                  </button>
                )}
              </div>
              <FilterPanel filters={filters} setFilters={setFilters} />
            </div>
          </aside>

          <div className="lg:col-span-9">
            <div className="flex flex-col gap-3 lg:flex-row">
              <label className="relative flex-1">
                <span className="sr-only">Buscar productos</span>
                <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  type="search"
                  value={filters.query}
                  onChange={(e) => setFilters({ ...filters, query: e.target.value })}
                  placeholder="Buscar producto, marca o necesidad…"
                  className="h-14 w-full rounded-full border border-ink/15 bg-cream pl-13 pr-12 text-[0.95rem] outline-none transition-colors placeholder:text-muted/70 hover:border-ink/40 focus:border-ink [&::-webkit-search-cancel-button]:hidden"
                />
                {filters.query && (
                  <button
                    onClick={() => setFilters({ ...filters, query: "" })}
                    aria-label="Borrar búsqueda"
                    className="absolute right-3 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full text-muted hover:bg-sand hover:text-ink"
                  >
                    <X size={15} />
                  </button>
                )}
              </label>

              <div className="grid grid-cols-2 gap-3 lg:flex">
                <button
                  onClick={() => setSheetOpen(true)}
                  className="flex h-14 items-center justify-center gap-2 rounded-full border border-ink/15 px-5 text-sm font-medium transition-colors hover:border-ink/40 lg:hidden"
                >
                  <SlidersHorizontal size={16} />
                  Filtros
                  {activeCount > 0 && (
                    <span className="grid size-5 place-items-center rounded-full bg-ink text-[0.65rem] text-cream">
                      {activeCount}
                    </span>
                  )}
                </button>
                <SortSelect sort={sort} setSort={setSort} />
              </div>
            </div>

            <div className="mt-6 flex min-h-8 flex-wrap items-center gap-2">
              <p className="mr-2 text-sm text-muted">
                <span className="font-semibold text-ink">{visible.length}</span>{" "}
                {visible.length === 1 ? "producto" : "productos"}
              </p>
              {activeChips.map((c) => (
                <button
                  key={c.label}
                  onClick={c.clear}
                  className="inline-flex items-center gap-1.5 rounded-full bg-blush/80 py-1.5 pl-3.5 pr-2.5 text-xs font-medium transition-colors hover:bg-blush"
                >
                  {c.label}
                  <X size={12} strokeWidth={2} />
                </button>
              ))}
              {activeCount > 1 && (
                <button
                  onClick={clearAll}
                  className="text-xs text-muted underline underline-offset-4 hover:text-ink"
                >
                  Limpiar todo
                </button>
              )}
            </div>

            {visible.length === 0 ? (
              <div className="rounded-[2rem] bg-sand/50 px-6 py-20 text-center">
                <p className="font-serif text-3xl font-light">Sin resultados</p>
                <p className="mt-2 text-muted">Prueba con otra categoría, marca o búsqueda.</p>
                <button onClick={clearAll} className="btn-outline mt-8">
                  Limpiar filtros
                </button>
              </div>
            ) : (
              <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 lg:grid-cols-3">
                {visible.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {sheetOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSheetOpen(false)}
            className="fixed inset-0 z-[70] flex items-end bg-ink/40 backdrop-blur-sm lg:hidden"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Filtros"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-[85dvh] w-full flex-col rounded-t-[2rem] bg-cream"
            >
              <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
                <p className="font-serif text-2xl font-light">Filtros</p>
                <button
                  onClick={() => setSheetOpen(false)}
                  aria-label="Cerrar filtros"
                  className="grid size-10 place-items-center rounded-full hover:bg-sand"
                >
                  <X size={18} strokeWidth={1.5} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-4 py-6">
                <FilterPanel filters={filters} setFilters={setFilters} />
              </div>
              <div className="flex gap-3 border-t border-ink/10 px-6 py-5">
                <button onClick={clearAll} className="btn-outline flex-1 px-4">
                  Limpiar
                </button>
                <button onClick={() => setSheetOpen(false)} className="btn-dark flex-[2] px-4">
                  Ver {visible.length} {visible.length === 1 ? "producto" : "productos"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
