import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './pages.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useAuth } from '../contexts/AuthContext';

function Register() {
  const navigate = useNavigate();
  const { markAsRegistered } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (name.length < 4) {
      setError('El nombre debe tener al menos 4 caracteres');
      return;
    }
    
    if (email !== emailConfirm) {
      setError('Los correos electrónicos no coinciden');
      return;
    }
    
    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres');
      return;
    }

    if (password !== passwordConfirm) {
      setError('Las contraseñas no coinciden');
      return;
    }

    markAsRegistered({
      name: name,
      email: email,
      password: password,
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
            <input 
              name="name" 
              type="text" 
              placeholder="Nombre completo (mínimo 4 caracteres)" 
              aria-label="Nombre completo" 
              required 
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError('');
              }}
            />
            <input 
              name="email" 
              type="email" 
              placeholder="Correo electrónico" 
              aria-label="Correo electrónico" 
              required 
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
            />
            <input 
              name="emailConfirm" 
              type="email" 
              placeholder="Confirmar correo electrónico" 
              aria-label="Confirmar correo electrónico" 
              required 
              value={emailConfirm}
              onChange={(e) => {
                setEmailConfirm(e.target.value);
                setError('');
              }}
            />
            <input 
              name="password" 
              type="password" 
              placeholder="Contraseña (mínimo 8 caracteres)" 
              aria-label="Contraseña" 
              required 
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
            />
            <input 
              name="passwordConfirm" 
              type="password" 
              placeholder="Confirmar contraseña" 
              aria-label="Confirmar contraseña" 
              required 
              value={passwordConfirm}
              onChange={(e) => {
                setPasswordConfirm(e.target.value);
                setError('');
              }}
            />
            {error && <p className="auth-error">{error}</p>}
            <button type="submit" disabled={name.length < 4 || password.length < 8 || email !== emailConfirm || password !== passwordConfirm}>
              Crear cuenta
            </button>
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