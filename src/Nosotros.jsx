import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

export default function Nosotros() {
  return (
    <main className="nosotros" id="inicio">
     

        <section className="nosotros-hero"
            style={{
                backgroundImage: `
                linear-gradient(
                    90deg,
                    rgba(24, 24, 23, 0.25) 0%,
                    rgba(24, 24, 23, 0.08) 55%,
                    rgba(24, 24, 23, 0.02) 100%
                ),
                url("${import.meta.env.BASE_URL}images/nosotros/background.png")
                `
            }}
        >
         <Header />
        <div className="nosotros-hero__content">
            <h1>
                Detrás de<br />
                <em>cada creación.</em>
            </h1>

          <span className="nosotros-hero__line"></span>

          <p>
            PRISCILLA ATELIER · CIUDAD DE MÉXICO
          </p>
        </div>
      </section>


      <section className="history" id="historia">
        <div className="history__visual">
            <img
            src={`${import.meta.env.BASE_URL}images/nosotros/Maniqui.png`}
            alt="Maniquí con tela color vino en un espacio de diseño y confección"
            />
            <span className="history__caption">
            EL PROCESO · LA VISIÓN · EL DETALLE
            </span>
        </div>

        <div className="history__content">
            <p className="history__eyebrow">01 — NUESTRA HISTORIA</p>

            <h2>
            Dos perspectivas,<br />
            <em>una visión.</em>
            </h2>

            <span className="history__line"></span>

            <p>
            PRISCILLA ATELIER nace de la unión de dos profesionales con experiencia en vestuario teatral y alta costura, que decidieron llevar su talento, conocimiento y visión creativa a un proyecto propio. <br></br>  
            Después de años de trabajar detrás de otras marcas, encontraron en este atelier la oportunidad de desarrollar una independiente, donde cada idea pudiera convertirse en una creación con carácter y personalidad.
            </p>

            <p>
            Hoy, su trabajo se enfoca en diseñar y confeccionar vestuario artístico, prendas y accesorios personalizados para quienes buscan expresar algo extraordinario.
            </p>
        </div>
        </section>

        <section className="beyond">
          <div className="beyond__title">
            <h2>
              Más allá<br />
              de la prenda.
            </h2>
            <span></span>
          </div>

          <article className="beyond__item">
            <h3>Identidad</h3>
            <p>
              Creamos piezas que expresan la esencia
              de cada persona y proyecto.
            </p>
          </article>

          <article className="beyond__item">
            <h3>Experimentación</h3>
            <p>
              Exploramos materiales, formas y conceptos
              para llevar la idea más lejos.
            </p>
          </article>

          <article className="beyond__item">
            <h3>Oficio</h3>
            <p>
              Conjugamos técnica, experiencia y atención
              al detalle en cada creación.
            </p>
          </article>
        </section>

        <section className="process">
          <div className="process__intro">
            <p className="process__eyebrow">EL PROCESO</p>

            <span className="process__line"></span>

            <h2>
              Donde las<br />
              ideas toman<br />
              <em>forma.</em>
            </h2>
          </div>

          <div className="process__steps">

            <article className="process__step">
              <img
                src={`${import.meta.env.BASE_URL}images/nosotros/materiales.png`}
                alt="Exploración de materiales textiles"
              />
              <h3>MATERIALES</h3>
            </article>

            <article className="process__step">
              <img
                src={`${import.meta.env.BASE_URL}images/nosotros/diseno.png`}
                alt="Bocetos y conceptualización de vestuario"
              />
              <h3>DISEÑO</h3>
            </article>

            <article className="process__step">
              <img
                src={`${import.meta.env.BASE_URL}images/nosotros/construccion.png`}
                alt="Trabajo artesanal de confección y bordado"
              />
              <h3>CONSTRUCCIÓN</h3>
            </article>

          </div>
        </section>
        <section className="final-cta">
          <div className="final-cta__content">
            <h2>
              Toda creación<br />
              extraordinaria<br />
              comienza con una idea.
            </h2>

            <span className="final-cta__line"></span>

            <a
              href={`${import.meta.env.BASE_URL}#contacto`}
              className="final-cta__button"
            >
              INICIAR UN PROYECTO <span>↗</span>
            </a>
          </div>
        </section>
        <Footer/>
    </main>
  );
}