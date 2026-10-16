
import { useEffect, useState } from "react";

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
import type { SubjectData } from "./data/site";

import "./App.css";

function App() {
  const [selectedSubject, setSelectedSubject] =
    useState<SubjectData | null>(null);

  useEffect(() => {
    if (!selectedSubject) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedSubject]);

  function handleExploreSubject(subject: SubjectData) {
    setSelectedSubject(subject);
  }

  function handleBackToSubjects() {
    setSelectedSubject(null);
  }

  return (
    <div className="site-layout">
      <Navbar />

      <main className="site-main">

        {selectedSubject ? (
          <section
            key={selectedSubject.id}
            className="subject-page"
            aria-labelledby="subject-page-title"
          >
            <div className="subject-page__container">
              <button
                type="button"
                className="subject-page__back"
                onClick={handleBackToSubjects}
              >
                <span aria-hidden="true">←</span>
                <span>Volver a materias</span>
              </button>

              <div className="subject-page__intro">
                <span className="subject-page__eyebrow">
                  EMILIO CHÁVARRI · CLASES VIRTUALES
                </span>

                <h1
                  id="subject-page-title"
                  className="subject-page__title"
                >
                  Aprende con claridad,
                  <br />
                  <span>avanza con confianza.</span>
                </h1>

                <p className="subject-page__description">
                  Explora los contenidos de {selectedSubject.title} y encuentra
                  el acompañamiento que necesitas para tu etapa de aprendizaje.
                </p>
              </div>

              <SubjectDetail
                key={selectedSubject.id}
                subject={selectedSubject}
              />
            </div>
          </section>
        ) : (
          <>
            <Hero />

            <section
              id="materias"
              className="section section--subjects"
              aria-labelledby="subjects-title"
            >
              <div className="container">
                <header
                  className="section-heading"
                  data-reveal
                >
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
                    Explora las materias y encuentra el
                    acompañamiento que necesitas para comprender
                    los conceptos, resolver ejercicios y avanzar
                    a tu ritmo.
                  </p>
                </header>

                <div className="subject-grid">
                  {site.subjects.map((subject, index) => (
                    <Subject
                      key={subject.id}
                      subject={subject}
                      index={index}
                      onExplore={handleExploreSubject}
                    />
                  ))}
                </div>
              </div>
            </section>

            <Methodology steps={site.methodology} />

            <About />

            <FAQ />

            <Contact />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
