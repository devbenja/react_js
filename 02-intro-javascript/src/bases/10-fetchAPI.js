// Fetch API

const API_KEY = '9M2Sm6598qlQf2OejTyL8uSAjr5S0srE';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

peticion
    .then( resp => resp.json() )
    .then( ({ data }) => {
        
        const { url } = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );

    })
    .catch( console.warn );