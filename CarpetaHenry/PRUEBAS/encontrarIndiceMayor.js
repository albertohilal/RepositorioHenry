var array = [1, 35, 8, 24, 19];

function encontrarIndiceMayor(array) {
  // Inicializamos el índice y el valor máximo
  let indiceMayor = 0;
  let valorMayor = array[0];

  // Recorremos el array para encontrar el valor más grande y su índice
  for (let i = 1; i < array.length; i++) {
    if (array[i] > valorMayor) {
      valorMayor = array[i]; // Actualizamos el valor más grande
      indiceMayor = i; // Actualizamos el índice del valor más grande
    }
  }

  // Retornamos el índice del número más grande
  return indiceMayor;
}

// Prueba la función
console.log(encontrarIndiceMayor(array)); // 1 (índice de 35)
