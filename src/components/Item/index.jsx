import "./item.css";
import { useState } from "react";

export default function Item(props) {
  const [fav, setFav] = useState(false);

  function handleFavorite() {
    setFav(!fav);
  }

  let classNameFavorite;

  if (fav === true) {
    classNameFavorite = "item-card_favicon favorite";
  } else {
    classNameFavorite = "item-card_favicon";
  }

  return (
    <div id={props.id} className="item-card">
      {/* ToggleButton icon="☀" color="red" */}
      <button onClick={handleFavorite} className={classNameFavorite}>
        ♥
      </button>

      <div className="item-card_header">
        <h2>{props.title}</h2>
      </div>
      <div className="item-card_img">
        <img src={props.img} alt="imagen"></img>
      </div>

      <div className="item-card_detail">
        <h4>$ {props.price}</h4>
        <small>{props.category}</small>
      </div>
      <button>Ver detalle</button>
    </div>
  );
}
