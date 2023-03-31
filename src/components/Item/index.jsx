import "./item.css";
import { useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Item(props) {
  const [fav, setFav] = useState(false);

  function handleFavorite(evt) {
    evt.preventDefault();
    setFav(!fav);
  }

  const styleImg = { filter: props.stock === 0 ? "grayscale(0.9)" : ""}

  let classNameFavorite;

  if (fav === true) {
    classNameFavorite = "item-card_favicon favorite";
  } else {
    classNameFavorite = "item-card_favicon";
  }

  return (
    <div id={props.id} className="item-card">
      <button onClick={handleFavorite} className={classNameFavorite}>
        ♥
      </button>

      <div className="item-card_header">
        <h2>{props.title}</h2>
      </div>
      <div className="item-card_img">
       {/* con classNames <img className={props.stock === 0 && "disabled"} src={props.img} alt="imagen"></img> */}
       {/* con Style inline */}
      <img style={styleImg} src={props.img} alt="imagen"></img>
      </div>

      <div className="item-card_detail">
        {/* 3. RendCondc con operador lógico && */}
        {/* Valores falsy/truthy */}
        {/* CONDICION && entonces renderizo </A> */}
        {/* <Offer/> */}
        {props.offer && <h4 style={{ color: "green" }}>{props.offer} %</h4>}

        <h4>$ {props.price}</h4>
        <small>{props.category}</small>
      </div>
      {props.stock === 0 && <small>No quedan lugares</small>}
      {props.stock > 0 && (
        <Link to={`/detalle/${props.id}`}>
          <Button>Ver detalle</Button>
        </Link>
      )}
    </div>
  );
}
