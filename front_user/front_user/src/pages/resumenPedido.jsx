import "./pages.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useAuth } from '../contexts/AuthContext';
import { useCarrito } from '../contexts/carritoContext';

function ResumenPedido() {
  const navigate = useNavigate();
  const { isRegistered, getDisplayName } = useAuth();
  const { cartItems, obtenerPrecioTotal, vaciarCarrito } = useCarrito();
  const [aceptoTerminos, setAceptoTerminos] = useState(false);
  const [confirmando, setConfirmando] = useState(false);

  if (!isRegistered) {
    return (
      <>
        <Navbar />
        <main className="resumen-page">
          <div className="resumen-error">
            <p>Debes iniciar sesión para completar tu pedido</p>
            <button onClick={() => navigate('/iniciar-sesion')}>Ir a Login</button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (cartItems.length === 0) {
    return (
      <>
        <Navbar />
        <main className="resumen-page">
          <div className="resumen-empty">
            <p>Tu carrito está vacío</p>
            <button onClick={() => navigate('/')}>Continuar comprando</button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const totalPrice = obtenerPrecioTotal();

  const handleConfirmarPedido = () => {
    if (!aceptoTerminos) {
      alert('Debes aceptar los términos y condiciones');
      return;
    }

    setConfirmando(true);

    // Simular procesamiento de pago
    setTimeout(() => {
      const pedido = {
        id: Date.now(),
        usuario: getDisplayName(),
        items: cartItems,
        total: totalPrice,
        fecha: new Date().toLocaleDateString('es-ES'),
        hora: new Date().toLocaleTimeString('es-ES'),
        estado: 'Confirmado'
      };

      // Guardar pedido en localStorage
      const pedidos = JSON.parse(localStorage.getItem('cine-flow-pedidos') || '[]');
      pedidos.push(pedido);
      localStorage.setItem('cine-flow-pedidos', JSON.stringify(pedidos));

      // Vaciar carrito
      vaciarCarrito();

      // Redirigir a confirmación
      navigate('/pedido-confirmado', { state: { pedido } });
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <main className="resumen-page">
        <div className="resumen-container">
          <h1>Resumen de Pedido</h1>

          <div className="resumen-content">
            {/* Detalles del cliente */}
            <section className="resumen-cliente">
              <h2>Detalles del Cliente</h2>
              <div className="cliente-info">
                <p><strong>Usuario:</strong> {getDisplayName()}</p>
                <p><strong>Fecha:</strong> {new Date().toLocaleDateString('es-ES')}</p>
                <p><strong>Hora:</strong> {new Date().toLocaleTimeString('es-ES')}</p>
              </div>
            </section>

            {/* Items del pedido */}
            <section className="resumen-items">
              <h2>Items del Pedido</h2>
              <div className="resumen-items-list">
                {cartItems.map((item) => (
                  <div key={item.id} className="resumen-item-row">
                    <div className="resumen-item-img">
                      <img src={item.imageSrc} alt={item.title} />
                    </div>
                    <div className="resumen-item-details">
                      <h3>{item.title}</h3>
                      <p className="resumen-item-genre">{item.genre || item.description}</p>
                    </div>
                    <div className="resumen-item-cantidad">
                      <span>{item.cantidad} x</span>
                    </div>
                    <div className="resumen-item-precio">
                      <span>${(item.price * item.cantidad).toFixed(3)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Resumen financiero */}
            <section className="resumen-total">
              <div className="total-row">
                <span>Subtotal:</span>
                <span>${totalPrice.toFixed(3)}</span>
              </div>
              <div className="total-row">
                <span>Impuestos (0%):</span>
                <span>$0.000</span>
              </div>
              <div className="total-row final">
                <strong>Total:</strong>
                <strong>${totalPrice.toFixed(3)}</strong>
              </div>
            </section>

            {/* Términos y condiciones */}
            <section className="resumen-terminos">
              <label className="terminos-checkbox">
                <input
                  type="checkbox"
                  checked={aceptoTerminos}
                  onChange={(e) => setAceptoTerminos(e.target.checked)}
                  disabled={confirmando}
                />
                <span>
                  Acepto los términos y condiciones de compra y la política de privacidad
                </span>
              </label>
            </section>

            {/* Botones de acción */}
            <div className="resumen-acciones">
              <button
                className="resumen-volver-btn"
                onClick={() => navigate('/carrito')}
                disabled={confirmando}
              >
                Volver al carrito
              </button>
              <button
                className="resumen-confirmar-btn"
                onClick={handleConfirmarPedido}
                disabled={!aceptoTerminos || confirmando}
              >
                {confirmando ? 'Procesando...' : 'Confirmar Pedido'}
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ResumenPedido;
