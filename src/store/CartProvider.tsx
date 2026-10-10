import { useEffect, useMemo, useState, type ReactNode } from "react";
import { products } from "../data/products";
import { CartContext, type CartLine } from "./cart";

const STORAGE_KEY = "orfit-cart";

type Stored = Record<string, number>;

function load(): Stored {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Stored) : {};
  } catch {
    return {};
  }
}

export default function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Stored>(load);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Storage unavailable (private mode); the cart still works for this visit.
    }
  }, [items]);

  const value = useMemo(() => {
    const lines: CartLine[] = Object.entries(items)
      .map(([id, qty]) => ({ product: products.find((p) => p.id === id)!, qty }))
      .filter((l) => l.product && l.qty > 0);

    return {
      lines,
      count: lines.reduce((n, l) => n + l.qty, 0),
      total: lines.reduce((n, l) => n + l.qty * l.product.price, 0),
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      add: (id: string, qty = 1) => {
        setItems((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + qty }));
        setIsOpen(true);
      },
      setQty: (id: string, qty: number) =>
        setItems((prev) => {
          const next = { ...prev };
          if (qty <= 0) delete next[id];
          else next[id] = qty;
          return next;
        }),
      remove: (id: string) =>
        setItems((prev) => {
          const next = { ...prev };
          delete next[id];
          return next;
        }),
      clear: () => setItems({}),
    };
  }, [items, isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
