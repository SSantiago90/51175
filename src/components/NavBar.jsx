function NavBar() {
  return (
    <nav>
      <ul>
        {/* Logo */}
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/Remeras">Remeras</a>
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
