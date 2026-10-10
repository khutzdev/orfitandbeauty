export const WA_NUMBER = '7411108466';

export const waLink = (message = '¡Hola! Me gustaría agendar una consulta en Orfit.') =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { label: 'Tratamientos', href: '#procedures' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Productos', href: '#products' },
  { label: 'Resultados', href: '#why-us' },
  { label: 'Contacto', href: '#contact' },
];

export const contact = {
  address: 'Av. de la Paz 123, Col. Centro\nPuebla, México',
  phone: '+52 222 905 1344',
  phoneHref: 'tel:+527411108466',
  email: 'kricodelao@gmail.com',
  emailHref: 'mailto:kricodelao@gmail.com',
};

export const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/or_fit_beauty?igsh=MTE2ZHpzZnBvamti',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1Af98dbVVH/?mibextid=wwXIfr',
  },
];

export const brands = ['Allergan', 'Galderma', 'Merz', 'Teoxane', 'Hugel', 'IPSEN'];

export interface Product {
  brand: string;
  line: string;
  category: string;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    brand: 'SVR',
    line: 'Sebiaclear · Biotic · Ampoule',
    category: 'Dermatología',
    description:
      'Fórmulas dermatológicas sin perfume ni parabenos para piel grasa, acnéica y sensible. Desarrolladas con dermatólogos para resultados clínicamente comprobados.',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=700&q=80',
  },
  {
    brand: 'La Roche-Posay',
    line: 'Effaclar · Cicaplast · Hyalu B5',
    category: 'Farmacéutica',
    description:
      'Soluciones clínicas con agua termal de La Roche-Posay para pieles sensibles, reactivas e irritadas. Recomendadas por dermatólogos en más de 90 países.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=700&q=80',
  },
  {
    brand: 'Vichy',
    line: 'Mineral 89 · Liftactiv · Normaderm',
    category: 'Anti-edad',
    description:
      'Fórmulas enriquecidas con agua volcánica de Vichy para hidratación profunda, firmeza visible y control de imperfecciones en todo tipo de piel.',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=700&q=80',
  },
  {
    brand: 'CeraVe',
    line: 'Hidratante · Limpiador · SA Suavizante',
    category: 'Barrera cutánea',
    description:
      'Ceramidas esenciales + ácido hialurónico + niacinamida para restaurar y mantener la barrera natural de la piel. Desarrollado con dermatólogos.',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=700&q=80',
  },
];

export const pillars = [
  {
    title: 'Seguridad Ante Todo',
    description:
      'Cada tratamiento sigue protocolos basados en evidencia. Usamos únicamente productos certificados de proveedores premium para garantizar tu seguridad en cada paso.',
  },
  {
    title: 'Precisión Clínica',
    description:
      'Nuestros especialistas combinan formación médica con educación continua en las técnicas más avanzadas, asegurando resultados precisos y predecibles.',
  },
  {
    title: 'Atención Personalizada',
    description:
      'Sin tratamientos genéricos. Cada plan se diseña en torno a tu anatomía, objetivos y estilo de vida para resultados que complementan tus rasgos naturales.',
  },
  {
    title: 'Resultados Comprobados',
    description:
      'Más de una década de experiencia y miles de pacientes satisfechos reflejan nuestro compromiso con la excelencia y la mejora continua.',
  },
];
