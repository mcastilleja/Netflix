const castMovies = async () => {
    // Obtiene los valores del url
    const valores = window.location.search;
    let castId = valores.slice(4)
    
    let castUrl = `${URL}/discover/movie?with_cast=${castId}&api_key=${API_KEY}&language=${language}`

    try {
        let response = await axios.get(castUrl)
        let castRes = response.data.results
        
        constructorArr(castRes, 'Peliculas')

    } catch ( error ) {
        console.log( error )
    }
}


castMovies()