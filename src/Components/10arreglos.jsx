import React, { useState } from 'react';

function DivisionArreglo() {
  const [numeros, setNumeros] = useState(Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)));
  const [indice, setIndice] = useState('');
  const [resultados, setResultados] = useState([]);

  const handleIndiceChange = (event) => {
    setIndice(parseInt(event.target.value));
  };

  const dividirArreglo = () => {
    if (isNaN(indice) || indice < 1 || indice > 10) {
      alert('Debe ingresar un índice válido.');
    } else {
      let divisor = numeros[indice - 1];
      let resultados = numeros.map((numero) => numero / divisor);
      setResultados(resultados);
    }
  };

  return (
    <div>
      <h2>Arreglo de números aleatorios:</h2>
      {numeros.join(', ')}
      <br />
      <br />
      <label>Ingrese un índice entre 1 y 10:</label>
      <input type="number" value={indice} onChange={handleIndiceChange} />
      <br />
      <button onClick={dividirArreglo}>Dividir arreglo</button>
      <br />
      {resultados.length > 0 ? (
        <div>
          <h2>Arreglo resultante:</h2>
          {resultados.join(', ')}
        </div>
      ) : null}
    </div>
  );
}

export default DivisionArreglo;