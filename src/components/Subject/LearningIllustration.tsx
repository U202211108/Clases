
import type { CSSProperties } from "react";

interface LearningIllustrationProps {
    kind: string;
    subjectId: string;
    className?: string;
}

export default function LearningIllustration({
    kind,
    subjectId,
    className = "",
}: LearningIllustrationProps) {
    const isMath = subjectId.toLowerCase().includes("matematica");
    const course = kind.toLowerCase();

    const isSchool = course === "escolares";
    const isUniversity = course === "universitarios";
    const isBasicMath = course.includes("matemática básica");
    const isCalculus1 = course.includes("cálculo 1");
    const isCalculus2 = course.includes("cálculo 2");
    const isPhysics1 = course.includes("física 1");
    const isPhysics2 = course.includes("física 2");

    const style = {
        "--illustration-accent": isMath ? "#C7FE38" : "#D9E8BD",
    } as CSSProperties;

    return (
        <svg
            className={`learning-illustration ${className}`}
            style={style}
            viewBox="0 0 180 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={`${kind}: ilustración de ${isMath ? "Matemática" : "Física"}`}
        >
            <defs>
                <linearGradient id={`illustration-bg-${kind.replace(/\W/g, "")}`} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#234C3C" />
                    <stop offset="100%" stopColor="#10281F" />
                </linearGradient>
            </defs>

            <rect
                x="3"
                y="3"
                width="174"
                height="134"
                rx="22"
                fill={`url(#illustration-bg-${kind.replace(/\W/g, "")})`}
            />

            <circle
                cx="142"
                cy="30"
                r="24"
                fill="var(--illustration-accent)"
                fillOpacity=".09"
            />
            <circle
                cx="32"
                cy="112"
                r="20"
                fill="var(--illustration-accent)"
                fillOpacity=".07"
            />

            {(isSchool || isUniversity) && (
                <g stroke="var(--illustration-accent)" strokeWidth="2" opacity=".45">
                    <path d="M18 24H38M28 14V34" />
                    <circle cx="151" cy="108" r="9" />
                    <path d="M145 108H157M151 102V114" />
                </g>
            )}

            {isMath && isSchool && (
                <g stroke="var(--illustration-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="48" y="29" width="84" height="82" rx="9" fill="#183B2E" />
                    <path d="M58 47H122M58 64H122M58 81H122M58 98H122" opacity=".25" />
                    <path d="M76 39L88 51M88 39L76 51" />
                    <path d="M98 44H113" />
                    <path d="M75 72H91M83 64V80" />
                    <path d="M101 70L113 82M113 70L101 82" />
                    <circle cx="80" cy="98" r="4" fill="var(--illustration-accent)" />
                    <path d="M98 98H114" />
                </g>
            )}

            {isMath && isUniversity && (
                <g stroke="var(--illustration-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M34 105H149M48 116V27" opacity=".5" />
                    <path d="M43 34L48 27L53 34" opacity=".5" />
                    <path d="M141 100L149 105L141 110" opacity=".5" />
                    <path d="M55 93C67 93 68 74 80 65S102 41 119 55S132 80 145 81" />
                    <circle cx="119" cy="55" r="4" fill="var(--illustration-accent)" />
                </g>
            )}

            {isMath && isBasicMath && (
                <g stroke="var(--illustration-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="42" y="24" width="96" height="92" rx="12" fill="#183B2E" />
                    <path d="M60 44H120" opacity=".3" />
                    <path d="M63 62H77M70 55V69" />
                    <path d="M91 62H105" />
                    <path d="M116 55L126 69M126 55L116 69" />
                    <path d="M62 87H78M70 79V95" />
                    <path d="M94 87H122" />
                </g>
            )}

            {isMath && isCalculus1 && (
                <g stroke="var(--illustration-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M35 108H149M48 119V24" opacity=".45" />
                    <path d="M54 101C67 98 68 80 81 65S103 43 124 33" />
                    <path d="M78 69L118 48" strokeWidth="2" strokeDasharray="4 5" />
                    <circle cx="81" cy="65" r="4" fill="var(--illustration-accent)" />
                    <path d="M114 33H124V43" />
                </g>
            )}

            {isMath && isCalculus2 && (
                <g stroke="var(--illustration-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M35 108H149M48 118V24" opacity=".45" />
                    <path d="M53 98C68 98 69 38 94 38S119 98 143 98" />
                    <path d="M53 98C68 98 69 38 94 38S119 98 143 98V108H53Z" fill="var(--illustration-accent)" fillOpacity=".18" stroke="none" />
                    <path d="M53 98C68 98 69 38 94 38S119 98 143 98" />
                </g>
            )}

            {!isMath && isSchool && (
                <g stroke="var(--illustration-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M32 111H149M44 120V25" opacity=".4" />
                    <path d="M52 98L84 66L111 80L139 40" />
                    <circle cx="52" cy="98" r="4" fill="var(--illustration-accent)" />
                    <circle cx="84" cy="66" r="4" fill="var(--illustration-accent)" />
                    <circle cx="111" cy="80" r="4" fill="var(--illustration-accent)" />
                    <circle cx="139" cy="40" r="4" fill="var(--illustration-accent)" />
                </g>
            )}

            {!isMath && isUniversity && (
                <g stroke="var(--illustration-accent)" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="90" cy="70" rx="48" ry="20" transform="rotate(-35 90 70)" />
                    <ellipse cx="90" cy="70" rx="48" ry="20" transform="rotate(35 90 70)" />
                    <ellipse cx="90" cy="70" rx="48" ry="20" />
                    <circle cx="90" cy="70" r="7" fill="var(--illustration-accent)" />
                </g>
            )}

            {!isMath && isPhysics1 && (
                <g stroke="var(--illustration-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M35 109H149M47 119V25" opacity=".4" />
                    <path d="M52 100L134 42" />
                    <circle cx="52" cy="100" r="6" fill="var(--illustration-accent)" />
                    <circle cx="134" cy="42" r="6" fill="var(--illustration-accent)" />
                    <path d="M108 42H134V68" opacity=".55" />
                    <path d="M77 83L86 72" strokeDasharray="3 5" />
                </g>
            )}

            {!isMath && isPhysics2 && (
                <g stroke="var(--illustration-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M45 43H66L77 65L66 87H45" />
                    <path d="M135 43H114L103 65L114 87H135" />
                    <path d="M66 43L114 87M66 87L114 43" opacity=".5" />
                    <circle cx="90" cy="65" r="10" fill="var(--illustration-accent)" fillOpacity=".18" />
                    <path d="M90 52V78M77 65H103" />
                    <path d="M90 25V35M90 95V105M39 65H29M141 65H151" opacity=".6" />
                </g>
            )}
        </svg>
    );
}
