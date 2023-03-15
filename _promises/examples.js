/* -------------- BACK-END -------------- */
function BackendFunction() {
  // resolver/rechazar la Promise
  // mitienda.com/producto/111111sadsdasadads

  const promesa = new Promise((resolve, reject) => {
    /* ... lógica de validación */
    const error = false;
    setTimeout(() => {
      console.log("timout completo");

      if (error) {
        reject(new Error("El producto no existe"));
      } else {
        resolve({ id: 1, title: "Curso Coderhouse React" });
      }
    }, 2500);
  });

  return promesa;
}

// * manejo de error con .catch()
// * tareas con finally()
// ! si nos da el tiempo: async await

/* -------------- FRONT-END (nuestra App de React) -------------- */

console.log("App iniciada.▶");

BackendFunction()
  .then((respuesta) => {
    console.log("promesa completa, respuesta:", respuesta);
  })
  .catch((error) => {
    console.log("Error en la promesa: ", error);
  })
  .finally(() => {
    console.log("Sin importar el resultado, ejecutamos finally");
  });

console.log("Llegamos al final🛑.");
