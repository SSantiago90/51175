import React, { useState } from "react";

export default function ItemCount(props) {
  const [count, setCount] = useState(0);

  const stock = 20;

  function handleAdd(){
    /* If (stock alcance) return */
    setCount(count + 1)
  }

  function handleSubstract(){
    /* If (llegamos a 0)  */
  }

  return (
    <div>
      <button>-</button>
      <span> {count} </span>
      <button onClick={handleAdd}>+</button>
    </div>
  );
}
