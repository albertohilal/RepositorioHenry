var array = [1, 8, 24, 35];

function contarElementosMayoresA10(array) {
  // Inicializamos el contador
  let contador = 0;

  // Iteramos sobre el array
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      contador++; // Incrementamos el contador si el elemento es mayor a 10
    }
  }

  // Retornamos el contador
  return contador;
}

// Llamamos a la función y mostramos el resultado
console.log(contarElementosMayoresA10(array));
