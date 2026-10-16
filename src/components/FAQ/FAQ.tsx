
import { useState } from "react";
import {
    ArrowDownRight,
    BookOpen,
    GraduationCap,
    Lightbulb,
    Check,
    Calculator,
    Atom,
} from "lucide-react";
import { site } from "../../data/site";
import { useReveal } from "../../hooks/useReveal";
import "./FAQ.css";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const headingRef = useReveal<HTMLDivElement>();
    const listRef = useReveal<HTMLDivElement>();
    const asideRef = useReveal<HTMLDivElement>();

    return (
        <section
            id="preguntas-frecuentes"
            className="faq-section"
            aria-labelledby="faq-title"
        >
            <div className="faq-container">
                <header
                    className="faq-heading"
                    ref={headingRef}
                    data-reveal
                >
                    <span className="eyebrow">Resolvemos tus dudas</span>

                    <h2 id="faq-title">
                        Preguntas frecuentes,{" "}
                        <span>respuestas claras.</span>
                    </h2>

                    <p>
                        Conoce cómo funcionan las tutorías virtuales y encuentra
                        la información que necesitas antes de comenzar.
                    </p>
                </header>

                <div className="faq-layout">
                    <div
                        className="faq-list"
                        ref={listRef}
                        data-reveal
                    >
                        {site.faq.map((item, index) => {
                            const isOpen = openIndex === index;
                            const questionId = `faq-question-${index}`;
                            const answerId = `faq-answer-${index}`;

                            return (
                                <article
                                    className={`faq-item ${isOpen ? "faq-item--open" : ""
                                        }`}
                                    key={item.question}
                                >
                                    <h3 className="faq-item__heading">
                                        <button
                                            id={questionId}
                                            className="faq-item__question"
                                            type="button"
                                            aria-expanded={isOpen}
                                            aria-controls={answerId}
                                            onClick={() =>
                                                setOpenIndex(
                                                    isOpen ? null : index
                                                )
                                            }
                                        >
                                            <span className="faq-item__number">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <span className="faq-item__text">
                                                {item.question}
                                            </span>

                                            <span className="faq-item__icon">
                                                <ArrowDownRight
                                                    size={18}
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </button>
                                    </h3>

                                    <div
                                        id={answerId}
                                        className="faq-item__answer"
                                        role="region"
                                        aria-labelledby={questionId}
                                        hidden={!isOpen}
                                    >
                                        <p>{item.answer}</p>
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    <aside
                        className="faq-aside"
                        ref={asideRef}
                        data-reveal
                        aria-labelledby="faq-aside-title"
                    >
                        <div className="faq-aside__orbit faq-aside__orbit--outer" />
                        <div className="faq-aside__orbit faq-aside__orbit--inner" />

                        <div className="faq-aside__top">
                            <span className="faq-aside__symbol">
                                <Lightbulb
                                    size={23}
                                    strokeWidth={1.5}
                                    aria-hidden="true"
                                />
                            </span>

                            <span className="faq-aside__label">
                                TU CAMINO DE APRENDIZAJE
                            </span>
                        </div>

                        <span className="faq-aside__eyebrow">
                            APRENDER CON CONFIANZA
                        </span>

                        <h3 id="faq-aside-title">
                            Comprender es el primer paso para{" "}
                            <span>avanzar.</span>
                        </h3>

                        <p className="faq-aside__description">
                            Cada estudiante tiene sus propios retos. La clave
                            está en fortalecer las bases, comprender los
                            conceptos y practicar con propósito.
                        </p>

                        <div className="faq-aside__divider">
                            <span />
                            <span />
                            <span />
                        </div>

                        <div className="faq-aside__path">
                            <div className="faq-aside__path-item">
                                <span className="faq-aside__path-icon">
                                    <BookOpen size={19} aria-hidden="true" />
                                </span>

                                <div className="faq-aside__path-content">
                                    <span className="faq-aside__path-kicker">
                                        NIVEL ESCOLAR
                                    </span>

                                    <strong>Construye buenas bases</strong>

                                    <p>
                                        Refuerza los fundamentos y aprende a
                                        resolver ejercicios paso a paso.
                                    </p>
                                </div>

                                <Check
                                    className="faq-aside__check"
                                    size={16}
                                    aria-hidden="true"
                                />
                            </div>

                            <div className="faq-aside__path-item">
                                <span className="faq-aside__path-icon">
                                    <GraduationCap
                                        size={20}
                                        aria-hidden="true"
                                    />
                                </span>

                                <div className="faq-aside__path-content">
                                    <span className="faq-aside__path-kicker">
                                        NIVEL UNIVERSITARIO
                                    </span>

                                    <strong>Profundiza y aplica</strong>

                                    <p>
                                        Comprende la teoría, desarrolla
                                        problemas y practica para tus
                                        evaluaciones.
                                    </p>
                                </div>

                                <Check
                                    className="faq-aside__check"
                                    size={16}
                                    aria-hidden="true"
                                />
                            </div>
                        </div>

                        <div className="faq-aside__subjects">
                            <span className="faq-aside__subjects-title">
                                ÁREAS DE ENSEÑANZA
                            </span>

                            <div className="faq-aside__subject">
                                <span className="faq-aside__subject-icon">
                                    <Calculator
                                        size={17}
                                        aria-hidden="true"
                                    />
                                </span>
                                <span>Matemática</span>
                            </div>

                            <div className="faq-aside__subject">
                                <span className="faq-aside__subject-icon">
                                    <Atom size={18} aria-hidden="true" />
                                </span>
                                <span>Física</span>
                            </div>
                        </div>

                        <div className="faq-aside__footer">
                            <span className="faq-aside__footer-line" />
                            <span>UN PASO A LA VEZ</span>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
