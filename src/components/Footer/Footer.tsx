
import { ArrowUp } from "lucide-react";
import { site } from "../../data/site";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="section-shell footer-inner">
                <div className="footer-brand">
                    <strong>{site.name}</strong>
                    <span>Clases particulares universitarias</span>
                </div>

                <a className="footer-top-link" href="#inicio">
                    Volver al inicio
                    <ArrowUp size={16} />
                </a>
            </div>

            <div className="section-shell footer-bottom">
                <span>
                    © {new Date().getFullYear()} {site.name}
                </span>
                <span>Matemática · Física · Química</span>
            </div>
        </footer>
    );
}
