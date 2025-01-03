var mascota = {
    animal:'Perro',
    raza: 'Ovejero Aleman',
    amistoso: 'true',
    dueño: 'Beto',
    info: function(){
        console.log('Mi perro es un '+ this.raza)
    },
};

mascota.info();