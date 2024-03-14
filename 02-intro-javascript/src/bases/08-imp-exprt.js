// Import y Export 

import heroes, { owners } from '../data/heroes';

console.log( owners );

// Funciones comunes de arreglos

// Find: Retorna un valor segun la condicion
const getHeroeById = ( id ) => {
    return heroes.find(( heroe ) => heroe.id === id);
};

console.log( getHeroeById(2) );

// Filter: Retorna todos los valores segun la condicion

const getHeroesByOwner = ( owner ) =>  {
    return heroes.filter( ( heroe ) => heroe.owner === owner );
};

console.log( getHeroesByOwner('DC') );