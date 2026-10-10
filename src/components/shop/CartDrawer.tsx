import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { formatPrice } from "../../data/products";
import { waLink } from "../../data/site";
import { useCart } from "../../store/cart";

const ease = [0.22, 1, 0.36, 1] as const;

export default function CartDrawer() {
  const { lines, count, total, isOpen, close, setQty, remove } = useCart();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  const orderMessage = [
    "¡Hola! Me gustaría hacer el siguiente pedido en la tienda Orfit:",
    "",
    ...lines.map(
      (l) =>
        `• ${l.qty} × ${l.product.brand} ${l.product.name} (${l.product.size}) — ${formatPrice(
          l.qty * l.product.price,
        )}`,
    ),
    "",
    `Total: ${formatPrice(total)}`,
    "",
    "¿Me confirman disponibilidad y forma de entrega?",
  ].join("\n");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={close}
          className="fixed inset-0 z-[70] flex justify-end bg-ink/40 backdrop-blur-sm"
        >
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Carrito"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease }}
            onClick={(e) => e.stopPropagation()}
            className="flex h-full w-full max-w-md flex-col bg-cream"
          >
            <header className="flex items-center justify-between border-b border-ink/10 px-6 py-5 sm:px-8">
              <h2 className="font-serif text-2xl font-light">
                Tu carrito <span className="text-base text-muted">({count})</span>
              </h2>
              <button
                onClick={close}
                aria-label="Cerrar carrito"
                className="grid size-10 place-items-center rounded-full transition-colors hover:bg-sand"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </header>

            {lines.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                <span className="grid size-16 place-items-center rounded-full bg-sand">
                  <ShoppingBag size={22} strokeWidth={1.5} />
                </span>
                <p className="mt-6 font-serif text-2xl font-light">Tu carrito está vacío</p>
                <p className="mt-2 text-sm text-muted">
                  Descubre el skincare que usamos y recomendamos en consulta.
                </p>
                <Link to="/tienda" onClick={close} className="btn-dark mt-8">
                  Ir a la tienda
                </Link>
              </div>
            ) : (
              <>
                <ul className="flex-1 divide-y divide-ink/10 overflow-y-auto px-6 sm:px-8">
                  {lines.map(({ product, qty }) => (
                    <li key={product.id} className="flex gap-4 py-5">
                      <Link
                        to={`/tienda/${product.id}`}
                        onClick={close}
                        className="size-24 shrink-0 overflow-hidden rounded-2xl bg-sand"
                      >
                        <img src={product.image} alt={product.name} className="size-full object-cover" />
                      </Link>
                      <div className="flex min-w-0 flex-1 flex-col">
                        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-rose-deep">
                          {product.brand}
                        </p>
                        <p className="mt-0.5 font-serif text-lg font-light leading-snug">
                          {product.name}
                        </p>
                        <p className="text-xs text-muted">{product.size}</p>
                        <div className="mt-auto flex items-center justify-between pt-3">
                          <div className="flex items-center rounded-full border border-ink/15">
                            <button
                              onClick={() => setQty(product.id, qty - 1)}
                              aria-label="Quitar uno"
                              className="grid size-8 place-items-center"
                            >
                              <Minus size={13} />
                            </button>
                            <span className="w-6 text-center text-sm tabular-nums">{qty}</span>
                            <button
                              onClick={() => setQty(product.id, qty + 1)}
                              aria-label="Agregar uno"
                              className="grid size-8 place-items-center"
                            >
                              <Plus size={13} />
                            </button>
                          </div>
                          <span className="font-serif">{formatPrice(qty * product.price)}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => remove(product.id)}
                        aria-label={`Eliminar ${product.name}`}
                        className="self-start p-1 text-muted transition-colors hover:text-rose-deep"
                      >
                        <Trash2 size={15} strokeWidth={1.5} />
                      </button>
                    </li>
                  ))}
                </ul>

                <footer className="border-t border-ink/10 bg-sand/50 px-6 py-6 sm:px-8">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[0.7rem] uppercase tracking-[0.18em] text-muted">Total</span>
                    <span className="font-serif text-3xl font-light">{formatPrice(total)}</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    Confirmamos disponibilidad, pago y entrega por WhatsApp. Puedes
                    recoger en consultorio o solicitar envío.
                  </p>
                  <a
                    href={waLink(orderMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-dark mt-5 w-full"
                  >
                    Enviar pedido por WhatsApp
                  </a>
                </footer>
              </>
            )}
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
