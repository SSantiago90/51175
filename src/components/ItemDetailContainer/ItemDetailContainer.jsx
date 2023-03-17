import React, { useState, useEffect } from "react";
import Flex from "../Flex/Flex";

/* ------------- Mock async Service -------------------  */
import productsDatabase from "../../data/products";

function getSingleItem() {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productsDatabase[1]);
    }, 1000);
  });

  return promesa;
}
/* ------------------------------------------------- */

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getSingleItem().then((respuesta) => {
      console.log("promesa cumplida", respuesta);

      setProduct(respuesta);
    });
  }, []);

  /* return <ItemDetail .... /> */

  return (
    <div>
      <img src={product.img}></img>
      <h1>{product.title}</h1>
      <h3>{product.category}</h3>
      <p>Precio: ${product.price}</p>
    </div>
  );
}

export default ItemDetailContainer;
