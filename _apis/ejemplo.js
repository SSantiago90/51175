fetch("https://pokeapi.co/api/v2/pokemon") // endpoint
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });
