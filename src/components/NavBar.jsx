import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <Link to="/">
          <h4>Logo ECommerce</h4>
        </Link>

        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/category/Nigeria">Nigeria</Link>
        </li>
        <li>
          <Link to="/category/Serbia">Serbia</Link>
        </li>
        <li>
          <Link to="/category/China">China</Link>
        </li>
        <li>
          <Link to="/prueba">Prueba</Link>
        </li>

        <li>
          <a href="https://coderhouse.com">Coder</a>
        </li>
        {/* CartWidget*/}
        <div>
          🛒
          <span className="cartWidget_count">3</span>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
