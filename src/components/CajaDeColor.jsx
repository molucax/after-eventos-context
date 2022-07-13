import React from 'react'

export default function CajaDeColor({ color, alto, ancho }) {
  return (
    <div style={{ background: color, height: alto, width: ancho }}></div>
  )
}
