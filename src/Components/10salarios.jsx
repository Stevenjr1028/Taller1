import React, { useState } from 'react';

const AumentoSalario=()=> {
  const [salarios, setSalarios] = useState(Array(10).fill(0));
  const [salariosConAumento, setSalariosConAumento] = useState([]);

  const handleSalarioChange = (event, index) => {
    let nuevosSalarios = [...salarios];
    nuevosSalarios[index] = parseFloat(event.target.value);
    setSalarios(nuevosSalarios);
  };

  const imprimirSalariosConAumento = () => {
    let tieneDiezSalarios = salarios.every((salario) => salario !== 0);
    if (tieneDiezSalarios) {
      let salariosConAumento = salarios.map((salario) =>
        (salario * 1.08).toFixed(2)
      );
      setSalariosConAumento(salariosConAumento);
    } else {
      alert('Debe ingresar exactamente 10 salarios.');
    }
  };

  return (
    <div>
         <h2>Aumento de Salarios en un 8%</h2>
      {[...Array(10)].map((_, index) => (
        <div key={index}>
          <label>Ingrese salario {index + 1}:</label>
          <input
            type="number"
            value={salarios[index]}
            onChange={(event) => handleSalarioChange(event, index)}
          />
        </div>
      ))}
      <br />
      <button onClick={imprimirSalariosConAumento}>
        Imprimir salarios con aumento
      </button>
      <br />
      {salariosConAumento.length > 0 ? (
        <ul>
          {salariosConAumento.map((salario, index) => (
            <li key={index}>
              Salario {index + 1}: {salario}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default AumentoSalario;