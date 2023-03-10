import "./App.css";
import Saludo from "./components/Saludo";
import Button from "./components/Button/Button";
import Item from "./components/Item";
import Flex from "./components/Flex/Flex";
import ItemCount from "./components/ItemCount/ItemCount";

/* 
function AppAlumnos(){
  return (
    <NavBar/>
    <ItemListContainer ..../>
    <ItemCount stock={2}/>
    <ItemCount stock={10}/>
  )
} */

// Contenedores -> ItemListContainer
// Presentación ->

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src="/imgs/logo.bmp" height="20" alt="logo" />

          <Saludo texto="Bienvenidos a la clase 4" />
          <Button>Soy un children</Button>
          {/* Children☝ */}

          <ItemCount initial={1} stock={10}/>

          {/* hardcodeado */}
          <Flex>
            <Item
              title="Remera A"
              price="100"
              description="La remera de Coderhouse"
              img="/imgs/remera.jpg"
            />

            <Item
              title="Pantalón B"
              price="300"
              description="Patalón para codear"
              img="https://www.helikon-tex.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/s/p/sp-pgm-dc-11.jpg"
            />

            <Item
              title="Buzo"
              price="600"
              description="Buzo de React"
              otraProp="...."
              numero={1}
            />
          </Flex>
        </header>
      </div>
    </div>
  );
}

export default App;
