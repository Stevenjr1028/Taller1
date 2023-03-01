import React, { useState } from 'react';

const ImparesMenores=()=> {
  const [numero, setNumero] = useState(0);
  const [impares, setImpares] = useState([]);

  const handleNumeroChange = (event) => {
    setNumero(parseInt(event.target.value));
  };

  const imprimirImpares = () => {
    let impares = [];
    for (let i = 1; i < numero; i++) {
      if (i % 2 === 1) {
        impares.push(i);
      }
    }
    setImpares(impares);
  };

  return (
    <div>
        <h2> Numeros Impares Menores </h2>
      <label>Ingrese un número:</label>
      <input type="number" value={numero} onChange={handleNumeroChange} />
      <br />
      <button onClick={imprimirImpares}>Imprimir impares menores</button>
      <br />
      {impares.map((impar) => (
        <div>{impar}</div>
      ))}
    </div>
  );
}

export default ImparesMenores;