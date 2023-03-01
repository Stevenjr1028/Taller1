import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import SegundosAHoras from './Components/hora'
import CallCostCalculator from './Components/Llamada'
import Greeting from './Components/Saludo'
import SameNumberCounter from './Components/3Numeros'
import NumberList from './Components/lista-ordenada'
import ImparesMenores from './Components/menorimpar'
import AumentoSalario from './Components/10salarios'
import DivisionArreglo from './Components/10arreglos'
import Tabla from './Components/tabla'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <SegundosAHoras />
    <CallCostCalculator />
    <Greeting />
    <SameNumberCounter/>
    <NumberList/>
    <ImparesMenores/>
    <AumentoSalario/>
    <DivisionArreglo/>
    <Tabla/>
  </React.StrictMode>,
)
