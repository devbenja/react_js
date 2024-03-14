// Funciones

function sayHi( name ) {
    return `HI ${ name }`;
}

console.log(sayHi('Goku'))

const saludar = function( nombre ) {
    return `Hola ${ nombre }`;
}

console.log(saludar('Benja'));

// Funciones flecha

const sayHola = ( nombre ) => {
    return `HOLA ${ nombre }`;
}

console.log(sayHola('Veggeta'));


const lastHi = () => `Hola Mundo`;

console.log(lastHi());

const getUser = () => ({
    id: '12ED3',
    nombre: 'Faker',
});

console.log( getUser() );


const getUsuarioActivo = ( nombre ) => ({
    id: '3800U',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Salvador');

console.log( usuarioActivo );