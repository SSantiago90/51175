import logo from "./logo.svg";
import "./App.css";

function Saludo() {
  function getUsername() {
    return "Gaston";
  }

  let usuario = getUsername();

  const styleSaludo = {
    backgroundColor: "green",
    marginTop: "300px",
    fontSize: "80px",
  };

  return <div style={styleSaludo}>Hola {usuario}!</div>;
}

function App() {
  function handleClick() {
    alert("clickeaste!");
  }

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Saludo />
          <button onClick={handleClick}>Click me</button>
        </header>
      </div>
    </div>
  );
}

export default App;
