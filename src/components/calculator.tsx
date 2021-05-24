import React, { useState } from 'react'
import TemperatureInput from './temperature-input';

const Calculator = () => {
  const [temperature, setTemperature] = useState('')

  const handleChange = (e: any) => {
    setTemperature(e.target.value)
  }
  
  return (
      <>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </>
    );
}

export default Calculator
