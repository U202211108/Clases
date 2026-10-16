
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { site } from "../../data/site";
import "./Navbar.css";

const navigationLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Materias", href: "#materias" },
    { label: "Metodología", href: "#metodologia" },
    { label: "Sobre mí", href: "#sobre-mi" },
    {
        label: "Preguntas frecuentes",
        href: "#preguntas-frecuentes",
    },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("#inicio");
    const pendingNavigation = useRef<string | null>(null);

    useEffect(() => {


        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Si el usuario acaba de seleccionar un enlace,
            // no permitimos que otra sección lo reemplace durante el desplazamiento.
            const pendingHref = pendingNavigation.current;

            if (pendingHref) {
                const target = document.getElementById(pendingHref.slice(1));

                if (target) {
                    const targetTop = target.getBoundingClientRect().top;

                    if (Math.abs(targetTop - 105) <= 18) {
                        pendingNavigation.current = null;
                    } else {
                        return;
                    }
                } else {
                    pendingNavigation.current = null;
                }
            }

            const sections = navigationLinks
                .map((link) => ({
                    href: link.href,
                    element: document.getElementById(link.href.slice(1)),
                }))
                .filter(
                    (
                        item
                    ): item is {
                        href: string;
                        element: HTMLElement;
                    } => item.element !== null
                );

            let current = "#inicio";

            for (const section of sections) {
                if (section.element.getBoundingClientRect().top <= 150) {
                    current = section.href;
                }
            }

            setActiveSection(current);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        document.body.classList.toggle("navbar-menu-open", menuOpen);

        return () => {
            document.body.classList.remove("navbar-menu-open");
        };
    }, [menuOpen]);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setMenuOpen(false);
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            window.removeEventListener("keydown", handleEscape);
        };
    }, []);

    const closeMenu = () => {
        setMenuOpen(false);
    };



    const handleNavigation = (href: string) => {
        const targetId = href.slice(1);
        const target = document.getElementById(targetId);

        closeMenu();

        if (!target) return;

        // Resaltar inmediatamente el enlace seleccionado.
        pendingNavigation.current = href;
        setActiveSection(href);

        window.history.replaceState(null, "", href);

        window.setTimeout(() => {
            target.scrollIntoView({
                behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches
                    ? "auto"
                    : "smooth",
                block: "start",
            });
        }, menuOpen ? 180 : 0);
    };


    return (
        <header
            className={`navbar${scrolled ? " navbar--scrolled" : ""}${menuOpen ? " navbar--menu-open" : ""
                }`}
        >
            <div className="navbar__container">
                <a
                    className="navbar__brand"
                    href="#inicio"
                    aria-label={`${site.name}: ir al inicio`}
                    onClick={(event) => {
                        event.preventDefault();
                        handleNavigation("#inicio");
                    }}
                >
                    <span className="navbar__brand-mark" aria-hidden="true">
                        <span>E</span>
                    </span>

                    <span className="navbar__brand-text">
                        <span className="navbar__brand-name">
                            {site.name}
                        </span>

                        <span className="navbar__brand-description">
                            Tutorías académicas
                        </span>
                    </span>
                </a>

                <button
                    className="navbar__toggle"
                    type="button"
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={menuOpen}
                    aria-controls="navbar-navigation"
                    onClick={() => setMenuOpen((previous) => !previous)}
                >
                    <span className="navbar__toggle-icon">
                        {menuOpen ? (
                            <X size={22} aria-hidden="true" />
                        ) : (
                            <Menu size={22} aria-hidden="true" />
                        )}
                    </span>
                </button>

                <nav
                    id="navbar-navigation"
                    className={`navbar__navigation${menuOpen ? " navbar__navigation--open" : ""
                        }`}
                    aria-label="Navegación principal"
                    aria-hidden={!menuOpen && undefined}
                >
                    <ul className="navbar__links">
                        {navigationLinks.map((link, index) => (
                            <li
                                key={link.href}
                                style={
                                    {
                                        "--nav-index": index,
                                    } as React.CSSProperties
                                }
                            >
                                <a
                                    className={`navbar__link${activeSection === link.href
                                        ? " navbar__link--active"
                                        : ""
                                        }`}
                                    href={link.href}
                                    aria-current={
                                        activeSection === link.href
                                            ? "location"
                                            : undefined
                                    }
                                    onClick={(event) => {
                                        event.preventDefault();
                                        handleNavigation(link.href);
                                    }}
                                >
                                    <span>{link.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a
                        className="navbar__contact"
                        href="#contacto"
                        onClick={(event) => {
                            event.preventDefault();
                            handleNavigation("#contacto");
                        }}
                    >
                        <span>Solicitar tutoría</span>

                        <span className="navbar__contact-icon">
                            <ArrowUpRight size={17} aria-hidden="true" />
                        </span>
                    </a>
                </nav>
            </div>

            {menuOpen && (
                <button
                    className="navbar__backdrop"
                    type="button"
                    aria-label="Cerrar menú de navegación"
                    onClick={closeMenu}
                />
            )}
        </header>
    );
}
