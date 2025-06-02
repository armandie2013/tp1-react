import React, { useState } from 'react';

const Main = () => {
  const [mensajeMostrado, setMensajeMostrado] = useState(false);

  const manejarClick = () => {
    setMensajeMostrado(true);
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-white px-4"
      style={{ backgroundImage: "url('/fondo-superheroes-4.jpg')" }}
    >
      <button
        onClick={manejarClick}
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg text-lg mb-4"
      >
        Presioname
      </button>

      {mensajeMostrado && (
        <p className="bg-black/60 p-4 rounded-lg text-lg md:text-xl">
          Gracias por presionarme, React recién empieza!
        </p>
      )}
    </div>
  );
};

export default Main;