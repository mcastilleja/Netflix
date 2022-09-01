const searchMovie = async () => {
    // Obtiene los valores del url
    const valores = window.location.search;
    let movieName = valores.slice(6)
    
    let searchUrl = `${URL}/search/movie?api_key=${API_KEY}&language=${language}&query=${movieName}`

    try {
        let response = await axios.get(searchUrl)
        let searchRes = response.data.results
        
        constructorArr(searchRes, 'Busqueda')

    } catch ( error ) {
        console.log( error )
    }
}


searchMovie()