import React, { useContext } from 'react'
import CajaDeColor from './CajaDeColor'
import { context } from '../context/Context'

export default function ColorSeleccionado() {

  const { color } = useContext(context)

  return (
    <div style={{ background: "black" }}>
      <h2>ColorSeleccionado: {color}</h2>
      <CajaDeColor color={color} alto="100px" ancho="100px" />
    </div>
  )
}
