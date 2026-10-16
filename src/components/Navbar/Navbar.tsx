
import { useState } from "react";
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

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleNavigation = (href: string) => {
        closeMenu();

        const targetId = href.slice(1);

        window.setTimeout(() => {
            const target = document.getElementById(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });

                window.history.replaceState(null, "", href);
            }
        }, menuOpen ? 150 : 0);
    };

    return (
        <header className="navbar">
            <div className="navbar__container">
                <a
                    className="navbar__brand"
                    href="#inicio"
                    aria-label="Ir al inicio"
                    onClick={(event) => {
                        event.preventDefault();
                        handleNavigation("#inicio");
                    }}
                >
                    <span className="navbar__brand-mark" aria-hidden="true">
                        E
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
                    {menuOpen ? (
                        <X size={23} aria-hidden="true" />
                    ) : (
                        <Menu size={23} aria-hidden="true" />
                    )}
                </button>

                <nav
                    id="navbar-navigation"
                    className={`navbar__navigation ${menuOpen ? "navbar__navigation--open" : ""
                        }`}
                    aria-label="Navegación principal"
                >
                    <ul className="navbar__links">
                        {navigationLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    className="navbar__link"
                                    href={link.href}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        handleNavigation(link.href);
                                    }}
                                >
                                    {link.label}
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
                        <ArrowUpRight size={17} aria-hidden="true" />
                    </a>
                </nav>
            </div>
        </header>
    );
}
