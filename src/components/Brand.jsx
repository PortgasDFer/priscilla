export default function Brand() {
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