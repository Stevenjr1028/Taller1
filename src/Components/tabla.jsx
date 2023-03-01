import React, { useState } from 'react';

const Tabla=()=> {
  const [numFilas, setNumFilas] = useState('');
  const [numColumnas, setNumColumnas] = useState('');

  const handleNumFilasChange = (event) => {
    setNumFilas(parseInt(event.target.value));
  };

  const handleNumColumnasChange = (event) => {
    setNumColumnas(parseInt(event.target.value));
  };

  const generarTabla = () => {
    let tabla = [];

    for (let i = 0; i < numColumnas; i++) {
      let columna = [];

      for (let j = 0; j < numFilas; j++) {
        columna.push(<td>{i + 1}, {j + 1}</td>);
      }

      tabla.push(<tr>{columna}</tr>);
    }

    return tabla;
  };

  return (
    <div>
      <label>Ingrese el número de Columnas:</label>
      <input type="number" value={numColumnas} onChange={handleNumColumnasChange} />
      <br />
      <label>Ingrese el número de Filas:</label>
      <input type="number" value={numFilas} onChange={handleNumFilasChange} />
      <br />
      <button onClick={generarTabla}>Generar tabla</button>
      <br />
      {numFilas && numColumnas ? (
        <table>
          {generarTabla()}
        </table>
      ) : null}
    </div>
  );
}

export default Tabla;