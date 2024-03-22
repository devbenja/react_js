

export const getGifs = async ( category ) => {

    const API_KEY = '9M2Sm6598qlQf2OejTyL8uSAjr5S0srE';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ API_KEY }&q=${ category }&limit=10`;

    const resp = await fetch( url );
    const { data } = await resp.json();

    // console.log( data );

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    // console.log( gifs );
    return gifs;
    
};