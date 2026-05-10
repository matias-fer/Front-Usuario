import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomeUser from './pages/homeUser';
import Confiteria from './pages/confiteria';
import Promociones from './pages/promociones';
import CineFlow from './pages/cineFlow';
import Login from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app-shell">
          <Routes>
            <Route path="/" element={<HomeUser />} />
            <Route path="/confiteria" element={<Confiteria />} />
            <Route path="/promociones" element={<Promociones />} />
            <Route path="/cine-flow" element={<CineFlow />} />
            <Route path="/iniciar-sesion" element={<Login />} />
            <Route path="/registrarse" element={<Register />} />
            <Route path="/perfil" element={<Profile />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
