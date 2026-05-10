import { Link, useNavigate } from 'react-router-dom';
import './pages.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useAuth } from '../contexts/AuthContext';

function Login() {
  const navigate = useNavigate();
  const { markAsRegistered } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    markAsRegistered({
      email: formData.get('email'),
    });
    navigate('/');
  };

  return (
    <>
      <Navbar />
      <main className="auth-page">
        <section className="auth-card">
          <h1>Iniciar sesión</h1>
          <p>Ingresa para poder comprar entradas y acceder a todas las funciones.</p>
          <form className="auth-form" onSubmit={handleSubmit}>
            <input name="email" type="email" placeholder="Correo electrónico" aria-label="Correo electrónico" required />
            <input name="password" type="password" placeholder="Contraseña" aria-label="Contraseña" required />
            <button type="submit">Entrar</button>
          </form>
          <p className="auth-switch">
            ¿No tienes cuenta? <Link to="/registrarse">Registrarse</Link>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Login;