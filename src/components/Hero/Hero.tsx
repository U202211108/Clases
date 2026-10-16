
import {
    ArrowDown,
    ArrowUpRight,
    BookOpen,
    GraduationCap,
} from "lucide-react";

import { site } from "../../data/site";
import { getWhatsAppLink } from "../../utils/contact";
import { useReveal } from "../../hooks/useReveal";
import "./Hero.css";

export default function Hero() {
    const contentRef = useReveal<HTMLDivElement>();
    const visualRef = useReveal<HTMLDivElement>();

    return (
        <section id="inicio" className="hero">
            <div className="hero__container">
                <div
                    className="hero__content"
                    ref={contentRef}
                    data-reveal
                >
                    <span className="hero__eyebrow">
                        <span className="hero__eyebrow-line" />
                        Tutorías académicas personalizadas
                    </span>


                    <h1 className="hero__title">
                        Aprende con claridad,
                        <br />
                        <span>avanza con confianza.</span>
                    </h1>

                    <p className="hero__description">
                        Clases virtuales individuales de Matemática y Física para escolares
                        y universitarios. Refuerza tus conocimientos, resuelve tus dudas y
                        prepárate para tus evaluaciones.
                    </p>


                    <div className="hero__teacher">
                        <span className="hero__teacher-icon">
                            <GraduationCap size={21} aria-hidden="true" />
                        </span>

                        <div>
                            <strong>{site.name}</strong>
                            <span>Profesor de ciencias y matemáticas</span>
                        </div>
                    </div>

                    <div className="hero__actions">
                        <a
                            className="button button--primary"
                            href={getWhatsAppLink(
                                "Hola, profesor Emilio. Quisiera consultar sobre sus tutorías virtuales."
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Solicitar una tutoría
                            <ArrowUpRight size={18} aria-hidden="true" />
                        </a>




                        <a
                            className="button button--outline hero__button-subjects"
                            href="#materias"
                        >
                            <BookOpen
                                size={18}
                                strokeWidth={1.8}
                                aria-hidden="true"
                            />
                            <span>Explorar materias</span>
                        </a>



                    </div>

                    <a className="hero__scroll" href="#materias">
                        <span className="hero__scroll-icon">
                            <ArrowDown size={15} aria-hidden="true" />
                        </span>

                        <span>Descubre cómo aprender</span>
                    </a>
                </div>

                <div
                    className="hero__visual"
                    ref={visualRef}
                    data-reveal
                    data-reveal-delay="2"
                >
                    <div className="hero__image-frame">
                        <img
                            className="hero__image"
                            src="/images/emilio.jpeg"
                            alt="Emilio Chávarri, profesor de Matemáticas, Física y Química"
                            fetchPriority="high"
                        />

                        <div className="hero__image-caption">
                            <span className="hero__caption-label">
                                Tu profesor
                            </span>

                            <strong>{site.name}</strong>

                            <span className="hero__caption-subtitle">
                                Aprendizaje a tu medida
                            </span>
                        </div>
                    </div>

                    <div
                        className="hero__decor hero__decor--top"
                        aria-hidden="true"
                    >
                        <span>01</span>
                        <span>Aprender con confianza</span>
                    </div>

                    <div
                        className="hero__decor hero__decor--bottom"
                        aria-hidden="true"
                    >
                        <span className="hero__decor-symbol">π</span>
                        <span>La comprensión es el comienzo</span>
                    </div>

                    <span className="hero__circle" aria-hidden="true" />
                </div>
            </div>

            <div className="hero__bottom-line" aria-hidden="true" />
        </section>
    );
}
