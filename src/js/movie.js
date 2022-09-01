// Imagen Principal
let mainImage = getElement('backImage')
let mainTitleImage = getElement('titleMovie')
let mainDescription = getElement('descriptionMovie')
let mainGender = getElement('gender')

// Cast
let mainCast = getElement('elenco')
let mainGenre = getElement('genre')

//Mostramos los valores en consola:
console.log();

const seccionMovie = async () => {
    // Obtiene los valores del url
    const valores = window.location.search;
    let movie_id = valores.slice(4)

    let mUrl = `${URL}/movie/${movie_id}?api_key=${API_KEY}&language=${language}`
    let pcUrl = `${URL}/movie/${movie_id}/credits?api_key=${API_KEY}&language=${language}`


    try {

        let response = await axios.get(mUrl)
        let movie = response.data

        let person = await axios.get(pcUrl)
        
        mainImage.src = `${IMG_ORIGINAL_URL}${ movie.backdrop_path}`
        mainImage.alt = `${movie.title}`
        mainTitleImage.innerHTML = `<h1 class="bigTitle">${movie.title}</h1>`
        mainDescription.innerHTML = `${movie.overview.substring(0, 210)}`

        if (!movie.adult){
            mainGender.innerHTML = `<span>TV-PG</span>`
        } else {
            mainGender.innerHTML = `<span>TV-MA</span>`
        }

        //Obtener actores
        
        let casts = ''
        person.data.cast.forEach( (cast, i) => {
            if ( i < 10 ){
                casts += `<a href="cast.html?id=${cast.id}" class="castOriginal">${cast.original_name}</a>, `
                mainCast.innerHTML = casts.substring(0, casts.length - 2) + '... ';
            }
        })

        // Obtener Generos de la Pelicula
        let gendres = ''
        movie.genres.forEach( genre => {
            
            gendres += `${genre.name}, `

            mainGenre.innerHTML = gendres.substring(0, gendres.length - 2);
        });

    } catch ( error ) {
        console.log( error )
    }
}

seccionMovie()