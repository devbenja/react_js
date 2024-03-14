// Desestructuracion de Arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

// Obtener todos los elementos del arreglo
const [ p1, p2, p3 ] = personajes;

console.log( p1, p2, p3 );

const asignaturas = ['Maths', 'Español', 'English'];

// Obtener un elemento en especifico en este caso el ultimo
const [ , , eng ] = asignaturas;

console.log( eng );

const retornaArreglo = () => ['ABC', 123];

// Tambien se puede desestructurar una funcion
const [ letras, numeros ] = retornaArreglo();

console.log( letras, numeros );

const UseState = ( valor ) => {
    return [ valor, () => console.log('Hola Mundo') ];
};

const [ nombre, setNombre ] = UseState( 'Goku' );

console.log( nombre );
setNombre();