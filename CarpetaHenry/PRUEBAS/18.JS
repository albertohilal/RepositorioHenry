var resultadosTest = [1, 35, 8, 24, 19];

function promedioResultadosTest(resultadosTest) {
  // Inicializamos una variable para almacenar la suma
  let suma = 0;

  // Iteramos sobre los elementos del array
  for (var i = 0; i < resultadosTest.length; i++) {
    suma = suma + resultadosTest[i]; // Acumulamos los valores
  }

  // Calculamos el promedio dividiendo la suma entre el número de elementos
  let promedio = suma / resultadosTest.length;

  // Retornamos el promedio
  return promedio;
}

// Llamamos a la función pasando el array como argumento
console.log(promedioResultadosTest(resultadosTest)); // Salida: 17.4
