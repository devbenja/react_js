
const getImagen = async () => {

    try {
    
        const API_KEY = '9M2Sm6598qlQf2OejTyL8uSAjr5S0srE';
        const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
        const { data } = await peticion.json();

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );

    } catch (error) {
        // Manejo del Error
        console.error( error );
    }

}

getImagen();