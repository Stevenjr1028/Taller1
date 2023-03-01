import React from "react";
import { useState } from "react";

const  Greeting =()=> {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleTimeChange(evt) {
    setTime(parseInt(evt.target.value));
  }

  function getGreetingMessage() {
    if (time >= 5 && time <= 11) {
      return `Buenos días, ${name}`;
    } else if (time >= 12 && time <= 18) {
      return `Buenas tardes, ${name}`;
    } else {
      return `Buenas noches, ${name}`;
    }
  }

  return (
    <div>
        <h2>Saludo</h2>
      <label htmlFor="nameInput">Ingresa tu nombre: </label>
      <input id="nameInput" type="text" value={name} onChange={handleNameChange} />

      <br />

      <label htmlFor="timeInput">Ingresa solo la hora actual (formato 24 horas): </label>
      <input id="timeInput" type="number" value={time} onChange={handleTimeChange} />

      <br />

      {time && (
        <p>{getGreetingMessage()}</p>
      )}
    </div>
  );
}

export default Greeting;
