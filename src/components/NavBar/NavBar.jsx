import { Link } from "react-router-dom";
import "./navbar.css";

import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

function NavBar() {
  const { cart } = useContext(cartContext);

  return (
    <nav>
      <ul className="nav-menu">
        <h2>
          <li>
            <Link to="/">miTienda</Link>
          </li>
        </h2>

        <li className="nav-item">
          <Link className="nav-link" to="/category/China">
            China
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/category/Nigeria">
            Nigeria
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/category/Serbia">
            Serbia
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/category/Indonesia">
            Indonesia
          </Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>

        {/* CartWidget*/}
        <Link to="/cart">
          <div>
            🛒
            <span className="cartWidget_count">{cart.length}</span>
          </div>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
