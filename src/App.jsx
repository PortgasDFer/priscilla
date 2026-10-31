import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Menu, X } from 'lucide-react';

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

function PhotoSpace({ src, label, className = '' }) {
  return (
    <div className={`photo-space ${className}`}>
      <img
        src={`${import.meta.env.BASE_URL}${src.replace(/^\//, '')}`}
        alt={label || 'PRISCILLA ATELIER'}
        width="1200"
        height="1500"
        loading="eager"
        decoding="async"
        onError={e => {
          e.currentTarget.style.display = 'none';
        }}
      />

      {!src && (
        <>
          <span>{label}</span>
          <small>FOTOGRAFÍA REAL DEL ATELIER POR INCORPORAR</small>
        </>
      )}
    </div>
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
        <PhotoSpace src="images/hero/priscilla-editorial.jpg" label="PA — 001" className="hero-photo"/>
        <a className="discover" href="#proyectos">DESCUBRIR PROYECTOS <ArrowDownRight size={18}/></a>
      </div>
      <div className="hero__bottom"><p>Diseñamos piezas que expresan <br/>lo extraordinario.</p><a href={contactUrl}>CUÉNTANOS TU IDEA <ArrowUpRight size={15}/></a></div>
    </section>

    <section className="atelier dark" id="atelier">
      <p className="label">01 — EL UNIVERSO DEL ATELIER</p>
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

    <section className="portfolio" id="proyectos"><div className="portfolio__head"><p className="label">02 — SELECCIÓN DE TRABAJOS</p><h2>El trabajo<br/><em>habla.</em></h2><p>Cada pieza parte de una idea distinta. Aquí mostraremos proyectos reales del atelier.</p></div><div className="portfolio__grid">
      <article><PhotoSpace src="/images/proyecto-01.webp" label="01 / VESTUARIO ESCÉNICO" className="project-photo project-photo--one"/><h3>Piezas para tomar la escena</h3><small>Volumen, textura y presencia.</small></article>
      <article className="offset"><PhotoSpace src="/images/proyecto-02.webp" label="02 / DRAG & PERFORMANCE" className="project-photo project-photo--two"/><h3>Una expresión sin límites</h3><small>Siluetas creadas alrededor de una idea.</small></article>
      <article className="detail"><PhotoSpace src="/images/proyecto-03.webp" label="03 / DISEÑO Y ACCESORIOS" className="project-photo project-photo--three"/><h3>El detalle también transforma</h3><small>Accesorios que completan el concepto.</small></article>
    </div><p className="note">Los espacios de imagen son provisionales. Se sustituirán por fotografías reales y autorizadas antes de publicar.</p></section>

    <section className="services teal" id="servicios"><p className="label">03 — LO QUE PODEMOS CREAR</p><div className="services__head"><h2>De la idea<br/>a la <em>pieza.</em></h2><p>Un proceso personalizado para desarrollar el vestuario que imaginas.</p></div><ol>
      <li><span>01</span><div><h3>Diseño y confección</h3><p>Del concepto y la elección de materiales a la elaboración de la prenda.</p></div><ArrowUpRight/></li>
      <li><span>02</span><div><h3>Vestuario para teatro y espectáculos</h3><p>Propuestas para producciones, escenarios y proyectos artísticos.</p></div><ArrowUpRight/></li>
      <li><span>03</span><div><h3>Drag, cosplay y personajes</h3><p>Vestuario personalizado para dar forma a una identidad escénica.</p></div><ArrowUpRight/></li>
      <li><span>04</span><div><h3>Accesorios</h3><p>Tocados, sombreros, antifaces, cinturones, alas y piezas complementarias.</p></div><ArrowUpRight/></li>
    </ol></section>

    <section className="contact" id="contacto"><p className="label">04 — TU IDEA ES EL INICIO</p><h2>¿Qué tienes<br/>en <em>mente?</em></h2><div className="contact__bottom"><p>Cuéntanos qué imaginas. Hablemos de tu proyecto y preparemos una cotización personalizada.</p><a href={contactUrl}>INICIAR UN PROYECTO <ArrowUpRight size={18}/></a></div></section>
    <footer className="footer"><Brand/><span>CIUDAD DE MÉXICO · ENVÍOS A TODA LA REPÚBLICA</span><a href="#inicio">VOLVER ARRIBA ↑</a><small>© {new Date().getFullYear()} PRISCILLA ATELIER</small></footer>
  </main>;
}