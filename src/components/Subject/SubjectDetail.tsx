
import { ArrowUpRight } from "lucide-react";
import type { SubjectData } from "../../data/site";
import { getWhatsAppLink } from "../../utils/contact";
import SubjectIcon from "./SubjectIcon";
import "./Subject.css";

interface SubjectDetailProps {
    subject: SubjectData;
}

export default function SubjectDetail({
    subject,
}: SubjectDetailProps) {
    const subjectId = subject.id
        .trim()
        .toLocaleLowerCase("es")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    return (
        <section
            className={`subject-detail subject-detail-${subjectId}`}
            id={`curso-${subjectId}`}
            aria-labelledby={`curso-titulo-${subjectId}`}
        >
            <div className="section-shell subject-detail-layout">
                <div
                    className={`subject-detail-visual subject-detail-visual-${subjectId}`}
                    data-reveal
                >
                    <span className="subject-detail-index">
                        {subject.number} / MATERIA
                    </span>

                    <SubjectIcon
                        subjectId={subject.id}
                        className="subject-detail-svg"
                        aria-hidden="true"
                    />

                    <span className="subject-detail-caption">
                        {subject.title}
                    </span>
                </div>

                <div
                    className="subject-detail-content"
                    data-reveal
                >
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

                    <h4>Enfoque de las sesiones</h4>

                    <ul className="subject-focus-list">
                        {subject.focus.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>

                    <div className="subject-topics-note">
                        <strong>Contenidos orientativos</strong>

                        <p>
                            Consulta cuáles de estos temas están disponibles
                            y cuáles se ajustan a tus necesidades.
                        </p>

                        <div className="subject-topic-tags">
                            {subject.topicsToConfirm.map((topic) => (
                                <span key={topic}>{topic}</span>
                            ))}
                        </div>
                    </div>

                    <a
                        className="premium-link"
                        href={getWhatsAppLink(
                            `Hola, Emilio. Quisiera consultar por clases virtuales de ${subject.title}, los horarios y el precio.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Consultar por esta materia
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
