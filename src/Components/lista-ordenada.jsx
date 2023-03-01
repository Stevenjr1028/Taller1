import React, { useState } from 'react';

const NumberList=()=> {
  const [numbers, setNumbers] = useState([]);
  const [number, setNumber] = useState("");

  const handleAddNumber=()=> {
    const newNumbers = [...numbers, number];
    setNumber("")
    newNumbers.sort(function(a, b) {
        return a - b;
      });
      setNumbers(newNumbers);
     
   
  }

  const onSetNumber =(evt)=>{
    setNumber(evt.target.value)

  }

  return (
    <div>
        <h2> Lista de numeros ascendentes </h2>
        <input
          type="number"
          id="numeros"
          value={number}
          onChange={(event)=> onSetNumber(event)}
        />
      <button onClick={() => handleAddNumber()}>Agregar número</button>
      <ol>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ol>
    </div>
  );
}

export default NumberList;