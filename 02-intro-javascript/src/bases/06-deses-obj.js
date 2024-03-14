// Desestructuración de Objetos

const user = {
    username: 'Benja007',
    clave: '1234'
};

const { username, clave } = user;

// La desestructuracion sirve de manera que podemos simplificar la 
// forma en que ocupamos los atributos de un objeto.

// Normalmente se tendria que hacer: user.username / user.clave

console.log( username, clave );

const obtenerUsuario = ( { username, clave, rol = 'admin' } ) => {

    // console.log( username, clave, rol );

    return {
        nombreClave: username,
        pass: clave,
        rango: rol,
        calificaciones: {
            math: '10',
            esp: '10'
        }
    }

};

const { nombreClave, rango, calificaciones:{ math, esp } } = obtenerUsuario( user );

// Tambien podemos acceder a un objetos dentro de otro de la siguiente forma
// const { nombreClave, rango, calificaciones } = obtenerUsuario( user );
// const { math, esp } = calificaciones;

console.log( nombreClave, rango )
console.log( math, esp )