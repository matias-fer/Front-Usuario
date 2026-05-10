import "./pages.css";
import Navbar from "../components/navbar";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const movies = [
  {
    id: 1,
    title: "Michael",
    genre: "Ciencia Ficción",
    price: 6.990,
    imageSrc: "/Michael.jpg",
  },
  {
    id: 2,
    title: "El diablo viste a la moda",
    genre: "Drama",
    price: 7.990,
    imageSrc: "/ElDiabloVisteALaModa.jpg",
  },

];

const featuredSlides = [
  {
    id: 1,
    imageSrc: "/DetectiveOvejaCarrusel.webp",
    background: "linear-gradient(115deg, #0f5bd7 0%, #38bdf8 20%)",
  },
  {
    id: 2,
    imageSrc: "/MichaelCarrusel.webp",
    background: "linear-gradient(115deg, #0f5bd7 0%, #38bdf8 20%)",
  },
];


function HomeUser() {
  const { isRegistered } = useAuth();

  return (
    <>
      <Navbar />
      <main className="home-user">
        <section className="home-user__header">
          <h1>Cartelera</h1>
          <p>Descubre todas las películas disponibles en Cine Flow</p>
        </section>

        {!isRegistered ? (
          <section className="home-user__access-note">
            <p>Para comprar entradas primero debes iniciar sesión o registrarte.</p>
            <div className="home-user__access-actions">
              <Link to="/iniciar-sesion" className="home-user__access-link">Iniciar sesión</Link>
              <Link to="/registrarse" className="home-user__access-link home-user__access-link--primary">Registrarse</Link>
            </div>
          </section>
        ) : null}

        <Carousel slides={featuredSlides} />

        <section className="home-user__grid">
          {movies.map((movie) => (
            <article key={movie.id} className="movie-card">
              <div className="movie-card__poster">
                {movie.imageSrc ? (
                  <img src={movie.imageSrc} alt={movie.title} className="movie-card__image" />
                ) : (
                  <span>Imagen no disponible</span>
                )}
              </div>
              <h3 className="movie-card__title">{movie.title}</h3>
              <p className="movie-card__genre">{movie.genre}</p>
              <div className="movie-card__footer">
                <span className="movie-card__rating">${movie.price.toFixed(3)}</span>
                <button className="movie-card__btn" disabled={!isRegistered}>
                  {isRegistered ? 'Comprar entrada' : 'Registrate para comprar'}
                </button>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default HomeUser;
