import React, { useState, useEffect } from "react";
import Item from "../Item";
import Flex from "../Flex/Flex";

/* ------------- Mock async Service -------------------  */
import productsDatabase from "../../data/products";

function getItems() {
  const promesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsDatabase);
    }, 2500);
  });

  return promesa;
}
/* ----------------------------------------------------  */

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  console.log("Renderizando....");

  useEffect(() => {
    getItems().then((respuesta) => {
      console.log("promesa cumplida", respuesta);

      setProducts(respuesta);
    });
  }, []);

  return (
    //<ItemList products={products}/>
    <Flex>
      {products.map((producto) => (
        <Item
          key={producto.id}
          id={producto.id}
          title={producto.title}
          price={producto.price}
          category={producto.category}
          img={producto.img}
        />
      ))}
    </Flex>
  );
}

export default ItemListContainer;
