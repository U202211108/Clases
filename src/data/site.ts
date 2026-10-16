
export interface UniversityCourse {
    course: string;
    topics: string[];
}

export interface SubjectData {
    id: string;
    number: string;
    title: string;
    subtitle: string;
    description: string;
    focus: string[];
    schoolTopics: string[];
    universityTopics: UniversityCourse[];
    symbol: string;
}

export interface MethodologyStep {
    number: string;
    title: string;
    description: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}

export const subjects: SubjectData[] = [
    {
        id: "matematica",
        number: "01",
        title: "Matemática",
        subtitle: "Desde las bases escolares hasta los cursos universitarios.",
        description:
            "Clases virtuales individuales para escolares que necesitan reforzar sus aprendizajes y para estudiantes universitarios que buscan comprender conceptos y resolver ejercicios paso a paso.",
        focus: [
            "Refuerzo de los temas vistos en el colegio y apoyo para resolver tareas y ejercicios.",
            "Explicación clara de conceptos, fórmulas y procedimientos.",
            "Preparación de prácticas y evaluaciones a partir de los temas que el estudiante necesita trabajar.",
        ],
        schoolTopics: [
            "Aritmética y operaciones básicas",
            "Fracciones, decimales y porcentajes",
            "Razones y proporciones",
            "Potencias y raíces",
            "Productos notables y factorización",
            "Ecuaciones e inecuaciones",
            "Geometría y medición",
            "Áreas, perímetros y volúmenes",
            "Funciones y gráficos",
            "Estadística y probabilidad básica",
        ],
        universityTopics: [
            {
                course: "Matemática Básica",
                topics: [
                    "Números reales y propiedades",
                    "Exponentes y radicales",
                    "Productos notables",
                    "Factorización algebraica",
                    "Ecuaciones e inecuaciones",
                    "Sistemas de ecuaciones",
                    "Expresiones algebraicas y racionales",
                    "Logaritmos y sus propiedades",
                    "Funciones: dominio, rango y gráficas",
                    "Geometría analítica básica",
                ],
            },
            {
                course: "Cálculo 1",
                topics: [
                    "Funciones y sus gráficas",
                    "Límites de funciones",
                    "Límites laterales y al infinito",
                    "Asíntotas",
                    "Continuidad de funciones",
                    "Definición de la derivada",
                    "Reglas de derivación",
                    "Regla de la cadena",
                    "Derivación implícita",
                    "Recta tangente y recta normal",
                    "Máximos y mínimos",
                    "Problemas de optimización",
                    "Análisis y representación de gráficas",
                ],
            },
            {
                course: "Cálculo 2",
                topics: [
                    "Antiderivadas e integrales indefinidas",
                    "Integral definida",
                    "Teorema fundamental del cálculo",
                    "Método de sustitución",
                    "Integración por partes",
                    "Integración por fracciones parciales",
                    "Integrales trigonométricas",
                    "Integrales impropias",
                    "Área entre curvas",
                    "Volúmenes de sólidos de revolución",
                    "Sucesiones numéricas",
                    "Series numéricas y convergencia",
                    "Series de potencias, según el sílabo",
                ],
            },
        ],
        symbol: "∫",
    },
    {
        id: "fisica",
        number: "02",
        title: "Física",
        subtitle: "Comprende los principios y resuelve problemas con método.",
        description:
            "Clases virtuales individuales para escolares que necesitan reforzar Física y para estudiantes universitarios que desean comprender la teoría, interpretar enunciados y desarrollar ejercicios de forma ordenada.",
        focus: [
            "Comprensión de conceptos físicos y uso de fórmulas.",
            "Interpretación de enunciados, datos y unidades.",
            "Resolución guiada de problemas y revisión de procedimientos.",
        ],
        schoolTopics: [
            "Magnitudes físicas y unidades",
            "Conversión de unidades",
            "Movimiento y cinemática",
            "Velocidad y aceleración",
            "Leyes de Newton y fuerzas",
            "Trabajo, energía y potencia",
            "Gravedad y caída libre",
            "Presión y principios de fluidos",
            "Calor y temperatura",
            "Ondas y sonido",
            "Electricidad y magnetismo básico",
        ],
        universityTopics: [
            {
                course: "Física 1",
                topics: [
                    "Magnitudes físicas y análisis dimensional",
                    "Vectores y operaciones vectoriales",
                    "Cinemática en una dimensión",
                    "Movimiento en dos dimensiones",
                    "Movimiento parabólico",
                    "Movimiento circular",
                    "Leyes de Newton",
                    "Diagramas de cuerpo libre",
                    "Fuerzas de fricción",
                    "Trabajo, energía cinética y potencial",
                    "Conservación de la energía",
                    "Impulso y cantidad de movimiento",
                    "Colisiones",
                    "Rotación y torque",
                    "Equilibrio estático",
                    "Gravitación, según el sílabo",
                ],
            },
            {
                course: "Física 2",
                topics: [
                    "Carga eléctrica y ley de Coulomb",
                    "Campo eléctrico",
                    "Potencial y energía eléctrica",
                    "Capacitancia y condensadores",
                    "Corriente eléctrica y resistencia",
                    "Ley de Ohm",
                    "Circuitos eléctricos",
                    "Leyes de Kirchhoff",
                    "Campo y fuerza magnética",
                    "Inducción electromagnética",
                    "Leyes de Faraday y Lenz",
                    "Ondas y movimiento ondulatorio",
                    "Temperatura y calor",
                    "Primera ley de la termodinámica",
                    "Óptica geométrica, según el sílabo",
                ],
            },
        ],
        symbol: "⚛",
    },
];

