
import type { SVGProps } from "react";

interface SubjectIconProps extends SVGProps<SVGSVGElement> {
    subjectId: string;
}

export default function SubjectIcon({
    subjectId,
    ...props
}: SubjectIconProps) {
    const normalizedId = subjectId
        .trim()
        .toLocaleLowerCase("es")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    const common: SVGProps<SVGSVGElement> = {
        viewBox: "0 0 160 160",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": true,
        focusable: false,
        ...props,
    };

    if (normalizedId === "matematica" || normalizedId === "matematicas") {
        return (
            <svg {...common}>
                <g
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M28 122H137" opacity=".65" />
                    <path d="M42 134V25" opacity=".65" />
                    <path d="M132 117L137 122L132 127" opacity=".65" />
                    <path d="M37 30L42 25L47 30" opacity=".65" />
                    <path
                        d="M49 104C61 104 61 88 70 72C80 53 90 50 105 61C115 69 120 83 132 84"
                        strokeWidth="3.5"
                    />
                    <path d="M48 116H132" strokeDasharray="3 7" opacity=".3" />
                </g>

                <path
                    d="M24 46C18 46 17 39 22 35C27 31 34 35 32 42C30 48 25 55 23 62C20 72 28 78 35 72"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                <circle cx="105" cy="61" r="4.5" fill="currentColor" />
            </svg>
        );
    }

    if (normalizedId === "fisica") {
        return (
            <svg {...common}>
                <g
                    stroke="currentColor"
                    strokeWidth="2.7"
                    strokeLinecap="round"
                >
                    <ellipse
                        cx="80"
                        cy="80"
                        rx="58"
                        ry="24"
                        transform="rotate(-35 80 80)"
                    />
                    <ellipse
                        cx="80"
                        cy="80"
                        rx="58"
                        ry="24"
                        transform="rotate(35 80 80)"
                    />
                    <ellipse cx="80" cy="80" rx="58" ry="24" />
                </g>

                <circle cx="80" cy="80" r="10" fill="currentColor" />
                <circle cx="35" cy="48" r="5.5" fill="currentColor" />
                <circle cx="119" cy="48" r="5.5" fill="currentColor" />
                <circle cx="137" cy="80" r="5.5" fill="currentColor" />
            </svg>
        );
    }

    if (normalizedId === "quimica") {
        return (
            <svg {...common}>
                <g
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M65 24H95" />
                    <path d="M70 24V55L41 110C36 121 42 132 54 132H106C118 132 124 121 119 110L90 55V24" />

                    <path
                        d="M55 100C68 94 88 107 106 98L119 118C121 125 115 130 107 130H53C44 130 40 123 44 115L55 100Z"
                        fill="currentColor"
                        fillOpacity=".22"
                        stroke="none"
                    />

                    <path d="M48 112C65 105 88 118 113 108" />
                </g>

                <g fill="currentColor">
                    <circle cx="68" cy="91" r="3.5" />
                    <circle cx="84" cy="101" r="2.5" />
                    <circle cx="95" cy="88" r="4" />
                    <circle cx="78" cy="78" r="2" />
                </g>
            </svg>
        );
    }

    return (
        <svg {...common}>
            <circle
                cx="80"
                cy="80"
                r="48"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="5 7"
                opacity=".45"
            />
            <text
                x="80"
                y="91"
                fill="currentColor"
                fontSize="32"
                textAnchor="middle"
                fontFamily="serif"
            >
                ?
            </text>
        </svg>
    );
}
