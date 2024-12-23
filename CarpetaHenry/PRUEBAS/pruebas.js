function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let i = 0;

  do {
    i = i + 5;
    num = num + i;
    i++;
    console.log("1: ", num);
  } while (i <= 8);
  console.log("2: ", num);
}

doWhile(2);
