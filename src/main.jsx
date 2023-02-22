import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import SegundosAHoras from './hora'
import CallCostCalculator from './Llamada'
import Greeting from './Saludo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <SegundosAHoras />
    <CallCostCalculator />
    <Greeting />
  </React.StrictMode>,
)
