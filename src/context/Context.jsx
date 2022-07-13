// 1. Crear un contexto.
import { createContext, useState } from "react";

export const context = createContext();

// 2. Crear un componente proveedor.

export default function ComponenteProveedor ({ children }) {

  const [color, setColor] = useState("red");

  function cambiarColor(string) {
    setColor(string)
  }

  return (
    <context.Provider value={{ color, cambiarColor }}>
      <div style={{ background: color }}>
        <h2>Soy el Provider</h2>
        { children }
      </div>
    </context.Provider>
  )
}