export const site = {
    name: "Emilio Chávarri",
    email: "emilio_chavarri@hotmail.com",
    whatsapp: "51975385583",
    tagline:
        "Clases virtuales de Matemática y Física para escolares y universitarios",
    subjects,

    methodology: [
        {
            number: "01",
            title: "Identificamos tus dudas",
            description:
                "Conversamos sobre el nivel de estudios, la materia y los temas que necesitas reforzar.",
        },
        {
            number: "02",
            title: "Comprendemos los conceptos",
            description:
                "Revisamos la teoría necesaria para entender el tema y reconocer qué procedimiento aplicar.",
        },
        {
            number: "03",
            title: "Resolvemos paso a paso",
            description:
                "Desarrollamos ejercicios de manera ordenada, explicando los pasos y revisando los resultados.",
        },
        {
            number: "04",
            title: "Reforzamos lo aprendido",
            description:
                "Identificamos los puntos que necesitan más práctica y resolvemos las dudas pendientes.",
        },
    ] satisfies MethodologyStep[],

    faq: [
        {
            question: "¿Las clases son para escolares y universitarios?",
            answer:
                "Sí. Las clases virtuales individuales están dirigidas a escolares que necesitan apoyo en Matemática o Física y a universitarios que buscan reforzar Matemática Básica, Cálculo 1, Cálculo 2, Física 1 o Física 2.",
        },
        {
            question: "¿Las clases son presenciales o virtuales?",
            answer:
                "Las clases ofrecidas en esta página son virtuales y de atención individual.",
        },
        {
            question: "¿Cómo coordino un horario?",
            answer:
                "Escríbele a Emilio por WhatsApp para consultar la disponibilidad y coordinar un horario.",
        },
        {
            question: "¿Cuál es el precio de una clase?",
            answer:
                "El precio se consulta directamente por WhatsApp, según el nivel, la materia y las necesidades de la sesión.",
        },
        {
            question: "¿Qué temas se pueden trabajar?",
            answer:
                "La página presenta temas escolares orientativos y contenidos habituales de los cursos universitarios. Consulta con Emilio para confirmar si puede ayudarte con el tema específico que necesitas reforzar.",
        },
        {
            question: "¿Qué necesito para una clase virtual?",
            answer:
                "Necesitarás conexión a internet y, si los tienes, tus apuntes, ejercicios, tareas o materiales relacionados con los temas que deseas reforzar.",
        },
    ] satisfies FAQItem[],
};

export { subjects as subjectDetails };
