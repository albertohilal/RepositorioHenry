var libro = { autor: 'Borges', genero: 'policial', año: 1990 };

var tienePropiedad = libro.hasOwnProperty('autor');
//console.log(tienePropiedad);

var todasLasPropiedades = Object.keys(libro);

console.log(todasLasPropiedades);
