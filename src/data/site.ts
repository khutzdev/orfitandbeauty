// Código de país (52) requerido por wa.me.
export const WA_NUMBER = '527411108466';

export const waLink = (message = '¡Hola! Me gustaría agendar una consulta en Orfit.') =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

export const BOOKING_MESSAGE =
  '¡Hola! Quiero agendar una cita en Orfit. ¿Qué días y horarios tienen disponibles?';

export const bookingLink = () => waLink(BOOKING_MESSAGE);

export const navLinks = [
  { label: 'Servicios', href: '/#services' },
  { label: 'Especialista', href: '/#specialist' },
  { label: 'Tienda', href: '/tienda' },
  { label: 'Preguntas', href: '/#faq' },
  { label: 'Contacto', href: '/#contact' },
];

export const contact = {
  phone: '+52 741 110 8466',
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

export const brands = [
  'Merz',
  'IT Pharma',
  "L'Cells",
  'IFA Celtics',
  'SVR',
  'Filorga',
  'PB Serum',
  'Pro-Oteo',
  'Mesoestetic',
  'Fillmed',
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

export const stats = [
  { value: '10+', label: 'Años de Experiencia' },
  { value: '2,000+', label: 'Pacientes Satisfechos' },
  { value: '25+', label: 'Tratamientos Disponibles' },
  { value: '98%', label: 'Índice de Satisfacción' },
];

export const testimonials = [
  {
    name: 'Sofía M.',
    text: 'Los resultados fueron increíblemente naturales. Me veo como yo misma — solo más descansada y radiante. El equipo me hizo sentir completamente tranquila durante todo el proceso.',
    treatment: 'Toxina botulínica + Rellenos',
  },
  {
    name: 'Valentina R.',
    text: 'Mi piel nunca había lucido tan bien. Después de mis sesiones de Hidrafacial, la textura y el brillo son de otro nivel. Recomiendo ampliamente Orfit a quien esté considerando tratamientos estéticos.',
    treatment: 'Hidrafacial',
  },
  {
    name: 'Camila T.',
    text: 'Profesionales, precisos y genuinamente atentos. El relleno de labios fue exactamente lo que quería — un volumen sutil que luce completamente natural. Volveré sin duda.',
    treatment: 'Fillers / Rellenos',
  },
];

export const specialist = {
  name: 'Dra. Karen Alicia de la O Rico',
  role: 'Bariatría · Medicina Estética · Auriculoterapia',
  title: 'Ciencia y calidez al servicio de tu belleza',
  // Agregar la foto real de la doctora (p. ej. '/dra-karen.jpg' en /public). Vacío = monograma.
  image: '',
  bio: [
    'Soy la Dra. Karen Alicia de la O Rico, médico especialista apasionada por la salud metabólica y la estética avanzada. Mi enfoque no es solo tratar el síntoma, sino acompañarte en una transformación integral que inicie desde el interior.',
    "Con una sólida formación en Bariatría, Medicina Estética y Auriculoterapia, he diseñado OR'Fit como un espacio donde la ciencia y el cuidado personalizado se encuentran. Mi objetivo es que cada paciente que entre a mi consultorio recupere no solo su figura o la salud de su piel, sino también su seguridad y bienestar general.",
    'Creo fielmente en los resultados naturales y en tratamientos basados en evidencia médica, utilizando siempre tecnología de vanguardia y los estándares más altos de seguridad.',
  ],
  values: [
    {
      title: 'Atención Humana',
      description: 'Escucho tus objetivos y miedos para crear el plan perfecto para ti.',
    },
    {
      title: 'Experiencia Médica',
      description: 'Cada procedimiento es realizado con precisión profesional.',
    },
    {
      title: 'Actualización Constante',
      description:
        'Traigo para ti los protocolos más modernos a nivel mundial, como el innovador Tirzepatide.',
    },
  ],
};

export const faqs = [
  {
    question: '¿Cómo sé qué tratamiento es el ideal para mí?',
    answer:
      'Lo más importante es la valoración médica inicial. En la primera consulta analizamos tu historial, tus objetivos y tus necesidades específicas para diseñar un plan personalizado que combine nutrición, aparatología o medicina estética según sea el caso.',
  },
  {
    question: '¿Los procedimientos de Medicina Estética (Bótox, Rellenos) duelen?',
    answer:
      'Son procedimientos mínimamente invasivos. Utilizamos técnicas de aplicación precisas y, de ser necesario, anestesia tópica (crema) para que la experiencia sea prácticamente indolora y muy cómoda para ti.',
  },
  {
    question: '¿Qué es el Protocolo VIP Tirzepatide y por qué es diferente?',
    answer:
      'Es lo más avanzado actualmente en salud metabólica. A diferencia de otros métodos, este protocolo ayuda al cuerpo a procesar las grasas de forma muy eficiente y a controlar el apetito, siempre bajo un estricto seguimiento médico para garantizar tu seguridad y resultados.',
  },
  {
    question: '¿Cuánto tiempo duran los resultados de la aparatología (Cavitación, Radiofrecuencia)?',
    answer:
      'Los resultados son visibles desde las primeras sesiones, pero para que sean duraderos es vital seguir las recomendaciones de alimentación e hidratación que te brindamos en el consultorio.',
  },
  {
    question: '¿Hay algún tiempo de recuperación tras los inyectables?',
    answer:
      'La mayoría de nuestros tratamientos te permiten reincorporarte a tus actividades diarias de inmediato. En algunos casos, como con los rellenos o lipoenzimas, puede presentarse una ligera inflamación que desaparece en un par de días.',
  },
  {
    question: '¿Qué diferencia hay entre un facial convencional y un Hidrafacial o Peeling Médico?',
    answer:
      'Los faciales médicos utilizan activos de grado profesional y tecnología que penetra en capas más profundas de la piel. No solo limpian, sino que tratan problemas específicos como manchas, acné, poros abiertos o líneas de expresión.',
  },
];
