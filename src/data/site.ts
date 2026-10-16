
export interface SubjectData {
    id: string;
    number: string;
    title: string;
    subtitle: string;
    description: string;
    focus: string[];
    topicsToConfirm: string[];
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
        subtitle: "Comprende los conceptos y desarrolla tu razonamiento.",
        description:
            "Clases particulares orientadas a reforzar conceptos matemáticos y practicar la resolución ordenada de ejercicios universitarios.",
        focus: [
            "Explicación de conceptos y procedimientos.",
            "Resolución de ejercicios paso a paso.",
            "Identificación de errores y revisión de resultados.",
        ],
        topicsToConfirm: [
            "Álgebra",
            "Cálculo diferencial",
            "Cálculo integral",
            "Ecuaciones",
        ],
        symbol: "∫",
    },
    {
        id: "fisica",
        number: "02",
        title: "Física",
        subtitle: "Relaciona la teoría con la resolución de problemas.",
        description:
            "Sesiones para trabajar los principios físicos, interpretar enunciados y desarrollar procedimientos de solución con claridad.",
        focus: [
            "Comprensión de principios y fórmulas.",
            "Interpretación de problemas físicos.",
            "Desarrollo ordenado de procedimientos.",
        ],
        topicsToConfirm: [
            "Cinemática",
            "Dinámica",
            "Trabajo y energía",
            "Electricidad",
        ],
        symbol: "⚛",
    },
    {
        id: "quimica",
        number: "03",
        title: "Química",
        subtitle: "Entiende los fundamentos y practica su aplicación.",
        description:
            "Clases para reforzar conceptos químicos y practicar ejercicios mediante explicaciones claras y procedimientos organizados.",
        focus: [
            "Comprensión de conceptos fundamentales.",
            "Interpretación de fórmulas y ecuaciones.",
            "Resolución guiada de ejercicios.",
        ],
        topicsToConfirm: [
            "Estructura atómica",
            "Estequiometría",
            "Soluciones",
            "Equilibrio químico",
        ],
        symbol: "⚗",
    },
];

export const site = {
    name: "Emilio Chávarri",
    email: "emilio_chavarri@hotmail.com",
    whatsapp: "51975385583",
    tagline: "Clases particulares universitarias",
    subjects,

    methodology: [
        {
            number: "01",
            title: "Identificamos tus dudas",
            description:
                "Conversamos sobre el curso, los temas que necesitas reforzar y los ejercicios que deseas trabajar.",
        },
        {
            number: "02",
            title: "Comprendemos los conceptos",
            description:
                "Revisamos la teoría necesaria para entender el problema y reconocer qué procedimiento aplicar.",
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
                "El precio se consulta directamente por WhatsApp, según la materia y las necesidades de la sesión.",
        },
        {
            question: "¿Qué temas se pueden trabajar?",
            answer:
                "Los temas mostrados son orientativos. Consulta por WhatsApp para confirmar si el contenido que necesitas está disponible.",
        },
        {
            question: "¿Qué necesito para una clase virtual?",
            answer:
                "Necesitarás conexión a internet y los ejercicios, apuntes o materiales relacionados con los temas que deseas reforzar.",
        },
    ] satisfies FAQItem[],
};

export { subjects as subjectDetails };
