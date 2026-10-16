
import {
    ArrowUpRight,
    BookOpen,
    GraduationCap,
} from "lucide-react";
import type { CSSProperties } from "react";
import type { SubjectData } from "../../data/site";
import { getWhatsAppLink } from "../../utils/contact";
import LearningIllustration from "./LearningIllustration";
import "./Subject.css";

interface SubjectDetailProps {
    subject: SubjectData;
}

export default function SubjectDetail({ subject }: SubjectDetailProps) {
    const subjectId = subject.id
        .trim()
        .toLocaleLowerCase("es")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    const isMath = subjectId === "matematica";

    const universityCourses = isMath
        ? "Matemática Básica, Cálculo 1 o Cálculo 2"
        : "Física 1 o Física 2";

    const whatsappMessage =
        `Hola, Emilio. Quisiera consultar por clases virtuales de ${subject.title}. ` +
        `Me interesa recibir apoyo en ${isMath ? "Matemática" : "Física"}, ` +
        `específicamente en ${universityCourses}. ` +
        "¿Podrías indicarme los horarios disponibles y el precio?";

    return (
        <section
            className={`subject-detail subject-detail-${subjectId}`}
            id={`curso-${subjectId}`}
            aria-labelledby={`curso-titulo-${subjectId}`}
        >
            <div className="section-shell subject-detail-layout">
                {/* Panel visual con ilustraciones por nivel */}
                <aside
                    className={`subject-detail-visual subject-detail-visual-${subjectId}`}
                    data-reveal
                    aria-label={`Niveles y cursos de ${subject.title}`}
                >
                    <div className="learning-visual-heading">
                        <span className="learning-visual-kicker">
                            RUTAS DE APRENDIZAJE
                        </span>

                        <h3>Un camino para cada etapa.</h3>

                        <p>
                            {isMath
                                ? "Desde los fundamentos matemáticos hasta el cálculo universitario."
                                : "Desde los fundamentos físicos hasta los cursos universitarios."}
                        </p>
                    </div>

                    <div className="learning-icon-grid">
                        <article
                            className="learning-icon-card learning-icon-card--school"
                            style={
                                { "--icon-index": 0 } as CSSProperties
                            }
                        >
                            <div className="learning-icon-card__copy">
                                <span className="learning-icon-card__eyebrow">
                                    NIVEL 01
                                </span>

                                <span className="learning-icon-card__label">
                                    Escolares
                                </span>

                                <span className="learning-icon-card__subtitle">
                                    Refuerzo escolar
                                </span>
                            </div>

                            <LearningIllustration
                                kind="escolares"
                                subjectId={subject.id}
                                className="learning-illustration learning-illustration--card"
                            />
                        </article>

                        <article
                            className="learning-icon-card learning-icon-card--university"
                            style={
                                { "--icon-index": 1 } as CSSProperties
                            }
                        >
                            <div className="learning-icon-card__copy">
                                <span className="learning-icon-card__eyebrow">
                                    NIVEL 02
                                </span>

                                <span className="learning-icon-card__label">
                                    Universitarios
                                </span>

                                <span className="learning-icon-card__subtitle">
                                    Formación superior
                                </span>
                            </div>

                            <LearningIllustration
                                kind="universitarios"
                                subjectId={subject.id}
                                className="learning-illustration learning-illustration--card"
                            />
                        </article>
                    </div>

                    <div className="learning-visual-course-preview">
                        <span className="learning-visual-course-preview__line" />

                        <span>
                            {subject.universityTopics.length} cursos universitarios
                            disponibles en el temario
                        </span>
                    </div>

                    <div className="learning-visual-footer">
                        <span className="learning-visual-footer__dot" />
                        <span>Clases virtuales individuales</span>
                    </div>
                </aside>

                {/* Contenido principal */}
                <div className="subject-detail-content" data-reveal>
                    <span className="eyebrow">
                        MATERIA {subject.number} / CLASES VIRTUALES
                    </span>

                    <h2 id={`curso-titulo-${subjectId}`}>
                        {subject.title}
                    </h2>

                    <h3>{subject.subtitle}</h3>

                    <p className="subject-detail-description">
                        {subject.description}
                    </p>

                    <h4>¿Cómo trabajaremos?</h4>

                    <ul className="subject-focus-list">
                        {subject.focus.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>

                    {/* Temario escolar con ilustración */}
                    <section
                        className="subject-topics-note subject-topics-note--school"
                        aria-labelledby={`escolares-${subjectId}`}
                    >
                        <header className="subject-topics-heading subject-topics-heading--illustrated">
                            <div className="subject-topics-heading__copy">
                                <span className="subject-topics-heading__eyebrow">
                                    PRIMERA ETAPA
                                </span>

                                <div className="subject-topics-heading__title">
                                    <BookOpen
                                        size={21}
                                        aria-hidden="true"
                                    />

                                    <h4 id={`escolares-${subjectId}`}>
                                        Para escolares
                                    </h4>
                                </div>

                                <p>
                                    Temas que se pueden reforzar según el grado
                                    escolar y las necesidades del estudiante.
                                </p>
                            </div>

                            <LearningIllustration
                                kind="escolares"
                                subjectId={subject.id}
                                className="learning-illustration learning-illustration--section"
                            />
                        </header>

                        <div className="subject-topic-tags">
                            {subject.schoolTopics.map((topic, index) => (
                                <span
                                    key={topic}
                                    style={
                                        {
                                            "--topic-index": index,
                                        } as CSSProperties
                                    }
                                >
                                    {topic}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Temario universitario */}
                    <section
                        className="subject-topics-note subject-topics-note--university"
                        aria-labelledby={`universitarios-${subjectId}`}
                    >
                        <header className="subject-topics-heading subject-topics-heading--illustrated">
                            <div className="subject-topics-heading__copy">
                                <span className="subject-topics-heading__eyebrow">
                                    SEGUNDA ETAPA
                                </span>

                                <div className="subject-topics-heading__title">
                                    <GraduationCap
                                        size={23}
                                        aria-hidden="true"
                                    />

                                    <h4 id={`universitarios-${subjectId}`}>
                                        Para estudiantes universitarios
                                    </h4>
                                </div>

                                <p>
                                    Explora los contenidos habituales de cada
                                    curso. El temario puede variar según la
                                    universidad, la carrera y el sílabo.
                                </p>
                            </div>

                            <LearningIllustration
                                kind="universitarios"
                                subjectId={subject.id}
                                className="learning-illustration learning-illustration--section"
                            />
                        </header>

                        <div className="university-course-list">
                            {subject.universityTopics.map(
                                (course, courseIndex) => (
                                    <article
                                        className="university-course"
                                        key={course.course}
                                        style={
                                            {
                                                "--course-index": courseIndex,
                                            } as CSSProperties
                                        }
                                    >
                                        <header className="university-course__header">
                                            <div className="university-course__identity">
                                                <span className="university-course__number">
                                                    {String(
                                                        courseIndex + 1
                                                    ).padStart(2, "0")}
                                                </span>

                                                <div className="university-course__copy">
                                                    <h5 className="university-course__title">
                                                        {course.course}
                                                    </h5>

                                                    <span className="university-course__caption">
                                                        Curso universitario
                                                    </span>
                                                </div>
                                            </div>

                                            <LearningIllustration
                                                kind={course.course}
                                                subjectId={subject.id}
                                                className="learning-illustration learning-illustration--course"
                                            />
                                        </header>

                                        <div className="subject-topic-tags university-course__topics">
                                            {course.topics.map(
                                                (topic, topicIndex) => (
                                                    <span
                                                        key={topic}
                                                        style={
                                                            {
                                                                "--topic-index":
                                                                    topicIndex,
                                                            } as CSSProperties
                                                        }
                                                    >
                                                        {topic}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </article>
                                )
                            )}
                        </div>
                    </section>

                    <a
                        className="premium-link"
                        href={getWhatsAppLink(whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Consultar por {subject.title}

                        <ArrowUpRight
                            size={18}
                            aria-hidden="true"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
