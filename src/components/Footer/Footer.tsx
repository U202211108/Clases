
import { ArrowUp, BookOpen } from "lucide-react";
import { site } from "../../data/site";
import "./Footer.css";

export default function Footer() {
    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <footer className="footer">
            <div className="section-shell footer-inner">
                <a
                    className="footer-brand"
                    href="#inicio"
                    onClick={(event) => {
                        event.preventDefault();
                        handleScrollToTop();
                    }}
                    aria-label={`${site.name}, volver al inicio`}
                >
                    <span className="footer-brand__mark">
                        <BookOpen size={23} strokeWidth={1.5} />
                    </span>

                    <span className="footer-brand__text">
                        <strong>{site.name}</strong>
                        <span>TUTORÍAS ACADÉMICAS</span>
                    </span>
                </a>

                <p className="footer-description">
                    Clases virtuales de Matemática y Física
                    <span>para escolares y universitarios.</span>
                </p>

                <button
                    className="footer-top-link"
                    type="button"
                    onClick={handleScrollToTop}
                    aria-label="Volver a la parte superior de esta página"
                >
                    <span>Volver al inicio</span>
                    <span className="footer-top-link__icon">
                        <ArrowUp size={17} strokeWidth={1.8} />
                    </span>
                </button>
            </div>

            <div className="section-shell footer-bottom">
                <span>
                    © {new Date().getFullYear()} {site.name}. Todos los derechos
                    reservados.
                </span>

                <span className="footer-bottom__subjects">
                    MATEMÁTICA <i /> FÍSICA
                </span>
            </div>
        </footer>
    );
}
