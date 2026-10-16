
import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement>() {
    const revealRef = useRef<T | null>(null);

    useEffect(() => {
        const container = revealRef.current;

        if (!container) {
            return;
        }

        const elements: HTMLElement[] = [];

        if (container.matches("[data-reveal]")) {
            elements.push(container);
        }

        elements.push(
            ...Array.from(
                container.querySelectorAll<HTMLElement>("[data-reveal]")
            )
        );

        if (elements.length === 0) {
            return;
        }

        const showAll = () => {
            elements.forEach((element) => {
                element.classList.add("is-visible");
            });
        };

        if (
            window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
            !("IntersectionObserver" in window)
        ) {
            showAll();
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.05,
                rootMargin: "0px 0px -20px 0px",
            }
        );

        elements.forEach((element) => observer.observe(element));

        return () => {
            observer.disconnect();
        };
    }, []);

    return revealRef;
}
