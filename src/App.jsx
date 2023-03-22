import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryid" element={ <ItemListContainer/> } />
        
        <Route path="/detalle/:cityid" element={<ItemDetailContainer />} />
        {/* /cursos/3 */}
        
        <Route path="/prueba" element={<h1>Prueba Ruta</h1>} />
        <Route path="*" element={<h1>Error 404: Page not found</h1>} />
      </Routes>

      {/* Footer */}
    </BrowserRouter>
  );
}

export default App;
