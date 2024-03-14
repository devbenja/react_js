// Objetos Literales

const alumno = {
    nombre: 'Benja',
    edad: 22,
    carnet: '2018-0038U',
    direccion: {
        country: 'Nicaragua',
        city: 'Managua'
    },
};

console.log( { alumno } );

// Podemos clonar un objeto con el operador Spread

const alumnoDos = { ...alumno };
alumnoDos.nombre = 'Salvador';

// De esta manera aseguramos que tenemos una copia 
// a nivel general del objeto

console.log( { alumnoDos });