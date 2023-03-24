import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

/* ------------- Mock async Service -------------------  */
import productsDatabase from "../../data/products";

function getSingleItem(idURL) {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      const itemRequested = productsDatabase.find((item) => {
        return item.id === parseInt(idURL);
      });
      resolve(itemRequested);
    }, 1000);
  });

  return promesa;
}
/* ------------------------------------------------- */

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  let { cityid } = useParams();

  useEffect(() => {
    getSingleItem(cityid).then((respuesta) => {
      setProduct(respuesta);
    });
  }, []);

  return (
    <div>
      <img src={product.img} alt="imagen"></img>
      <h1>{product.title}</h1>
      <h3>{product.category}</h3>
      <p>Precio: ${product.price}</p>
      <ItemCount />
    </div>
  );
}

export default ItemDetailContainer;
