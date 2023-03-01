import React from "react";
import { useState } from "react";

const SameNumberCounter=()=> {
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)
    const [number3, setNumber3] = useState(0)
    let [count, valueCount] = useState(0)

    const handleNumber1Change = (evt) => {
        setNumber1 (evt.target.value );
      }
    
      const handleNumber2Change = (evt) => {
        setNumber2 (evt.target.value );
      }
      
    const handleNumber3Change = (evt) => {
        setNumber3 (evt.target.value );
      }
      
    const sameNumber =()=>{

         
        valueCount;
        if (number1 === number2 && number1 === number3) {
            return ( `${count=3} de los números son iguales `);       
        }
        else if (number1 === number3) {
            return ( `${count=2} de los números son iguales `);
        }
        else if (number2 === number3) {
            return ( `${count=2} de los números son iguales `);
        }else if (number1 === number2) {
            return ( `${count=2} de los números son iguales `);
        }
        
        else {
            return ( `${count=0} de los números son iguales `)
        }
        
  
        }
        
     
      

  
     

  return (
    <div>
        <h2> Numeros Repetidos </h2>
        <label htmlFor="numeros">Ingresa el primer numero: </label>
        <input
          type="number"
          id="numeros"
          value={number1}
          onChange={(event)=> handleNumber1Change(event)}
        />
        <br />
         <label htmlFor="numeros">Ingresa el segundo numero: </label>
        <input
          type="number"
          id="numeros"
          value={number2}
          onChange={(event)=> handleNumber2Change(event)}
        />
        <br />
         <label htmlFor="numeros">Ingresa el tercer numero: </label>
        <input
          type="number"
          id="numeros"
          value={number3}
          onChange={(event)=> handleNumber3Change(event)}
        />

        
      <p>{sameNumber()}</p>
        

        
    </div>
  );
}

export default SameNumberCounter