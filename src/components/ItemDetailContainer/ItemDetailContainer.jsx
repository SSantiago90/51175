import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./itemdetail.css";
import productsDatabase from "../../data/products";
import Button from "../Button/Button";

import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

/* ------------- Mock async Service -------------------  */
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

  const { cart, addItem } = useContext(cartContext);

  console.log("cart:", cart);

  useEffect(() => {
    getSingleItem(cityid).then((respuesta) => {
      setProduct(respuesta);
    });
  }, [cityid]);

  function onAddToCart(count) {
    addItem(product, count);
    console.log("agreado al carrito!");
  }

  return (
    /* <ItemDetail> */
    <div className="card-detail_main">
      <div className="card-detail_img">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="card-detail_detail">
        <h1>{product.title}</h1>
        <h2 className="priceTag">$ {product.price}</h2>
        <small>{product.detail}</small>
      </div>

      <ItemCount onAddToCart={onAddToCart} />

      <Link to={`/detalle/${product.id - 1}`}>
        <Button>Anterior</Button>
      </Link>
      <Link to={`/detalle/${product.id + 1}`}>
        <Button>Siguiente</Button>
      </Link>
    </div>
  );
}

export default ItemDetailContainer;
