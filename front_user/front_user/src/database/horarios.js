// Generar horarios disponibles basados en la hora actual
export const generarHorarios = () => {
  const ahora = new Date();
  const horaActual = ahora.getHours();
  const minutoActual = ahora.getMinutes();

  const horarios = [
    { hora: 14, minuto: 0 }, // 2:00 PM
    { hora: 16, minuto: 30 }, // 4:30 PM
    { hora: 19, minuto: 0 }, // 7:00 PM
    { hora: 21, minuto: 30 }, // 9:30 PM
    { hora: 23, minuto: 59 }, // 11:59 PM
  ];

  // Filtrar solo horarios que aún no hayan pasado
  return horarios.filter((h) => {
    const horaEnMinutos = h.hora * 60 + h.minuto;
    const ahora_minutos = horaActual * 60 + minutoActual;
    return horaEnMinutos > ahora_minutos + 60; // Al menos 1 hora de diferencia
  });
};

export const formatearHora = (hora, minuto) => {
  const h = String(hora).padStart(2, '0');
  const m = String(minuto).padStart(2, '0');
  return `${h}:${m}`;
};
