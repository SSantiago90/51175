import { createContext, useState } from "react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartProvider } from "./context/cartContext";
import CartContainer from "./components/CartContainer/CartContainer";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryid"
              element={<ItemListContainer />}
            />

            <Route path="/detalle/:cityid" element={<ItemDetailContainer />} />

            <Route path="/prueba" element={<h1>Prueba Ruta</h1>} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="*" element={<h1>Error 404: Page not found</h1>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
