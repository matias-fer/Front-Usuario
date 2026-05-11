import './horariosModal.css';
import { formatearHora } from '../database/horarios';

function HorariosModal({ pelicula, onClose, onSelectHorario }) {
  const horarios = pelicula.horarios || [];

  if (horarios.length === 0) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button type="button" className="modal-close" onClick={onClose}>✕</button>
          <h2>Horarios No Disponibles</h2>
          <p>No hay horarios disponibles para hoy. Intenta mañana.</p>
          <button type="button" className="modal-btn-ok" onClick={onClose}>Entendido</button>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onClose}>✕</button>
        
        <div className="modal-header">
          <div className="modal-banner">
            <img src={pelicula.bannerSrc || pelicula.imageSrc} alt={pelicula.title} />
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-pelicula-info">
            <div className="modal-pelicula-copy">
              <h2>{pelicula.title}</h2>
              <p className="modal-pelicula-genre">{pelicula.genre}</p>
              <p className="modal-pelicula-precio">${pelicula.price.toFixed(3)}</p>
            </div>
            <p className="modal-pelicula-description">{pelicula.description}</p>
            <div className="modal-pelicula-actors">
              <h3>Actores principales</h3>
              <div className="modal-actors-list">
                {pelicula.actors?.map((actor) => (
                  <span key={actor} className="modal-actor-chip">{actor}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="modal-horarios">
            <h3>Selecciona un horario:</h3>
            <div className="horarios-grid">
              {horarios.map((horario, index) => (
                <button
                  key={index}
                  type="button"
                  className="horario-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onSelectHorario(horario);
                  }}
                >
                  {formatearHora(horario.hora, horario.minuto)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button type="button" className="modal-btn-cancel" onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
}

export default HorariosModal;
