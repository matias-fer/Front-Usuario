import "./pages.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const promotions = [
  {
    id: 1,
    title: "Martes de Descuento",
    description: "50% de descuento en todas las entradas todos los martes",
    discount: "50%",
    emoji: "🎟️",
  },
  {
    id: 2,
    title: "Combo Familiar",
    description: "4 entradas + 4 palomitas grandes + 4 bebidas",
    discount: "$45.990",
    emoji: "👨‍👩‍👧‍👦",
  },
  {
    id: 3,
    title: "Horas Doradas",
    description: "Descuento en películas antes de las 6 PM",
    discount: "30%",
    emoji: "🌅",
  },
  {
    id: 4,
    title: "Miembro Vip",
    description: "Descuentos exclusivos para miembros de pago mensual",
    discount: "$5.990",
    emoji: "👑",
  },
];

function Promociones() {
  return (
    <>
      <Navbar />
      <main className="promociones">
        <section className="promociones__header">
          <h1>Promociones</h1>
          <p>Aprovecha nuestras mejores ofertas y descuentos exclusivos</p>
        </section>

        <section className="promociones__list">
          {promotions.map((promo) => (
            <article key={promo.id} className="promo-card">
              <div className="promo-card__emoji">{promo.emoji}</div>
              <div className="promo-card__content">
                <h3 className="promo-card__title">{promo.title}</h3>
                <p className="promo-card__description">{promo.description}</p>
              </div>
              <div className="promo-card__badge">{promo.discount}</div>
              <button className="promo-card__btn">Ver más</button>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Promociones;
