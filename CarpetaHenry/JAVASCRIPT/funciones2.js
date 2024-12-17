function CuidadoConElConsoleLog(nombre) {
  console.log(nombre);
}

function otraFuncion() {
  const resultado = CuidadoConElConsoleLog("Camilo");
  return (
    "El nombre retornado por la función 'CuidadoConElConsoleLog' es: " +
    resultado
  );
}
