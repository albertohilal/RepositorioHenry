var array = [35, 35, 35, 35, 35];
//var array = [1, 35, 8, 24, 19];
function todosIguales(array) {
    // Si todos los elementos del arreglo son iguales, retornar true.
    // Caso contrario, retornar false.
    // Tu código:
    if (array.length <= 1) return true;

    var primerElemento = array[0];
    
    for(var i = 1; i<array.length; i++){
        if(array[i] !== primerElemento){
           return false;
        } else{
            return true;

        }
    }
  }
  todosIguales(array);

  console.log(todosIguales(array));
