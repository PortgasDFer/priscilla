import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Menu, X} from 'lucide-react';

const whatsappNumber = ''; // Configurar número oficial: código de país + número, sin + ni espacios.
const message = encodeURIComponent('Hola, me gustaría solicitar una cotización para un proyecto de vestuario.');
const contactUrl = whatsappNumber ? `https://wa.me/${whatsappNumber}?text=${message}` : '#contacto';

function Brand() {
  return (
    <a
      className="brand"
      href="#inicio"
      aria-label="PRISCILLA ATELIER, inicio"
    >
      <img
        className="brand__logo"
        src={`${import.meta.env.BASE_URL}images/logos/Color_Horizontal.png`}
        alt="PRISCILLA ATELIER"
      />
    </a>
  );
}

function HeroCollage() {
  const base = `${import.meta.env.BASE_URL}images/hero/`;

  return (
    <div className="hero-photo hero-collage">

      {/* Fotografía principal */}
      <img
        className="hero-collage__main"
        src={`${base}priscilla-editorial.jpg`}
        alt="Vestuario escénico negro de PRISCILLA ATELIER"
      />

      {/* Detalle del sombrero */}
      <img
        className="hero-collage__detail hero-collage__hat"
        src={`${base}priscilla-hero-detalle-sombrero.png`}
        alt="Detalle del sombrero escultórico"
      />

      {/* Detalle de la falda */}
      <img
        className="hero-collage__detail hero-collage__skirt"
        src={`${base}priscilla-hero-detalle-falda.png`}
        alt="Detalle de la falda de lentejuelas"
      />

    </div>
  );
}

function PhotoSpace({ src, alt, label, className = '' }) {
  return (
    <div className={`photo-space ${className}`}>
      {src ? (
        <img
          src={`${import.meta.env.BASE_URL}${src.replace(/^\//, '')}`}
          alt={alt || label || 'PRISCILLA ATELIER'}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <>
          <span>{label}</span>
          <small>FOTOGRAFÍA REAL DEL ATELIER POR INCORPORAR</small>
        </>
      )}
    </div>
  );
}

