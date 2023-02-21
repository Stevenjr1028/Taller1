import React from "react";
import { useState } from 'react'

const SegundosAHoras =()=> {
  const [segundos, setSegundo] = useState(0)
  const [horas, valueHora] = useState(0)
  const [minutos, valueMinuto] = useState(0)
  const [segundosRestantes, valueSegundoRestante] = useState(0)



  const converter = () =>{
    valueHora(Math.floor(segundos / 3600))
    valueMinuto(Math.floor((segundos % 3600) / 60))
    valueSegundoRestante(segundos % 60)
  }

  const handleSegundosChange = (evt) => {
    setSegundo (evt.target.value )
  }

 

    return (
      <div>
        <h1> Conversor de Segundos a: Horas, Minutos y Segundos </h1>
        <label htmlFor="segundos">Ingrese los segundos:</label>
        <input
          type="number"
          id="segundos"
          value={segundos}
          onChange={(event)=> handleSegundosChange(event)}
        />
        <button onClick={()=>converter()}> Hacer conversion </button>
        <p>{horas} horas, {minutos} minutos y {segundosRestantes} segundos.</p>
      </div>
    );
  }


export default SegundosAHoras;
