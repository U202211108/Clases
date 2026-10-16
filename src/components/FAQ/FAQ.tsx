
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { site } from "../../data/site";
import { getWhatsAppLink } from "../../utils/contact";
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
                                                setOpenIndex(isOpen ? null : index)
                                            }
                                        >
                                            <span className="faq-item__number">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <span className="faq-item__text">
                                                {item.question}
                                            </span>

                                            <span className="faq-item__icon">
                                                <ChevronDown
                                                    size={19}
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
                </div>
            </div>
        </section>
    );
}
