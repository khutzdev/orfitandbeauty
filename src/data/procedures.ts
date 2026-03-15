export interface Procedure {
  id: string;
  name: string;
  tagline: string;
  description: string;
  duration: string;
  recovery: string;
  image: string;
}

export const procedures: Procedure[] = [
  {
    id: 'botox',
    name: 'Botox',
    tagline: 'Suaviza líneas de expresión de forma natural',
    description:
      'Las inyecciones de toxina botulínica relajan los músculos faciales seleccionados para suavizar arrugas dinámicas — líneas de frente, patas de gallo y entre cejas — con resultados que lucen descansados, nunca congelados.',
    duration: '20–30 min',
    recovery: 'Sin tiempo de recuperación',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80',
  },
  {
    id: 'hyaluronic-acid',
    name: 'Rellenos de Ácido Hialurónico',
    tagline: 'Restaura volumen y contorno',
    description:
      'Los rellenos de ácido hialurónico restauran volumen juvenil en pómulos, mandíbula y ojeras. Biocompatibles y reversibles, se integran de forma natural con el tejido de tu piel.',
    duration: '30–45 min',
    recovery: '1–2 días',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
  },
  {
    id: 'lip-enhancement',
    name: 'Aumento de Labios',
    tagline: 'Define, hidrata y esculpe',
    description:
      'La colocación precisa de relleno añade definición al borde labial, volumen al cuerpo y equilibra la asimetría — creando labios naturalmente más llenos adaptados a la armonía de tu rostro.',
    duration: '20–30 min',
    recovery: '1–2 días',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80',
  },
  {
    id: 'chemical-peel',
    name: 'Peeling Químico',
    tagline: 'Renueva la piel para un resplandor radiante',
    description:
      'Los exfoliantes químicos de grado médico eliminan las capas externas dañadas para revelar una piel más luminosa y uniforme. Eficaces para pigmentación, cicatrices de acné, líneas finas y textura opaca.',
    duration: '30–60 min',
    recovery: '3–7 días',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80',
  },
  {
    id: 'mesotherapy',
    name: 'Mesoterapia',
    tagline: 'Hidratación profunda desde adentro',
    description:
      'Las microinyecciones de vitaminas, minerales y ácido hialurónico administradas directamente en la piel estimulan el colágeno, mejoran la elasticidad y restauran la luminosidad a nivel celular.',
    duration: '30–45 min',
    recovery: 'Mínima',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80',
  },
  {
    id: 'prp',
    name: 'Terapia PRP',
    tagline: 'Aprovecha tus propios factores de crecimiento',
    description:
      'La terapia con Plasma Rico en Plaquetas utiliza las proteínas regenerativas de tu propio cuerpo para estimular la producción de colágeno, mejorar la textura cutánea y promover el rejuvenecimiento natural de los tejidos.',
    duration: '45–60 min',
    recovery: '1–2 días',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
  },
  {
    id: 'laser',
    name: 'Tratamientos Láser',
    tagline: 'Precisión para resultados duraderos',
    description:
      'La tecnología láser avanzada actúa sobre la pigmentación, las lesiones vasculares y la flacidez cutánea con precisión. Los protocolos personalizados abordan tus preocupaciones específicas para una mejora visible y duradera.',
    duration: '30–60 min',
    recovery: '2–5 días',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80',
  },
  {
    id: 'thread-lift',
    name: 'Hilo Tensor',
    tagline: 'Lifting facial sin cirugía',
    description:
      'Los hilos PDO reabsorbibles reposicionan el tejido caído y estimulan la síntesis de colágeno, proporcionando un lifting inmediato con mejora progresiva de la calidad de la piel — sin necesidad de cirugía.',
    duration: '60–90 min',
    recovery: '3–5 días',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80',
  },
];

export const stats = [
  { value: '10+', label: 'Años de Experiencia' },
  { value: '2,000+', label: 'Pacientes Satisfechos' },
  { value: '15+', label: 'Tratamientos Disponibles' },
  { value: '98%', label: 'Índice de Satisfacción' },
];

export const testimonials = [
  {
    name: 'Sofía M.',
    text: 'Los resultados fueron increíblemente naturales. Me veo como yo misma — solo más descansada y radiante. El equipo me hizo sentir completamente tranquila durante todo el proceso.',
    treatment: 'Botox + Rellenos',
  },
  {
    name: 'Valentina R.',
    text: 'Mi piel nunca había lucido tan bien. Tras tres sesiones de mesoterapia, la textura y el brillo son de otro nivel. Recomiendo ampliamente Orfit a quien esté considerando tratamientos estéticos.',
    treatment: 'Mesoterapia',
  },
  {
    name: 'Camila T.',
    text: 'Profesionales, precisos y genuinamente atentos. El aumento de labios fue exactamente lo que quería — un volumen sutil que luce completamente natural. Volveré sin duda.',
    treatment: 'Aumento de Labios',
  },
];
