// Variables y Constantes

const nombre = 'Benja';
const apellido = 'Carias';

let valor = 3;

// El valor de las variables de tipo let se puede cambiar
valor = 2;

// En cambio const es una constante por lo tanto ese valor no puede ser cambiado
// nombre = 'Salvador'; { index.js:12 Uncaught TypeError: Assignment to constant variable. }

console.log( nombre + ' ' + apellido );
console.log( valor );

if ( true ) {
    
    // El scope permite que la variable tenga solo el alcance en el if
    // en este caso dentro del if el valor sera de 5 y no 3.

    let valor = 5;
    console.log( valor );

}

// El Scope que tiene la variable es la que asignamos al inicio ya que 
// se encuentra al mismo nivel de la declaracion.

console.log( valor );