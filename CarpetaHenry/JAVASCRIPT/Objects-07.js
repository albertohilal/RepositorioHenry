var comidas = {};
var diferenciaDeNotaciones = function(propUno, propDos){
    comidas[propUno] = ['Frutas','Vegetales'];
    comidas[propDos] = ['Hamburguesas', 'Papas fritas'];
};

diferenciaDeNotaciones('saludable', 'noSaludable');

console.log(comidas);

  