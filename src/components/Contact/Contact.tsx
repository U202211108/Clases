
import {
    ArrowUpRight,
    Mail,
    MessageCircle,
    Clock3,
    GraduationCap,
    Sparkles,
} from "lucide-react";
import { site } from "../../data/site";
import { getWhatsAppLink } from "../../utils/contact";
import { useReveal } from "../../hooks/useReveal";
import "./Contact.css";

export default function Contact() {
    const contentRef = useReveal<HTMLDivElement>();
    const cardRef = useReveal<HTMLDivElement>();

    const emailSubject =
        "Consulta sobre clases particulares de Matemática y Física";

    const emailBody = `Hola, Emilio:

Me gustaría recibir información sobre tus clases particulares virtuales de Matemática y Física.

Quisiera consultar lo siguiente:

- Nivel académico: [escolar o universitario]
- Materia: [Matemática o Física]
- Temas que necesito reforzar: [escribe aquí]
- Horarios disponibles: [indica tu disponibilidad]

¿Podrías brindarme información sobre las tarifas y los horarios disponibles?

Muchas gracias. Quedo atento/a a tu respuesta.

Saludos.`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        site.email
    )}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(
        emailBody
    )}`;

    return (
        <section
            className="section section-contact"
            id="contacto"
            aria-labelledby="contact-title"
        >
            <div className="section-shell contact-shell">
                <div className="contact-panel">
                    <div
                        className="contact-panel__decoration contact-panel__decoration--one"
                        aria-hidden="true"
                    />
                    <div
                        className="contact-panel__decoration contact-panel__decoration--two"
                        aria-hidden="true"
                    />

                    <div
                        className="contact-content"
                        ref={contentRef}
                        data-reveal
                    >
                        <span className="eyebrow contact-eyebrow">
                            <span className="contact-eyebrow__line" />
                            04 / CONTACTO
                        </span>

                        <h2 id="contact-title">
                            Tu próximo paso
                            <br />
                            <span>comienza aquí.</span>
                        </h2>

                        <p className="contact-description">
                            ¿Quieres reforzar tus conocimientos o prepararte
                            para una evaluación? Conversemos sobre tus
                            objetivos y encontremos la mejor manera de
                            acompañar tu aprendizaje.
                        </p>

                        <div className="contact-highlights">
                            <div className="contact-highlight">
                                <span className="contact-highlight__icon">
                                    <GraduationCap
                                        size={19}
                                        aria-hidden="true"
                                    />
                                </span>

                                <span>
                                    <strong>Escolares y universitarios</strong>
                                    <small>
                                        Apoyo según tu nivel académico
                                    </small>
                                </span>
                            </div>

                            <div className="contact-highlight">
                                <span className="contact-highlight__icon">
                                    <Clock3
                                        size={18}
                                        aria-hidden="true"
                                    />
                                </span>

                                <span>
                                    <strong>Clases virtuales</strong>
                                    <small>
                                        Consulta los horarios disponibles
                                    </small>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        className="contact-action-card"
                        ref={cardRef}
                        data-reveal
                    >
                        <div className="contact-action-card__top">
                            <span className="contact-action-card__symbol">
                                <MessageCircle
                                    size={25}
                                    strokeWidth={1.6}
                                    aria-hidden="true"
                                />
                            </span>

                            <span className="contact-action-card__status">
                                <span />
                                HABLEMOS
                            </span>
                        </div>

                        <span className="contact-action-card__eyebrow">
                            ESTAMOS PARA ORIENTARTE
                        </span>

                        <h3>Cuéntame qué necesitas aprender.</h3>

                        <p>
                            Consulta por las materias, los temas que deseas
                            reforzar, las tarifas y la disponibilidad.
                        </p>

                        <a
                            className="contact-whatsapp"
                            href={getWhatsAppLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="contact-whatsapp__icon">
                                <MessageCircle
                                    size={20}
                                    aria-hidden="true"
                                />
                            </span>

                            <span>Consultar por WhatsApp</span>

                            <ArrowUpRight
                                className="contact-whatsapp__arrow"
                                size={19}
                                aria-hidden="true"
                            />
                        </a>

                        <div className="contact-alternative">
                            <span className="contact-alternative__line" />
                            <span>O ESCRÍBEME POR CORREO</span>
                            <span className="contact-alternative__line" />
                        </div>

                        <a
                            className="contact-gmail"
                            href={gmailUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Abrir Gmail con un mensaje preparado para Emilio"
                        >
                            <span className="contact-gmail__icon">
                                <Mail size={18} aria-hidden="true" />
                            </span>

                            <span className="contact-gmail__text">
                                <strong>Contactar por Gmail</strong>
                                <small>{site.email}</small>
                            </span>

                            <ArrowUpRight
                                className="contact-gmail__arrow"
                                size={17}
                                aria-hidden="true"
                            />
                        </a>

                        <div className="contact-card-footer">
                            <Sparkles size={14} aria-hidden="true" />
                            <span>Un paso a la vez. Vamos aprendiendo.</span>
                        </div>
                    </div>

                    <div
                        className="contact-panel__signature"
                        aria-hidden="true"
                    >
                        <span className="contact-panel__signature-line" />
                        <span>
                            EMILIO CHÁVARRI · TUTORÍAS ACADÉMICAS
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
