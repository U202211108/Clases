
import { GraduationCap } from "lucide-react";
import { site } from "../../data/site";
import "./About.css";

export default function About() {
    return (
        <section className="section section-about" id="sobre-mi">
            <div className="section-shell">
                <div className="about-panel">
                    <div className="about-mark">
                        <GraduationCap size={42} strokeWidth={1.4} />
                    </div>

                    <div className="about-content">
                        <span className="eyebrow">03 / SOBRE MÍ</span>

                        <h2>{site.name}</h2>

                        <p className="about-intro">
                            Ingeniero Electrónico
                        </p>

                        <p>
                            Brindo clases virtuales individuales de Matemática
                            y Física para escolares que necesitan reforzar sus
                            aprendizajes y para estudiantes universitarios que
                            llevan Matemática Básica, Cálculo 1, Cálculo 2,
                            Física 1 o Física 2.
                        </p>

                        <div className="about-tags">
                            <span>Modalidad virtual</span>
                            <span>Atención individual</span>
                            <span>Apoyo escolar y universitario</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
