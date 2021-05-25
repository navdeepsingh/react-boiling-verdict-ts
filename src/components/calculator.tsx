import React, { useEffect, useState } from 'react'
import { toCelsius, toFahrenheit, tryConvert } from '../utils';
import TemperatureInput from './temperature-input';
import BoilingVerdict from './boiling-verdict';

const Calculator = () => {
  const [state, setState] = useState({temperature: '', scale: 'c'})
  const [celsius, setCelsius] = useState('')
  const [fahrenheit, setFahrenheit] = useState('')  
  
  const handleCelsiusChange = (temperature: string) => {
    setState({
      scale: 'c',
      temperature
    })
  }

  const handleFahrenheitChange = (temperature: string) => {
    setState({
      scale: 'f',
      temperature
    })
  }

  useEffect(() => {
    const {scale, temperature} = state
    setCelsius(scale === 'f' ? tryConvert(temperature, toCelsius) : temperature)
    setFahrenheit(scale === 'c' ? tryConvert(temperature, toFahrenheit): temperature)    
  }, [state])
  
  return (
      <>
        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange} />
        <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </>
    );
}

export default Calculator
