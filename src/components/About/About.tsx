
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
                            Bachiller en Ingeniería Electrónica.
                        </p>

                        <p>
                            Brindo clases particulares de Matemática, Física
                            y Química para estudiantes universitarios, con
                            atención individual y modalidad virtual.
                        </p>

                        <div className="about-tags">
                            <span>Modalidad virtual</span>
                            <span>Atención individual</span>
                            <span>Horarios coordinados</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
