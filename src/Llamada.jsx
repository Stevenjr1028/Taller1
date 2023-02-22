import React from "react";
import { useState } from "react";


const CallCostCalculator =()=> {
  const [callDuration, setCallDuration] = useState(0);
  const [callCost, setCallCost] = useState(0);

  const handleDurationChange = (evt) => {
    setCallDuration(parseInt(evt.target.value));
  };

  const calculateCost = () => {
    if (callDuration <= 0) {
      setCallCost(0);
    }else if 
        (callDuration <= 3) {
            setCallCost(100);
    } 
    
    else {
      const additionalMinutes = callDuration - 3;
      const additionalCost = additionalMinutes * 50;
      setCallCost(100 + additionalCost);
    }
  };

  return (
    <div>
      <h2>Calculadora de costo de llamada telefónica</h2>
      <label>
        Duración de la llamada en minutos:
        <input 
        type="number" 
        value={callDuration} 
        onChange={(event)=> handleDurationChange(event)} />
      </label>
      <button onClick={()=>calculateCost()}>Calcular costo</button>
      <p>El costo de la llamada es de: {callCost} pesos</p>
    </div>
  );
}

export default CallCostCalculator;
