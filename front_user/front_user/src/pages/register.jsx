import { Link, useNavigate } from 'react-router-dom';
import './pages.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useAuth } from '../contexts/AuthContext';

function Register() {
  const navigate = useNavigate();
  const { markAsRegistered } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    markAsRegistered({
      name: formData.get('name'),
      email: formData.get('email'),
    });
    navigate('/');
  };

  return (
    <>
      <Navbar />
      <main className="auth-page">
        <section className="auth-card">
          <h1>Registrarse</h1>
          <p>Crea tu cuenta para comprar entradas y guardar tu acceso.</p>
          <form className="auth-form" onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Nombre completo" aria-label="Nombre completo" required />
            <input name="email" type="email" placeholder="Correo electrónico" aria-label="Correo electrónico" required />
            <input name="password" type="password" placeholder="Contraseña" aria-label="Contraseña" required />
            <button type="submit">Crear cuenta</button>
          </form>
          <p className="auth-switch">
            ¿Ya tienes cuenta? <Link to="/iniciar-sesion">Iniciar sesión</Link>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Register;