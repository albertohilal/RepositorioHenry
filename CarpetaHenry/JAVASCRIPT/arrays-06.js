var numeros = [1, 6, 8, 9];
var cumplenCondicion = numeros.every((num) => {
  //En la funcion flecha especificamos el parametro con el que trabajaremos aqui num
  return num > 5; //Aqui le decimos cual es la condicion que tienen que cumplir todos los elementos
  // En este caso que sean mayores a cinco
});

console.log(cumplenCondicion);
