
import type { MethodologyStep } from "../../data/site";
import "./Methodology.css";

interface MethodologyProps {
    steps: MethodologyStep[];
}

export default function Methodology({ steps }: MethodologyProps) {
    return (
        <section className="section section-methodology" id="metodologia">
            <div className="section-shell">
                <div className="section-heading">
                    <span className="eyebrow">02 / METODOLOGÍA</span>
                    <h2>Una clase centrada en tus dudas.</h2>
                    <p>
                        Un proceso de trabajo orientado a comprender los
                        conceptos y desarrollar ejercicios paso a paso.
                    </p>
                </div>

                <div className="method-grid">
                    {steps.map((step) => (
                        <article className="method-card" key={step.number}>
                            <span className="method-number">{step.number}</span>
                            <div className="method-card-line" />
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
