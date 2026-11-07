import Header from './components/Header.jsx';

export default function Nosotros() {
  return (
    <main className="nosotros">
     

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
    </main>
  );
}