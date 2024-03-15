// Promesas

import { getHeroeById } from "./bases/08-imp-exprt";

// Una promesa representa un valor que puede estar disponible ahora, en el futuro o nunca.

const miPromesa = new Promise( ( resolve, reject ) => {

    const status = true;
    
    if ( status ) {
        setTimeout(() => {
            // Resolve en caso de que la respuesta de la promesa es exitosa
            resolve('Operación Exitosa XD');
        }, 2000);
    } else {
        // Reject en caso de que la respuesta sea fallida
        reject('Operación Fallida');
    }
});

// Luego con el metodo then manejamos la respuesta en caso de que sea exitosa
// O catch en caso de que haya un error, de este manera podremos notificar
miPromesa.then( ( response ) => {
    console.log( response );
}).catch( ( error ) => {
    console.error( error );
});


const promise = new Promise( ( resolve, reject ) => {

    setTimeout(() => {
        
        const heroe = getHeroeById(3);

        if ( heroe ) {
            resolve( heroe );
        } else {
            reject('No se encontro el Heroe');
        }
        
    }, 2000);

});

promise.then( ( response ) => {
    console.log( 'Heroe', response );
}).catch( ( error ) => {
    console.error( error );
});


const getHeroeByIdAsync = ( id ) => {

    return new Promise( ( resolve, reject ) => {

        setTimeout(() => {

            const heroe = getHeroeById( id );

            if ( heroe ) {
                resolve( heroe );
            } else {
                reject('No se encontro el heroe');
            }

        }, 2000);
    });
};

getHeroeByIdAsync(1)
.then( response => console.log( 'Heroe', response ) )
.catch( console.warn );