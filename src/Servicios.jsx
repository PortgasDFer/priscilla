import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

export default function Servicios() {
  return (
    
    <main className="services-page">
        <Header />
        {/* HERO */}
        <section className="services-hero" id="inicio">
        
        <img
            className="services-hero__image"
            src={`${import.meta.env.BASE_URL}images/servicios/hero.png`}
            alt="Maniquí de alta costura rodeado de telas de seda en el atelier"
        />

        <div className="services-hero__overlay"></div>

        <div className="services-hero__content">

            <span className="services-hero__eyebrow">
            SERVICIOS / EL ARTE DE CREAR
            </span>

            <h1>
            De la idea
            <br />
            a la <em>pieza.</em>
            </h1>

            <p>
            Creación de vestuario y accesorios a medida
            para proyectos escénicos, artísticos y de autor.
            </p>

        </div>

        <span className="services-hero__index">
            PRISCILLA ATELIER — 04
        </span>

        </section>
        {/* ÍNDICE DE SERVICIOS */}
        <section className="services-index" id="indice-servicios">

        <div className="services-index__heading">
            <span>PRISCILLA ATELIER / DISCIPLINAS</span>

            <h2>
            Lo que podemos <em>crear.</em>
            </h2>

            <p>
            Cada idea es una oportunidad para explorar nuevas formas
            de expresión artística.
            </p>
        </div>

        <div className="services-index__list">

            {/* 01 DISEÑO Y CONFECCIÓN */}
            <article className="services-index__item services-index__item--light">

            <div className="services-index__image">
                <img
                src={`${import.meta.env.BASE_URL}images/servicios/diseno.png`}
                alt="Herramientas de diseño y confección"
                loading="lazy"
                />
            </div>

            <div className="services-index__content">
                <span className="services-index__number">01</span>

                <div className="services-index__details">
                <h3>Diseño y confección</h3>

                <p>
                    Del concepto y la elección de materiales
                    a la elaboración de la prenda.
                </p>

                <a href="#diseno-confeccion">
                    CONOCER MÁS ↗
                </a>
                </div>
            </div>

            </article>

            {/* 02 VESTUARIO ESCÉNICO */}
            <article className="services-index__item services-index__item--dark">

            <div className="services-index__content">
                <span className="services-index__number">02</span>

                <div className="services-index__details">
                <h3>Vestuario para teatro y espectáculos</h3>

                <p>
                    Propuestas para producciones, escenarios
                    y proyectos artísticos.
                </p>

                <a href="#vestuario-escenico">
                    CONOCER MÁS ↗
                </a>
                </div>
            </div>

            <div className="services-index__image">
                <img
                src={`${import.meta.env.BASE_URL}images/servicios/escenico.png`}
                alt="Vestuario teatral de terciopelo y bordados"
                loading="lazy"
                />
            </div>

            </article>

            {/* 03 DRAG Y COSPLAY */}
            <article className="services-index__item services-index__item--light">

            <div className="services-index__image">
                <img
                src={`${import.meta.env.BASE_URL}images/servicios/cosplay.png`}
                alt="Maquillaje y caracterización artística"
                loading="lazy"
                />
            </div>

            <div className="services-index__content">
                <span className="services-index__number">03</span>

                <div className="services-index__details">
                <h3>Drag, cosplay y personajes</h3>

                <p>
                    Vestuario personalizado para dar forma
                    a una identidad escénica.
                </p>

                <a href="#drag-cosplay">
                    CONOCER MÁS ↗
                </a>
                </div>
            </div>

            </article>

            {/* 04 ACCESORIOS */}
            <article className="services-index__item services-index__item--dark">

            <div className="services-index__content">
                <span className="services-index__number">04</span>

                <div className="services-index__details">
                <h3>Accesorios</h3>

                <p>
                    Tocados, sombreros, antifaces, cinturones,
                    alas y piezas complementarias.
                </p>

                <a href="#accesorios">
                    CONOCER MÁS ↗
                </a>
                </div>
            </div>

            <div className="services-index__image">
                <img
                src={`${import.meta.env.BASE_URL}images/servicios/accesorios.png`}
                alt="Corona artesanal con pedrería y perlas"
                loading="lazy"
                />
            </div>

            </article>

        </div>
        </section>

        {/* DETALLE 01 — DISEÑO Y CONFECCIÓN */}
        <section className="service-editorial" id="diseno-confeccion">

        {/* FOTOGRAFÍA PRINCIPAL */}
        <div className="service-editorial__visual">

            <img
            src={`${import.meta.env.BASE_URL}images/servicios/diseno01.png`}
            alt="Maniquí de alta costura con muselina y terciopelo"
            className="service-editorial__main-image"
            loading="lazy"
            />

            <span className="service-editorial__brand">
            PRISCILLA<br />ATELIER
            </span>

            <span className="service-editorial__index">01</span>

        </div>

        {/* CONTENIDO EDITORIAL */}
        <div className="service-editorial__body">

            {/* ENCABEZADO */}
            <header className="service-editorial__header">

            <div className="service-editorial__heading">

                <span className="service-editorial__eyebrow">
                SERVICIOS
                </span>

                <h2>
                Diseño y
                <em> confección</em>
                </h2>

                <p className="service-editorial__subtitle">
                Del concepto a la prenda final.
                </p>

            </div>

            {/* IMAGEN SECUNDARIA */}
            <div className="service-editorial__detail-image">
                <img
                src={`${import.meta.env.BASE_URL}images/servicios/diseno02.png`}
                alt="Detalle artesanal de bordado sobre terciopelo"
                loading="lazy"
                />
            </div>

            </header>

            {/* DESCRIPCIÓN */}
            <div className="service-editorial__description">

            <p>
                Desarrollamos prendas personalizadas a partir de una idea,
                referencia o concepto. Acompañamos el proceso completo,
                cuidando la elección de materiales, la construcción y la
                confección, para lograr piezas únicas que respondan a las
                necesidades de cada proyecto.
            </p>

            </div>

            {/* PROCESO */}
            <div className="service-editorial__process">

            <div className="service-editorial__process-heading">
                <span>EL PROCESO</span>
                <div></div>
            </div>

            <div className="service-editorial__process-content">

                <ol>
                <li>Diseño personalizado</li>
                <li>Selección de materiales</li>
                <li>Desarrollo de siluetas</li>
                <li>Confección y ajustes</li>
                </ol>

                <div className="service-editorial__process-image">
                <img
                    src={`${import.meta.env.BASE_URL}images/servicios/diseno02.png`}
                    alt="Trabajo artesanal de confección"
                    loading="lazy"
                />
                </div>

            </div>

            </div>

            {/* COTIZACIÓN */}
            <div className="service-editorial__footer">

            <a href="#contacto" className="service-editorial__button">
                SOLICITAR INFORMACIÓN <span>→</span>
            </a>

            <div className="service-editorial__footer-line"></div>

            </div>

        </div>

        </section>

        {/* DETALLE 02 — VESTUARIO ESCÉNICO */}
        <section
        className="service-editorial service-editorial--reverse"
        id="vestuario-escenico"
        >

        {/* FOTOGRAFÍA PRINCIPAL */}
        <div className="service-editorial__visual">

            <img
            src={`${import.meta.env.BASE_URL}images/servicios/escenico01.png`}
            alt="Vestuario teatral de terciopelo verde petróleo con bordados dorados"
            className="service-editorial__main-image"
            loading="lazy"
            />

            <span className="service-editorial__brand">
            PRISCILLA<br />ATELIER
            </span>

            <span className="service-editorial__index">02</span>

        </div>

        {/* CONTENIDO EDITORIAL */}
        <div className="service-editorial__body">

            {/* ENCABEZADO */}
            <header className="service-editorial__header">

            <div className="service-editorial__heading">

                <span className="service-editorial__eyebrow">
                SERVICIOS
                </span>

                <h2>
                Vestuario para
                <em> teatro y espectáculos</em>
                </h2>

                <p className="service-editorial__subtitle">
                Personajes que cobran vida en escena.
                </p>

            </div>

            {/* IMAGEN SECUNDARIA */}
            <div className="service-editorial__detail-image">

                <img
                src={`${import.meta.env.BASE_URL}images/servicios/escenico.png`}
                alt="Detalle de vestuario escénico"
                loading="lazy"
                />

            </div>

            </header>

            {/* DESCRIPCIÓN */}
            <div className="service-editorial__description">

            <p>
                Creamos vestuario para teatro, espectáculos y producciones
                artísticas, desarrollando propuestas que acompañan la
                narrativa y la identidad de cada personaje. Cada creación
                considera el concepto de la producción, su universo visual
                y las necesidades particulares de la escena.
            </p>

            </div>

            {/* PROCESO */}
            <div className="service-editorial__process">

            <div className="service-editorial__process-heading">
                <span>EL PROCESO</span>
                <div></div>
            </div>

            <div className="service-editorial__process-content">

                <ol>
                <li>Conceptualización del personaje</li>
                <li>Diseño de vestuario escénico</li>
                <li>Selección de materiales</li>
                <li>Confección y acabados</li>
                </ol>

                <div className="service-editorial__process-image">

                <img
                    src={`${import.meta.env.BASE_URL}images/servicios/escenico02.png`}
                    alt="Máscara teatral artesanal y boceto de vestuario"
                    loading="lazy"
                />

                </div>

            </div>

            </div>

            {/* COTIZACIÓN */}
            <div className="service-editorial__footer">

            <a href="#contacto" className="service-editorial__button">
                SOLICITAR INFORMACIÓN <span>→</span>
            </a>

            <div className="service-editorial__footer-line"></div>

            </div>

        </div>

        </section>


        {/* DETALLE 03 — DRAG, COSPLAY Y PERSONAJES */}
        <section className="service-editorial service-editorial--cosplay" id="drag-cosplay">

            {/* FOTOGRAFÍA PRINCIPAL */}
            <div className="service-editorial__visual">

                <img
                src={`${import.meta.env.BASE_URL}images/servicios/cosplay01.png`}
                alt="Vestuario de fantasía con corona, pedrería y detalles ornamentales"
                className="service-editorial__main-image"
                loading="lazy"
                />

                <span className="service-editorial__brand">
                PRISCILLA<br />ATELIER
                </span>

                <span className="service-editorial__index">03</span>

            </div>

            {/* CONTENIDO EDITORIAL */}
            <div className="service-editorial__body">

                {/* ENCABEZADO */}
                <header className="service-editorial__header">

                <div className="service-editorial__heading">

                    <span className="service-editorial__eyebrow">
                    SERVICIOS
                    </span>

                    <h2>
                    Drag, cosplay y
                    <em> personajes</em>
                    </h2>

                    <p className="service-editorial__subtitle">
                    La imaginación toma forma.
                    </p>

                </div>

                {/* IMAGEN SECUNDARIA */}
                <div className="service-editorial__detail-image">

                    <img
                    src={`${import.meta.env.BASE_URL}images/servicios/cosplay02.png`}
                    alt="Boceto de vestuario fantástico y selección de materiales"
                    loading="lazy"
                    />

                </div>

                </header>

                {/* DESCRIPCIÓN */}
                <div className="service-editorial__description">

                <p>
                    Diseñamos y confeccionamos vestuario personalizado para
                    artistas drag, proyectos de cosplay y personajes de
                    creación propia. Exploramos formas, texturas, materiales
                    y elementos ornamentales para transformar cada concepto
                    en una propuesta visual única, cuidando la identidad y
                    personalidad de cada creación.
                </p>

                </div>

                {/* PROCESO */}
                <div className="service-editorial__process">

                <div className="service-editorial__process-heading">
                    <span>EL PROCESO</span>
                    <div></div>
                </div>

                <div className="service-editorial__process-content">

                    <ol>
                    <li>Exploración del concepto y personaje</li>
                    <li>Diseño y desarrollo visual</li>
                    <li>Selección de materiales y texturas</li>
                    <li>Confección y detalles especiales</li>
                    </ol>

                </div>

                </div>

                {/* COTIZACIÓN */}
                <div className="service-editorial__footer">

                <a href="#contacto" className="service-editorial__button">
                    SOLICITAR INFORMACIÓN <span>→</span>
                </a>

                <div className="service-editorial__footer-line"></div>

                </div>

            </div>

        </section>


        {/* DETALLE 04 — ACCESORIOS */}
        <section
        className="service-editorial service-editorial--reverse service-editorial--accessories"
        id="accesorios"
        >

            {/* FOTOGRAFÍA PRINCIPAL */}
            <div className="service-editorial__visual">

                <img
                src={`${import.meta.env.BASE_URL}images/servicios/accesorios01.png`}
                alt="Corona artesanal con pedrería dorada y piedras color ciruela"
                className="service-editorial__main-image"
                loading="lazy"
                />

                <span className="service-editorial__brand">
                PRISCILLA<br />ATELIER
                </span>

                <span className="service-editorial__index">04</span>

            </div>

            {/* CONTENIDO EDITORIAL */}
            <div className="service-editorial__body">

                {/* ENCABEZADO */}
                <header className="service-editorial__header">

                <div className="service-editorial__heading">

                    <span className="service-editorial__eyebrow">
                    SERVICIOS
                    </span>

                    <h2>
                    Accesorios y
                    <em> complementos</em>
                    </h2>

                    <p className="service-editorial__subtitle">
                    El detalle que completa la escena.
                    </p>

                </div>

                {/* IMAGEN SECUNDARIA */}
                <div className="service-editorial__detail-image">

                    <img
                    src={`${import.meta.env.BASE_URL}images/servicios/accesorios02.png`}
                    alt="Diseño de una corona ornamental con pedrería y detalles dorados"
                    loading="lazy"
                    />

                </div>

                </header>

                {/* DESCRIPCIÓN */}
                <div className="service-editorial__description">

                <p>
                    Diseñamos y elaboramos accesorios personalizados que
                    complementan y enriquecen cada propuesta de vestuario.
                    Desde tocados, coronas y máscaras, hasta piezas
                    estructurales y complementos especiales. Cada elemento
                    se desarrolla con atención a los materiales, los detalles
                    y los acabados, buscando aportar carácter y personalidad
                    a cada creación.
                </p>

                </div>

                {/* PROCESO */}
                <div className="service-editorial__process">

                <div className="service-editorial__process-heading">
                    <span>EL PROCESO</span>
                    <div></div>
                </div>

                <div className="service-editorial__process-content">

                    <ol>
                    <li>Diseño del accesorio o complemento</li>
                    <li>Selección de materiales y aplicaciones</li>
                    <li>Elaboración artesanal</li>
                    <li>Ajustes y acabados finales</li>
                    </ol>

                </div>

                </div>

                {/* COTIZACIÓN */}
                <div className="service-editorial__footer">

                <a href="#contacto" className="service-editorial__button">
                    SOLICITAR INFORMACIÓN <span>→</span>
                </a>

                <div className="service-editorial__footer-line"></div>

                </div>

            </div>

        </section>


        {/* CIERRE EDITORIAL */}
        <section className="services-closing">

        <div className="services-closing__content">

            <span className="services-closing__brand">
            PRISCILLA ATELIER
            </span>

            <div className="services-closing__divider"></div>

            <h2>
            Cada idea merece
            <br />
            convertirse en algo
            <em> extraordinario.</em>
            </h2>

            <p>
            Desarrollamos proyectos a medida, combinando diseño,
            técnica y una visión artística única.
            </p>

            <a href="#contacto" className="services-closing__link">
            HABLEMOS DE TU PROYECTO
            <span>→</span>
            </a>

        </div>

        <span className="services-closing__signature">
            DISEÑO · ARTE · EXPRESIÓN
        </span>

        </section>

        <Footer/>
    </main>
  );
}