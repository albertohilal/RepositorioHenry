var palabra = "Henri";
var palabraSeparada = palabra.split("");
palabraSeparada.pop();
palabraSeparada.push("y");
palabraArreglada = palabraSeparada.join("");

console.log(palabraSeparada);
console.log(palabraArreglada);
