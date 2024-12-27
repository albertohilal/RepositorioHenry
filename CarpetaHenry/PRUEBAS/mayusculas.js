var array = ["Juan", "Vivi", "Nacho", "Kari"];

function convertirStringAMayusculas(array) {
  nuevo = [];
  for (var i = 0; i < array.length; i++) {
    nuevo.push(array[i].toUpperCase());
  }
  return nuevo;
}
console.log(convertirStringAMayusculas(array));
