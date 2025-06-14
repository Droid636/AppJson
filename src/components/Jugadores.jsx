import React from 'react';
import '../components/jugadores.css';
import jugadores from '../data.json'; // Importa el array

const Jugadores = () => {
  return (
    <div className="jugadores-container">
      {jugadores.map((jugador) => (
        <div className="jugador-card" key={jugador.index}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png" alt={jugador.nombreJugador} />
          <h2>{jugador.nombreJugador}</h2>
          <p><strong>Nacionalidad:</strong> {jugador.nacionalidades.nacionalidad} / {jugador.nacionalidades.nacionalidad2}</p>
          <p><strong>Edad:</strong> {jugador.edad}</p>
          <p><strong>Club:</strong> {jugador.club}</p>
          <p><strong>Valor de mercado:</strong> {jugador.valorDelMercado}</p>
          <p><strong>Última revisión:</strong> {jugador.ultimaRevision}</p>
        </div>
      ))}
    </div>
  );
};

export default Jugadores;
