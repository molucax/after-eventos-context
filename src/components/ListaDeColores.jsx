import React, { useContext } from "react";
import { context } from "../context/Context";
import CajaDeColor from "./CajaDeColor";

const arrayDeColores = ["red", "green", "blue", "purple"];

export default function ListaDeColores() {

  const { color, cambiarColor } = useContext(context)

  return (
    <div style={{ background: "grey" }}>
      <h2>Lista de Colores</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {arrayDeColores.map((elem, index) => (
          <button key={index} onClick={() => cambiarColor(elem)}>
            <CajaDeColor alto={ color === elem ? "70px" : "50px"} ancho={ color === elem ? "70px" : "50px"} color={elem} />
          </button>
        ))}
      </div>
    </div>
  );
}
