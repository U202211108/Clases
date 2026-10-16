
import { ArrowUpRight } from "lucide-react";
import SubjectIcon from "./SubjectIcon";
import type { SubjectData } from "../../data/site";
import "./Subject.css";

interface SubjectProps {
    subject: SubjectData;
    index?: number;
    onExplore: (subject: SubjectData) => void;
}

export default function Subject({
    subject,
    index = 0,
    onExplore,
}: SubjectProps) {
    return (
        <article
            className={`subject-card subject-card--${subject.id}`}
            data-reveal
            data-reveal-delay={Math.min(index + 1, 4).toString()}
        >
            <div className="subject-card__top">
                <span className="subject-card__number">
                    {subject.number || String(index + 1).padStart(2, "0")}
                </span>

                <span className="subject-card__icon">
                    <SubjectIcon
                        subjectId={subject.id}
                        width={76}
                        height={76}
                    />
                </span>
            </div>

            <div className="subject-card__content">
                <span className="subject-card__subtitle">
                    {subject.subtitle}
                </span>

                <h3 className="subject-card__title">
                    {subject.title}
                </h3>

                <p className="subject-card__description">
                    {subject.description}
                </p>
            </div>

            <button
                type="button"
                className="subject-card__link"
                onClick={() => onExplore(subject)}
                aria-label={`Explorar los contenidos de ${subject.title}`}
            >
                <span>Explorar materia</span>

                <span className="subject-card__link-icon">
                    <ArrowUpRight size={19} aria-hidden="true" />
                </span>
            </button>
        </article>
    );
}
