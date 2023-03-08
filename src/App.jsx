import "./App.css";
import Saludo from "./components/Saludo";
import Button from "./components/Button/Button";
import Item from "./components/Item";
import Flex from "./components/Flex/Flex";

/* 
function AppAlumnos(){
  return (
    <NavBar/>
    <ItemListContainer/>
  )
} */

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src="/imgs/logo.bmp" height="20" alt="logo" />
          <Saludo texto="Bienvenidos a la clase 4" />
          <Button color="orange" text="Soy naranja" />

          <Button disabled={false} color="purple">
            Soy violeta
          </Button>

          <Button disabled={true}>No tengo color y estoy disabled :(</Button>
          <Button>Soy un children</Button>
          {/* Children☝ */}
          <hr />

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
