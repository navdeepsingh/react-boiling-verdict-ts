import React, { useState } from 'react'

type scale = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

type IProps = {
  scale: 'c' | 'f',
  temperature: string,
  onTemperatureChange: (temp: string) => void
}
const scaleNames: scale = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

const TemperatureInput:React.FC<IProps> = ({scale, temperature, onTemperatureChange}) => {
  
  const handleChange = (e: any) => {
    onTemperatureChange(e.target.value)
  }

  return (
    <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={handleChange} />
      </fieldset>
  )
}

export default TemperatureInput
