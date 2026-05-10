import "./pages.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const snacks = [
  {
    id: 1,
    name: "Combo Clásico",
    price: "$13.990",
    items: "Palomitas + Bebida",
    emoji: "🍿",
  },
  {
    id: 2,
    name: "Combo Premium",
    price: "$18.990",
    items: "Palomitas XL + Bebida + Dulce",
    emoji: "🎉",
  },
  {
    id: 3,
    name: "Palomitas",
    price: "$5.990",
    items: "Pequeñas / Medianas / Grandes",
    emoji: "🍿",
  },
  {
    id: 4,
    name: "Bebidas",
    price: "$3.990",
    items: "Refresco / Agua / Jugo",
    emoji: "🥤",
  },
  {
    id: 5,
    name: "Dulces",
    price: "$4.990",
    items: "Caramelos / Chocolates",
    emoji: "🍬",
  },
  {
    id: 6,
    name: "Snacks Salados",
    price: "$6.990",
    items: "Hot dog / Nachos",
    emoji: "🌭",
  },
];

function Confiteria() {
  return (
    <>
      <Navbar />
      <main className="confiteria">
        <section className="confiteria__header">
          <h1>Confitería</h1>
          <p>Disfruta de deliciosas opciones mientras disfrutas tu película</p>
        </section>

        <section className="confiteria__grid">
          {snacks.map((snack) => (
            <article key={snack.id} className="snack-card">
              <div className="snack-card__emoji">{snack.emoji}</div>
              <h3 className="snack-card__name">{snack.name}</h3>
              <p className="snack-card__items">{snack.items}</p>
              <div className="snack-card__footer">
                <span className="snack-card__price">{snack.price}</span>
                <button className="snack-card__btn">Añadir</button>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Confiteria;
