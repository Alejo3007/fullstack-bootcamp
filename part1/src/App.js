import "./App.css";
import Mensaje from "./mensaje";

const Descripcion =  () => {
  return <h1>Estos es una prueba</h1>

}

const App = () => {
  return (
    <div className="App">
      <Mensaje color="red" mensaje="Hola" />
      <Mensaje color="blue" mensaje="ADIOS" />
      <Mensaje color="yellow" mensaje="que tal" />
      <Descripcion />

    </div>
  );
};

export default App;
