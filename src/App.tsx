
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Subject from "./components/Subject/Subject";
import SubjectDetail from "./components/Subject/SubjectDetail";
import Methodology from "./components/Methodology/Methodology";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import FAQ from "./components/FAQ/FAQ";
import { site } from "./data/site";
import "./App.css";

function App() {
  return (
    <div className="site-layout">
      <Navbar />

      <main className="site-main">
        <Hero />

        <section
          id="materias"
          className="section section--subjects"
          aria-labelledby="subjects-title"
        >
          <div className="container">
            <header className="section-heading" data-reveal>
              <span className="eyebrow">
                Áreas de aprendizaje
              </span>

              <h2 id="subjects-title">
                Domina las ciencias con{" "}
                <span className="heading-accent">
                  confianza.
                </span>
              </h2>

              <p>
                Explora las materias y encuentra el acompañamiento
                que necesitas para comprender los conceptos,
                resolver ejercicios y avanzar a tu ritmo.
              </p>
            </header>

            <div className="subject-grid">
              {site.subjects.map((subject, index) => (
                <Subject
                  key={subject.id}
                  subject={subject}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <div className="subject-details">
          {site.subjects.map((subject) => (
            <SubjectDetail
              key={subject.id}
              subject={subject}
            />
          ))}
        </div>

        <Methodology steps={site.methodology} />

        <About />

        <FAQ />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
