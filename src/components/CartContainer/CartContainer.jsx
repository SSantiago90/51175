import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import Button from "../Button/Button";
import "./cart.css";

function CartContainer() {
  const context = useContext(cartContext);
  const cart = context.cart;

  return (
    <>
      <h1>Tu Carrito</h1>

      <table className="cartList">
        <thead className="cartList_head">
          <tr className="cartList_row">
            <th>Miniatura</th>
            <th>Titulo</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Remover</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id} className="cartList_row">
              <td>
                <img height={50} src={item.img} alt={item.title} />
              </td>
              <td>{item.title}</td>
              <td>$ {item.price}</td>
              <td>{item.count}</td>
              <td>
                <Button color="#c63224" onPress={item.removeItem}>
                  X
                </Button>
              </td>
              <th>$ --,--</th>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cartList_detail">
        <h4>El total de tu compra es de $ --,--</h4>
      </div>
      <Button>Finalizar Compra</Button>
    </>
  );
}

export default CartContainer;
