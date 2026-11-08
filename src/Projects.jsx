import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

export default function Projects() {
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
            The
            <br />
            <em>Collection</em>
          </h1>

          <p>
            Un universo de diseño, experimentación
            y expresión artística.
          </p>

          <a href="#collection-gallery">
            EXPLORAR COLECCIÓN <span>↗</span>
          </a>

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
      {/* COLLECTION CATEGORIES */}
      <section className="collection-categories" id="collection-gallery">

        <article className="collection-category collection-category--featured">

          <div className="collection-category__image">
            <img
              src={`${import.meta.env.BASE_URL}images/projects/vestuario-escenico.png`}
              alt="Vestuario escénico rojo de Priscilla Atelier"
            />
          </div>

          <div className="collection-category__content">

            <span className="collection-category__number">
              01 /
            </span>

            <h2>
              Vestuario
              <br />
              Escénico
            </h2>

            <p>
              Creaciones para la escena que amplifican el relato.
            </p>

            <span className="collection-category__arrow">⟶</span>

          </div>

        </article>
        <article className="collection-category collection-category--featured collection-category--reverse">

          <div className="collection-category__image">
            <img
              src={`${import.meta.env.BASE_URL}images/projects/diseno-personalizado.png`}
              alt="Vestido azul de diseño personalizado de Priscilla Atelier"
            />
          </div>

          <div className="collection-category__content">

            <span className="collection-category__number">
              02 /
            </span>

            <h2>
              Diseño
              <br />
              Personalizado
            </h2>

            <p>
              Diseños únicos que transforman ideas en piezas extraordinarias.
            </p>

            <span className="collection-category__arrow">⟶</span>

          </div>

        </article>
        <article className="collection-category collection-category--featured">

          <div className="collection-category__image">
            <img
              src={`${import.meta.env.BASE_URL}images/projects/prendas-accesorios.png`}
              alt="Tocado escénico dorado diseñado por Priscilla Atelier"
            />
          </div>

          <div className="collection-category__content">

            <span className="collection-category__number">
              03 /
            </span>

            <h2>
              Prendas y
              <br />
              Accesorios
            </h2>

            <p>
              Piezas que transforman cada detalle en una expresión artística.
            </p>

            <span className="collection-category__arrow">⟶</span>

          </div>

        </article>

      </section>
      {/* DECLARACIÓN CREATIVA */}
      <section className="collection-statement">

        <span className="collection-statement__eyebrow">
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

        <span className="collection-statement__signature">
          Diseño · Arte · Expresión
        </span>

      </section>
      <Footer />

    </main>
  );
}