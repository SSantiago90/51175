import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";

function CartContainer() {
  const context = useContext(cartContext);
  const cart = context.cart;
  const getPriceInCart = context.getPriceInCart;
  //1. Rendering condicional -> si el carrito está vacío mostramos un mensaje "Volve al home"

  //2. Desglose del carrito -> mostrar el contenido
  return (
    <div>
      <h1>Tu Carrito</h1>
      {cart.map((item) => (
        <div>
          <h3>{item.title}</h3>
          <p>cantidad: {item.count}</p>
          <p>precio: {item.price}</p>
        </div>
      ))}
      <span>El total de tu compra es: {getPriceInCart()} </span>
    </div>
  );
}

export default CartContainer;
