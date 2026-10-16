
import { ArrowUpRight, Mail } from "lucide-react";
import { site } from "../../data/site";
import { getWhatsAppLink } from "../../utils/contact";
import "./Contact.css";

export default function Contact() {
    return (
        <section className="section section-contact" id="contacto">
            <div className="section-shell">
                <div className="contact-panel">
                    <span className="eyebrow">04 / CONTACTO</span>

                    <h2>Coordinemos tu próxima clase.</h2>

                    <p>
                        Escríbeme para consultar los temas disponibles,
                        la disponibilidad horaria y el precio de las
                        clases particulares virtuales.
                    </p>

                    <a
                        className="button button-light"
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Consultar por WhatsApp
                        <ArrowUpRight size={18} />
                    </a>

                    <a className="contact-email" href={`mailto:${site.email}`}>
                        <Mail size={17} />
                        {site.email}
                    </a>
                </div>
            </div>
        </section>
    );
}
