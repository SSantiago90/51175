import "./App.css";
import Saludo from "./components/Saludo";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div>
      <Saludo texto="Bienvenidos a la clase 7" />
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
