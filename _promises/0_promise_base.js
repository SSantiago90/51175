const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ok");
  }, 500);
  /* reject("Error") */
});

promesa
  .then((respuesta) => alert(respuesta))
  .catch((error) => console.error(error));
