import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./itemdetail.css";
import productsDatabase from "../../data/products";
import Button from "../Button/Button";

import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { getSingleItem } from "../../services/firestore";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  let { cityid } = useParams();

  const { addItem, getCountInCart } = useContext(cartContext);

  useEffect(() => {
    getSingleItem(cityid).then((respuesta) => {
      setProduct(respuesta);
    });
  }, [cityid]);
  function onAddToCart(count) {
    addItem(product, count);
    console.log("agreado al carrito!");
  }

  const countInCart = getCountInCart(product.id);
  console.log(countInCart);

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

      {/* Rendering condicional */}
      {/* si addedToCart === true? <ItemCount> : <>ir al carrito<> */}
      <ItemCount
        stock={product.stock - countInCart}
        onAddToCart={onAddToCart}
      />

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
