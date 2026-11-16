import { useState } from 'react';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ProjectFilters from './components/Projects/ProjectFilters.jsx';
import ProjectMasonry from './components/Projects/ProjectMasonry.jsx';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  return (
    <main className="projects">

      <Header />

      {/* COLLECTION HERO */}
      <section className="collection-hero">
        <div className="collection-hero__content">

          <span className="collection-hero__eyebrow">
            03 / PORTFOLIO
          </span>

          <h1>
            Nuestra
            <br />
            <em>Colección</em>
          </h1>

          <p>
            Un universo de diseño, experimentación
            y expresión artística.
          </p>

        </div>

        <div className="collection-hero__image">
          <div className="collection-hero__image">
            <img
              src={`${import.meta.env.BASE_URL}images/projects/hero.png`}
              alt="Vestuario escénico rojo de Priscilla Atelier"
            />
          </div>
        </div>

      </section>
        <ProjectFilters
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <ProjectMasonry
          activeCategory={activeCategory}
        />

        {/* CREATIVE STATEMENT */}
        <section className="creative-statement">
          <div className="creative-statement__content">

            <span className="creative-statement__eyebrow">
              PRISCILLA ATELIER — PROCESO CREATIVO
            </span>

            <h2>
              Cada creación
              <br />
              comienza con <em>una idea.</em>
            </h2>

            <p>
              Desde la exploración conceptual hasta la construcción
              de cada pieza, desarrollamos propuestas que combinan
              diseño, técnica y expresión artística.
            </p>

            <span className="creative-statement__signature">
              Diseño · Arte · Expresión
            </span>

          </div>
        </section>

      <Footer />

    </main>
  );
}