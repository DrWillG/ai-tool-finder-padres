export interface QuizOption {
  value: string;
  label: string;
  description: string;
  emoji: string;
}

export interface QuizStep {
  id: string;
  question: string;
  subtext: string;
  options: QuizOption[];
}

export const QUIZ_STEPS: QuizStep[] = [
  {
    id: 'grade',
    question: '¿En qué grado está tu hijo/a?',
    subtext: 'Encontraremos herramientas adecuadas para su edad y nivel.',
    options: [
      { value: 'tk2', label: 'Kínder – 2°', description: 'Edades 5–8', emoji: '🌱' },
      { value: '35', label: '3° – 5°', description: 'Edades 8–11', emoji: '📚' },
      { value: '68', label: '6° – 8°', description: 'Edades 11–14', emoji: '🔬' },
      { value: '912', label: '9° – 12°', description: 'Edades 14–18', emoji: '🎓' },
    ],
  },
  {
    id: 'subject',
    question: '¿Qué área quieres apoyar?',
    subtext: 'Elige el área donde tu hijo/a necesita más ayuda o enriquecimiento.',
    options: [
      { value: 'math', label: 'Matemáticas', description: 'Aritmética, álgebra, geometría y más', emoji: '➕' },
      { value: 'reading', label: 'Lectura y Escritura', description: 'Comprensión, vocabulario y habilidades de escritura', emoji: '📖' },
      { value: 'science', label: 'Ciencias e Investigación', description: 'Conceptos STEM y habilidades de investigación', emoji: '🔭' },
      { value: 'creative', label: 'Creatividad y Habilidades Futuras', description: 'Programación, diseño, música y preparación profesional', emoji: '🎨' },
    ],
  },
  {
    id: 'goal',
    question: '¿Cuál es tu objetivo principal?',
    subtext: 'Sé honesto/a — no hay respuesta incorrecta.',
    options: [
      { value: 'tutoring', label: 'Tutoría y ayuda con tareas', description: 'Mi hijo/a necesita apoyo adicional fuera de la escuela', emoji: '🤝' },
      { value: 'career', label: 'Habilidades para el futuro', description: 'Quiero que mi hijo/a esté preparado para los trabajos del mañana', emoji: '🚀' },
      { value: 'creative', label: 'Enriquecimiento creativo', description: 'Mi hijo/a aprende mejor creando cosas', emoji: '✨' },
      { value: 'safety', label: 'Mantener a mi hijo/a seguro con la IA', description: 'Quiero monitorear el uso y encontrar herramientas apropiadas para su edad', emoji: '🛡️' },
    ],
  },
  {
    id: 'concern',
    question: '¿Cuál es tu mayor preocupación sobre la IA?',
    subtext: 'Esto nos ayuda a priorizar herramientas que aborden lo que más te preocupa.',
    options: [
      { value: 'overreliance', label: 'Dependencia excesiva / no pensar por sí mismo', description: 'Me preocupa que la IA piense por mi hijo/a', emoji: '🧠' },
      { value: 'integrity', label: 'Integridad académica / hacer trampa', description: 'No quiero que la IA haga las tareas o redacciones por ellos', emoji: '✏️' },
      { value: 'privacy', label: 'Privacidad y seguridad de datos', description: 'Me preocupa qué datos recopilan estas aplicaciones', emoji: '🔒' },
      { value: 'content', label: 'Contenido inapropiado', description: 'Me preocupa lo que mi hijo/a podría encontrar', emoji: '🚧' },
    ],
  },
  {
    id: 'budget',
    question: '¿Cuál es tu presupuesto?',
    subtext: 'Muchas herramientas excelentes son completamente gratuitas.',
    options: [
      { value: 'free', label: 'Solo gratuitas', description: 'Muéstrame las mejores herramientas gratuitas disponibles', emoji: '💚' },
      { value: 'low', label: 'Menos de $15/mes', description: 'Estoy abierto/a a suscripciones económicas', emoji: '💛' },
      { value: 'premium', label: 'Premium está bien', description: 'Invertiré en la herramienta correcta para mi hijo/a', emoji: '⭐' },
    ],
  },
];

export const GRADE_LABELS: Record<string, string> = {
  tk2: 'Kínder–2° Grado',
  '35': '3°–5° Grado',
  '68': '6°–8° Grado',
  '912': '9°–12° Grado',
};

export const SUBJECT_LABELS: Record<string, string> = {
  math: 'Matemáticas',
  reading: 'Lectura y Escritura',
  science: 'Ciencias',
  creative: 'Creatividad y Habilidades Futuras',
  all: 'Todas las Materias',
};

export const GOAL_LABELS: Record<string, string> = {
  tutoring: 'Tutoría y Ayuda con Tareas',
  career: 'Habilidades para el Futuro',
  creative: 'Enriquecimiento Creativo',
  safety: 'Seguridad y Monitoreo',
};
