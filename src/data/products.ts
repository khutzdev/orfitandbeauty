// Catálogo de la tienda. Los precios, presentaciones e imágenes son de referencia:
// reemplazar con el inventario real del consultorio antes de publicar.

export type ProductCategory =
  | 'Limpieza'
  | 'Sérums'
  | 'Hidratación'
  | 'Antiedad'
  | 'Despigmentantes'
  | 'Protección solar';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  size: string;
  price: number;
  description: string;
  benefits: string[];
  howTo: string;
  image: string;
  featured?: boolean;
}

const img = (id: string) => `https://images.unsplash.com/${id}?w=800&q=80`;

export const productCategories: ProductCategory[] = [
  'Limpieza',
  'Sérums',
  'Hidratación',
  'Antiedad',
  'Despigmentantes',
  'Protección solar',
];

export const products: Product[] = [
  {
    id: 'svr-sebiaclear-gel',
    name: 'Sebiaclear Gel Moussant',
    brand: 'SVR',
    category: 'Limpieza',
    size: '200 ml',
    price: 420,
    description:
      'Gel limpiador sin jabón para piel grasa con tendencia acneica. Purifica y reduce el exceso de sebo sin resecar.',
    benefits: ['Piel grasa y mixta', 'Sin jabón', 'Uso diario'],
    howTo: 'Aplicar sobre el rostro húmedo mañana y noche, masajear y enjuagar.',
    image: img('photo-1608248597279-f99d160bfcbc'),
    featured: true,
  },
  {
    id: 'svr-sebiaclear-serum',
    name: 'Sebiaclear Sérum',
    brand: 'SVR',
    category: 'Sérums',
    size: '30 ml',
    price: 690,
    description:
      'Sérum con gluconolactona y niacinamida que reduce imperfecciones, afina la textura y unifica el tono.',
    benefits: ['Imperfecciones', 'Poros dilatados', 'Marcas post-acné'],
    howTo: 'Aplicar unas gotas por la noche sobre la piel limpia, antes de la crema.',
    image: img('photo-1617897903246-719242758050'),
  },
  {
    id: 'svr-ampoule-b3',
    name: 'Ampoule [B3] Hydra',
    brand: 'SVR',
    category: 'Hidratación',
    size: '30 ml',
    price: 750,
    description:
      'Concentrado de niacinamida y ácido hialurónico que rellena, hidrata y devuelve la luminosidad a la piel deshidratada.',
    benefits: ['Hidratación intensa', 'Efecto relleno', 'Todo tipo de piel'],
    howTo: 'Aplicar mañana y noche sobre la piel limpia.',
    image: img('photo-1620916297397-a4a5402a3c6c'),
  },
  {
    id: 'svr-sun-secure-blur',
    name: 'Sun Secure Blur SPF 50+',
    brand: 'SVR',
    category: 'Protección solar',
    size: '50 ml',
    price: 560,
    description:
      'Protector solar en mousse con efecto difuminador que unifica el tono y deja un acabado aterciopelado.',
    benefits: ['SPF 50+', 'Efecto blur', 'Acabado mate'],
    howTo: 'Aplicar generosamente antes de la exposición solar y reaplicar cada 2 horas.',
    image: img('photo-1612817288484-6f916006741a'),
    featured: true,
  },
  {
    id: 'filorga-ncef-reverse',
    name: 'NCEF-Reverse Crema',
    brand: 'Filorga',
    category: 'Antiedad',
    size: '50 ml',
    price: 1450,
    description:
      'Crema regenerante multicorrectora inspirada en la mesoterapia. Reafirma, alisa arrugas y aporta luminosidad.',
    benefits: ['Firmeza', 'Arrugas', 'Luminosidad'],
    howTo: 'Aplicar mañana y noche sobre rostro y cuello limpios.',
    image: img('photo-1601049541289-9b1b7bbbfe19'),
    featured: true,
  },
  {
    id: 'filorga-time-filler',
    name: 'Time-Filler 5XP',
    brand: 'Filorga',
    category: 'Antiedad',
    size: '50 ml',
    price: 1290,
    description:
      'Crema correctora de arrugas inspirada en los rellenos dérmicos. Actúa sobre líneas de expresión y pérdida de volumen.',
    benefits: ['Líneas de expresión', 'Volumen', 'Textura'],
    howTo: 'Aplicar mañana y noche sobre la piel limpia.',
    image: img('photo-1611930022073-b7a4ba5fcccd'),
  },
  {
    id: 'filorga-optim-eyes',
    name: 'Optim-Eyes Contorno de Ojos',
    brand: 'Filorga',
    category: 'Antiedad',
    size: '15 ml',
    price: 980,
    description:
      'Tratamiento triple acción para ojeras, bolsas y arrugas del contorno de ojos.',
    benefits: ['Ojeras', 'Bolsas', 'Patas de gallo'],
    howTo: 'Aplicar con pequeños toques desde el lagrimal hacia la sien.',
    image: img('photo-1600428877878-1a0fd85beda8'),
  },
  {
    id: 'mesoestetic-melan-tran3x',
    name: 'Melan tran3x Gel Cream',
    brand: 'Mesoestetic',
    category: 'Despigmentantes',
    size: '50 ml',
    price: 1350,
    description:
      'Tratamiento despigmentante intensivo que reduce manchas y previene su reaparición. Ideal como mantenimiento después de un peeling.',
    benefits: ['Manchas', 'Melasma', 'Tono uniforme'],
    howTo: 'Aplicar por la noche sobre la piel limpia. Usar protector solar durante el día.',
    image: img('photo-1631729371254-42c2892f0e6e'),
    featured: true,
  },
  {
    id: 'mesoestetic-mesoprotech',
    name: 'Mesoprotech Melan 130+',
    brand: 'Mesoestetic',
    category: 'Protección solar',
    size: '50 ml',
    price: 890,
    description:
      'Protector solar de muy alta protección con control de pigmentación para pieles con tendencia a manchas.',
    benefits: ['Muy alta protección', 'Control de manchas', 'Con color'],
    howTo: 'Aplicar cada mañana como último paso de la rutina y reaplicar durante el día.',
    image: img('photo-1620916566398-39f1143ab7be'),
  },
  {
    id: 'mesoestetic-collagen-360',
    name: 'Collagen 360º Essence',
    brand: 'Mesoestetic',
    category: 'Antiedad',
    size: '30 ml',
    price: 1150,
    description:
      'Esencia reafirmante que estimula la síntesis de colágeno y mejora la elasticidad de la piel.',
    benefits: ['Elasticidad', 'Firmeza', 'Colágeno'],
    howTo: 'Aplicar mañana y noche sobre la piel limpia, antes de la crema.',
    image: img('photo-1600428877878-1a0fd85beda8'),
  },
  {
    id: 'pb-serum-hialuronico',
    name: 'Sérum de Ácido Hialurónico',
    brand: 'PB Serum',
    category: 'Sérums',
    size: '30 ml',
    price: 480,
    description:
      'Sérum hidratante de rápida absorción que rellena líneas finas y deja la piel jugosa y suave.',
    benefits: ['Hidratación', 'Líneas finas', 'Todo tipo de piel'],
    howTo: 'Aplicar 3–4 gotas sobre la piel limpia y ligeramente húmeda.',
    image: img('photo-1620916297397-a4a5402a3c6c'),
  },
  {
    id: 'pb-serum-vitamina-c',
    name: 'Sérum de Vitamina C',
    brand: 'PB Serum',
    category: 'Sérums',
    size: '30 ml',
    price: 520,
    description:
      'Antioxidante que ilumina, unifica el tono y protege la piel del daño ambiental.',
    benefits: ['Luminosidad', 'Antioxidante', 'Tono uniforme'],
    howTo: 'Aplicar por la mañana antes del protector solar.',
    image: img('photo-1617897903246-719242758050'),
  },
];

export const productBrands = [...new Set(products.map((p) => p.brand))];

export const formatPrice = (value: number) =>
  new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(value);
