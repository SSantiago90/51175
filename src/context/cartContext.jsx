import { createContext, useState } from "react";
import useDeepCopy from "../hooks/useDeepCopy";

// 1 CREARLO con createContext
const cartContext = createContext({ cart: [] });

// 2 crear el PROVIDER
function CartProvider(props) {
  const [cart, setCart] = useState([]);
  const newCart = useDeepCopy(cart);

  function addItem(product, countFromCounter) {
    if (isItemInCart(product.id)) {
      const itemIndex = cart.findIndex(
        (itemInCart) => itemInCart.id === product.id
      );
      newCart[itemIndex].count += countFromCounter;
    } else {
      newCart.push({ ...product, count: countFromCounter });
    }
    setCart(newCart);
  }

  function removeItem(idToDelete) {
    /*  */
  }

  function isItemInCart(id) {
    return cart.some((itemInCart) => itemInCart.id === id);
  }

  function getCountInCart(id) {
    const item = cart.find((itemInCart) => itemInCart.id === id);

    return item !== undefined ? item.count : 0;
  }

  return (
    <cartContext.Provider
      value={{ cart: cart, addItem, isItemInCart, getCountInCart, removeItem }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export { cartContext, CartProvider };