function DressCollage() {
  const base = `${import.meta.env.BASE_URL}images/home/`;

  return (
    <div className="dress-collage">

      {/* Fotografía principal */}
      <img
        className="dress-collage__main"
        src={`${base}vestido-vista-editorial.png`}
        alt="Vestido negro de gala con aplicaciones florales"
      />

      {/* Detalle del bordado */}
      <img
        className="dress-collage__detail dress-collage__detail--flowers"
        src={`${base}vestido-detalle-bordado.png`}
        alt="Detalle de bordados florales y pedrería"
      />

      {/* Detalle del corsé */}
      <img
        className="dress-collage__detail dress-collage__detail--bodice"
        src={`${base}vestido-detalle-corse.png`}
        alt="Detalle del corsé negro con aplicaciones artesanales"
      />

      <span className="dress-collage__label">PA — 001</span>

      <span className="dress-collage__caption">
        VESTUARIO ESCÉNICO
      </span>

      <span className="dress-collage__detail-label">
        DETALLE ARTESANAL
      </span>

    </div>
  );
}

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href="#contacto"
      aria-label="Hablemos de tu proyecto"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.87 11.87 0 0 0 12.04 0C5.46 0 .11 5.35.11 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.26-1.64a11.9 11.9 0 0 0 5.77 1.47h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.19-3.45-8.42ZM12.04 21.8a9.88 9.88 0 0 1-5.03-1.37l-.36-.21-3.72.98.99-3.63-.24-.37a9.85 9.85 0 0 1-1.51-5.27c0-5.46 4.45-9.91 9.92-9.91 2.65 0 5.14 1.03 7.01 2.91a9.86 9.86 0 0 1 2.9 7.01c0 5.46-4.45 9.91-9.92 9.91Zm5.44-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/>
      </svg>
      <span>HABLEMOS DE TU PROYECTO</span>
    </a>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <main id="inicio">
    <header className="header">
      <Brand />
      <button className="menu-button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav id="navigation" className={open ? 'nav nav--open' : 'nav'} aria-label="Navegación principal">
        <a href="#atelier" onClick={close}>EL ATELIER</a><a href="#proyectos" onClick={close}>PROYECTOS</a><a href="#servicios" onClick={close}>SERVICIOS</a><a className="nav__cta" href={contactUrl} onClick={close}>COTIZAR <ArrowUpRight size={14}/></a>
      </nav>
    </header>

    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__heading">
          <p className="eyebrow">
            DISEÑO Y CONFECCIÓN DE VESTUARIO - CDMX
          </p>
          <h1 id="hero-title">Vestir lo<br/><em>extraordinario.</em></h1>
          <p className="hero__lead">Diseñamos y confeccionamos prendas, vestuarios artísticos y accesorios a medida. Desarrollamos piezas personalizadas para artistas, proyectos creativos y clientes que buscan transformar sus ideas en creaciones únicas.</p>
        </div>
        <div className="hero__visual">
        <HeroCollage />
        <a className="discover" href="#proyectos">DESCUBRIR PROYECTOS <ArrowDownRight size={18}/></a>
      </div>
      <div className="hero__bottom"><p>Diseñamos piezas que expresan <br/>lo extraordinario.</p><a href={contactUrl}>CUÉNTANOS TU IDEA <ArrowUpRight size={15}/></a></div>
    </section>

    <section className="atelier dark" id="atelier">
      <div className="atelier__body">
        <h2>No hacemos<br/>lo ordinario.</h2>
        <div>
          <p>Diseñamos y confeccionamos vestuario artístico, prendas y accesorios personalizados. Acompañamos cada proyecto desde la idea inicial hasta su materialización.</p>
          <p>Para el escenario, la cámara, la pasarela o para quienes buscan expresar algo único a través de lo que visten.</p>
        </div>
      </div>
      <div className="rule">
        <span>DISEÑO CON INTENCIÓN</span>
        <span>CREACIÓN PERSONALIZADA</span>
      </div>
    </section>

    <section className="portfolio" id="proyectos">
      <div className="portfolio__head">
        <h2>El trabajo<br/><em>habla.</em></h2>
        <p>Cada creación nace de una idea, toma forma a través del diseño y cobra vida en cada detalle. Una selección de proyectos que refleja el universo creativo de PRISCILLA ATELIER.</p>
      </div>
      
      <div className="portfolio__grid">
        <article>
          <DressCollage />
          <h3>Piezas para tomar la escena</h3>Diseño y confección de vestuario artístico donde el volumen,la textura y los detalles dan vida a cada creación.
        </article>
        <article className="offset">
          <PhotoSpace src="/images/home/priscilla_atelier_escenico_rojo.png"  alt="Vestuario rojo para performance" label="02 / DRAG & PERFORMANCE" className="project-photo project-photo--two"/><h3>Una expresión sin límites</h3>Creaciones escénicas que exploran siluetas, materiales y detalles para llevar cada concepto más allá de lo convencional.
        </article>
        <article className="detail">
          <PhotoSpace src="/images/home/priscilla_atelier_accesorio.png"  alt="Accesorios de diseño para teatro" label="03 / DISEÑO Y ACCESORIOS" className="project-photo project-photo--three"/><h3>El detalle también transforma</h3>Accesorios y piezas especiales desarrollados mediante técnicas de confección, intervención textil y trabajo artesanal.
        </article>
      </div>
    </section>

    <section className="services teal" id="servicios"><p className="label">03 — LO QUE PODEMOS CREAR</p><div className="services__head"><h2>De la idea<br/>a la <em>pieza.</em></h2><p>Un proceso personalizado para desarrollar el vestuario que imaginas.</p></div><ol>
      <li><span>01</span><div><h3>Diseño y confección</h3><p>Del concepto y la elección de materiales a la elaboración de la prenda.</p></div><ArrowUpRight/></li>
      <li><span>02</span><div><h3>Vestuario para teatro y espectáculos</h3><p>Propuestas para producciones, escenarios y proyectos artísticos.</p></div><ArrowUpRight/></li>
      <li><span>03</span><div><h3>Drag, cosplay y personajes</h3><p>Vestuario personalizado para dar forma a una identidad escénica.</p></div><ArrowUpRight/></li>
      <li><span>04</span><div><h3>Accesorios</h3><p>Tocados, sombreros, antifaces, cinturones, alas y piezas complementarias.</p></div><ArrowUpRight/></li>
    </ol></section>

    <section className="contact" id="contacto"><p className="label">04 — TU IDEA ES EL INICIO</p><h2>¿Qué tienes<br/>en <em>mente?</em></h2><div className="contact__bottom"><p>Cuéntanos qué imaginas. Hablemos de tu proyecto y preparemos una cotización personalizada.</p><a href={contactUrl}>INICIAR UN PROYECTO <ArrowUpRight size={18}/></a></div></section>
    <footer className="footer">  
      <Brand/>
      <span>CIUDAD DE MÉXICO · ENVÍOS A TODA LA REPÚBLICA</span>
      <a href="#inicio">VOLVER ARRIBA ↑</a>
      <small>
        © {new Date().getFullYear()} PRISCILLA ATELIER
      </small>
      <span className="footer__credit">
        Desarrollador por: <strong>AAF - Desarrollo Digital</strong>
      </span>
    </footer>
    <WhatsAppButton />
  </main>;
}