import { createContext, useState } from "react";

const cartContext = createContext({ default: "default" });
const Provider = cartContext.Provider;

// Custom Provider
function CartProvider(props) {
  const [cart, setCart] = useState([]);
  // cart -> inmutable

  function addItem(product, count) {
    /* product.quantity = count;
    setCart(product); */

    const newCart = [...cart]; // deep copy/shallow copy
    //const otroNewCart = cart.map((item) => item);

    newCart.push({ ...product, count });
    setCart(newCart);
  }

  function getCountInCart() {
    // reduce
    let total = 0;
    cart.forEach();
    return 5;
  }

  return <Provider value={{ cart, addItem }}>{props.children}</Provider>;
}

export { cartContext, CartProvider };
