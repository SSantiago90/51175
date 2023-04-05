import React, { useState, useEffect } from "react";
import Item from "../Item";
import Flex from "../Flex/Flex";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { getItems, getItemsByCategory } from "../../services/firestore";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryid } = useParams();

  useEffect(() => {
    if (categoryid === undefined) {
      getItems().then((respuesta) => {
        setProducts(respuesta);
      });
    } else {
      getItemsByCategory(categoryid).then((respuesta) =>
        setProducts(respuesta)
      );
    }
  }, [categoryid]);

  if (products.length === 0) {
    return <Loader />;
  }

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
          stock={producto.stock}
          offer={producto.offer}
        />
      ))}
    </Flex>
  );
}

export default ItemListContainer;
