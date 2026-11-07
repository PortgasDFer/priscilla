import Brand from './Brand.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <Brand />

      <span>CIUDAD DE MÉXICO · ENVÍOS A TODA LA REPÚBLICA</span>

      <a href="#inicio">VOLVER ARRIBA ↑</a>

      <small>
        © {new Date().getFullYear()} PRISCILLA ATELIER
      </small>

      <span className="footer__credit">
        Desarrollado por: <strong>AAF - Desarrollo Digital</strong>
      </span>
    </footer>
  );
}