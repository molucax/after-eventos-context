import ComponenteProveedor from "./context/Context";
import ColorSeleccionado from "./components/ColorSeleccionado";
import ListaDeColores from "./components/ListaDeColores";

function App() {
  return (
    <div style={{ background: "orange" }}>
      <h2>App</h2>
      <ComponenteProveedor>
        <ColorSeleccionado />
        <ListaDeColores />
      </ComponenteProveedor>
    </div>
  );
}

export default App;
