export interface Service {
  name: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  tagline: string;
  intro: string;
  image: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'consultas',
    name: 'Consultas Especializadas',
    tagline: 'Enfoque en salud integral y diagnóstico personalizado.',
    intro:
      'El primer paso para tu transformación. Realizamos una valoración médica completa para diseñar un plan de tratamiento adaptado a tus metas de salud, peso y bienestar. Tu camino hacia una mejor versión comienza con un diagnóstico experto.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1000&q=80',
    services: [
      {
        name: 'Auriculoterapia',
        description:
          'Tratamiento con balines que estimula puntos específicos de la oreja. Ideal para el control del estrés y la ansiedad.',
      },
      {
        name: 'Bariatría',
        description:
          'Tratamiento del sobrepeso y la obesidad mediante diagnóstico médico, nutricional, psicológico y farmacológico.',
      },
      {
        name: 'Protocolo VIP Tirzepatide (mensual)',
        description:
          'Lo más moderno que existe. Ayuda a que el cuerpo procese mejor la grasa y controla el apetito de forma impresionante, siempre con seguimiento médico.',
      },
    ],
  },
  {
    id: 'aparatologia',
    name: 'Aparatología',
    tagline: 'Tecnología avanzada para resultados visibles.',
    intro:
      'Combinamos ciencia y tecnología de última generación para modelar tu figura y mejorar la textura de tu piel. Tratamientos no invasivos diseñados para potenciar tus resultados de forma segura y eficiente.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1000&q=80',
    services: [
      {
        name: 'Cavitación / Lipoláser',
        description: 'Tratamientos para quemar grasa localizada.',
      },
      {
        name: 'Radiofrecuencia',
        description: 'Reafirma la piel del rostro o del cuerpo.',
      },
      {
        name: 'Presoterapia',
        description:
          'Masaje neumático que desinflama las piernas, reduce la retención de líquidos y mejora la celulitis.',
      },
      {
        name: 'Vacumterapia',
        description:
          'Tratamiento de succión que ayuda a despegar la grasa, eliminar la celulitis y moldear el cuerpo. También drena líquidos para que el cuerpo no se sienta hinchado.',
      },
      {
        name: 'Depilación Tri-láser diodo',
        description: 'Eliminación de vello con tecnología láser de triple longitud de onda.',
      },
      {
        name: 'Eliminación de tatuajes',
        description: 'Remoción progresiva de tinta con tecnología láser.',
      },
    ],
  },
  {
    id: 'faciales',
    name: 'Faciales Médicos',
    tagline: 'Limpieza, nutrición y renovación profunda.',
    intro:
      'Más que un facial convencional, ofrecemos protocolos de grado médico para restaurar la salud de tu piel. Desde limpiezas profundas hasta peelings especializados, devolvemos la luminosidad y vitalidad a tu rostro.',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1000&q=80',
    services: [
      {
        name: 'Hidrafacial',
        description:
          'Mucho más que una limpieza. Succiona impurezas, hidrata profundamente y deja la cara brillante y limpia al instante.',
      },
      {
        name: 'Peeling',
        description:
          'Exfoliación química para renovar la piel, quitar manchas, cerrar poros y rejuvenecer.',
      },
      {
        name: 'Hollywood Peel',
        description:
          'Láser con carbón activado. Cierra los poros, quita manchas y deja la piel súper suave al instante. El favorito de las celebridades.',
      },
    ],
  },
  {
    id: 'medicina-estetica',
    name: 'Medicina Estética y Regenerativa',
    tagline: 'Resultados naturales con procedimientos de alta precisión.',
    intro:
      'Realza tu belleza natural y detén el paso del tiempo. Especialistas en la aplicación de bótox, rellenos dérmicos, lipoenzimas y terapias con células madre. Procedimientos mínimamente invasivos con estándares médicos de excelencia.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1000&q=80',
    services: [
      {
        name: 'Toxina botulínica',
        description: 'Tratamiento contra arrugas, hiperhidrosis, sonrisa gingival y migraña.',
      },
      {
        name: 'Fillers / Rellenos',
        description: 'Corrigen y dan volumen en labios, pómulos y nariz.',
      },
      {
        name: 'Lipoenzimas',
        description:
          'Tratamiento inyectable que elimina células adiposas en áreas localizadas por medio de enzimas específicas.',
      },
      {
        name: 'Despigmentación',
        description: 'Especial para manchas en axilas, cuello, entrepierna y rostro.',
      },
      {
        name: 'Células Madre Regenerativas',
        description:
          'Medicina regenerativa de alta gama. Repara los tejidos desde adentro, mejora la calidad de la piel, da vitalidad y acelera la recuperación del cuerpo.',
      },
      {
        name: 'Células Madre Capilares',
        description: 'Regeneran el cabello: frenan la caída y lo engruesan.',
      },
      {
        name: 'NCTF para Ojeras',
        description:
          'Tratamiento francés de nutrición celular que elimina el color oscuro de las ojeras y da brillo a la mirada. Un cóctel de vitaminas premium para tus ojos.',
      },
      {
        name: 'Blefaroplastia sin cirugía',
        description: 'Levanta los párpados caídos con una pluma de plasma que tensa la piel.',
      },
      {
        name: 'Peptonas',
        description:
          'Nutrientes que van directo al músculo para dar volumen y firmeza a los glúteos de forma segura.',
      },
      {
        name: 'Retiro de verrugas y lunares',
        description: 'Eliminación precisa y segura de lesiones cutáneas benignas.',
      },
    ],
  },
];

export const allServiceNames = serviceCategories.flatMap((c) => c.services.map((s) => s.name));
