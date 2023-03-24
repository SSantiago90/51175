import React, { useState } from "react";
import Button from "../Button/Button";

export default function ItemCount() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }
  function handleSubstract() {
    setCount(count - 1);
  }

  return (
    <div>
      <Button color="red" onPress={handleSubstract}>
        -
      </Button>
      <span> {count} </span>
      <Button color="blue" onPress={handleAdd}>
        +
      </Button>
      <Button>Agregar al carrito</Button>
    </div>
  );
}
