// Template String

const nombre = 'Benja';
const apellido = 'Carias';

// Una forma más sencilla de concatenar variables con texto
const nombreCompleto = `${ nombre } ${ apellido }`

// La forma casual seria
const nombreCompletoCasual = nombre + ' ' + apellido;

console.log( nombreCompleto );
console.log( nombreCompletoCasual );

function getSaludo() {
    return 'Hola' + nombre;
}

// Se pueden usar funciones dentro de los templates string 
// Ya que nos permite introducir codigo JS
console.log(`Template String: ${ getSaludo() }`);