import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Brand() {
  return (
    <a
      className="brand"
      href={`${import.meta.env.BASE_URL}`}
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

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const base = import.meta.env.BASE_URL;

  return (
    <header className="header">
      <Brand />

      <button
        className="menu-button"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        aria-controls="navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>

      <nav
        id="navigation"
        className={open ? 'nav nav--open' : 'nav'}
        aria-label="Navegación principal"
      >
        <Link to="/nosotros" onClick={close}>NOSOTROS</Link>
        <Link to="/proyectos" onClick={close}>PROYECTOS</Link>
        <a href={`${base}#servicios`} onClick={close}>SERVICIOS</a>
        <a
          className="nav__cta"
          href={`${base}#contacto`}
          onClick={close}
        >
          COTIZAR <ArrowUpRight size={14} />
        </a>
      </nav>
    </header>
  );
}