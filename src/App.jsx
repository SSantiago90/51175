import "./App.css";
import Saludo from "./components/Saludo";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Saludo texto="Bienvenidos a la clase 4" />
      <ItemListContainer />
    </div>
  );
}

export default App;
