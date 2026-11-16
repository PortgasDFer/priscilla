import Brand from './Brand.jsx';

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer__top">
        <Brand />

        <a href="#inicio" className="footer__back">
          VOLVER ARRIBA ↑
        </a>
      </div>

      <div className="footer__info">

        <span className="footer__location">
          CIUDAD DE MÉXICO · ENVÍOS A TODA LA REPÚBLICA
        </span>

        <span className="footer__credit">
          Desarrollado por: <strong>AAF - Desarrollo Digital</strong>
        </span>

      </div>

      <div className="footer__bottom">
        <small>
          © {new Date().getFullYear()} PRISCILLA ATELIER
        </small>
      </div>

    </footer>
  );
}