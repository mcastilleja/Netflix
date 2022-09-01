// Imagen Principal
let mainImage = getElement('backImage')
let mainTitleImage = getElement('titleMovie')
let mainDescription = getElement('descriptionMovie')
let mainGender = getElement('gender')

// Imagen Principal
const bigImage = async () => {
    let pMUrl = `${URL}/movie/popular?api_key=${API_KEY}&language=${language}`
    
    try {
        let response = await axios.get( pMUrl )

        response.data.results.forEach( (movie, index)  => {
                if( index === 0 ){ 

                    mainImage.src = `${IMG_ORIGINAL_URL}${movie.backdrop_path}`
                    mainImage.alt = `${movie.title}`
                    mainTitleImage.innerHTML = `<h1 class="bigTitle">${movie.title}</h1>`
                    mainDescription.innerHTML = `${movie.overview.substring(0, 210)}`

                    if (!movie.adult){
                        mainGender.innerHTML = `<span>TV-PG</span>`
                    } else {
                        mainGender.innerHTML = `<span>TV-MA</span>`
                    }
                }
        })
        
    } catch ( error ) {
        console.log( error )
    }

}

// Peliculas Populares
const popularMovies = async () => {
    let pMUrl = `${URL}/movie/popular?api_key=${API_KEY}&language=${language}`

    try {
        let response = await axios.get( pMUrl )
        let movies = ''
        response.data.results.forEach( (movie, index)  => {
                if( index > 0 && index <= 7 ){ movies += `<div><a href=movie.html?id=${movie.id}><img src="${IMG_500_URL}${movie.backdrop_path}" alt="${movie.title}"></a></div>` }
        })
        createGallery(mainContainer, 'trending', 'Populares en Netflix', movies )
    } catch ( error ) {
        console.log( error )
    }
}


const allMoviesFilters = async ( ) => {

    let arrAcc = [], arrAve = [], arrAnim = [], arrCom = [], arrCrim = [], arrDoc = [], arrDram = [], arrFami = [], arrFant = [], arrHist = [], arrTerr = [], arrMusic = [], arrMist = [], arrRom = [], arrFX = [], arrTv = [], arrSusp = [], arrBelic= [], arrWest = []

    for( let i = 1; i <= 220 ; i++){
            
        let all = `${URL}/movie/popular?api_key=${API_KEY}&language=${language}&page=${i}`

        try {
            let response = await axios.get( all )
            let results = response.data.results
            results.forEach( (movie, i) => {
                if (movie.genre_ids[0] === 28 ) {
                    if (arrAcc.length < 7 ){
                        arrAcc.push(movie)
                    }
                } else if (movie.genre_ids[0] === 12 ) {
                    if (arrAve.length < 7 ){
                        arrAve.push(movie)
                    }
                } else if (movie.genre_ids[0] === 16 ) {
                    if (arrAnim.length < 7 ){
                        arrAnim.push(movie)
                    }
                } else if (movie.genre_ids[0] === 35 ) {
                    if (arrCom.length < 7 ){
                        arrCom.push(movie)
                    }
                } else if (movie.genre_ids[0] === 80 ) {
                    if (arrCrim.length < 7 ){
                        arrCrim.push(movie)
                    }
                } else if (movie.genre_ids[0] === 99 ) {
                    if (arrDoc.length < 7 ){
                        arrDoc.push(movie)
                    }
                } else if (movie.genre_ids[0] === 18 ) {
                    if (arrDram.length < 7 ){
                        arrDram.push(movie)
                    }
                } else if (movie.genre_ids[0] === 10751 ) {
                    if (arrFami.length < 7 ){
                        arrFami.push(movie)
                    }
                } else if (movie.genre_ids[0] === 14 ) {
                    if (arrFant.length < 7 ){
                        arrFant.push(movie)
                    }
                } else if (movie.genre_ids[0] === 36 ) {
                    if (arrHist.length < 7 ){
                        arrHist.push(movie)
                    }
                } else if (movie.genre_ids[0] === 27 ) {
                    if (arrTerr.length < 7 ){
                        arrTerr.push(movie)
                    }
                } else if (movie.genre_ids[0] === 10402 ) {
                    if (arrMusic.length < 7 ){
                        arrMusic.push(movie)
                    }
                } else if (movie.genre_ids[0] === 9648 ) {
                    if (arrMist.length < 7 ){
                        arrMist.push(movie)
                    }
                } else if (movie.genre_ids[0] === 10749 ) {
                    if (arrRom.length < 7 ){
                        arrRom.push(movie)
                    }
                } else if (movie.genre_ids[0] === 878 ) {
                    if (arrFX.length < 7 ){
                        arrFX.push(movie)
                    }
                } else if (movie.genre_ids[0] === 10770 ) {
                    if (arrTv.length < 7 ){
                        arrTv.push(movie)
                    }
                } else if (movie.genre_ids[0] === 53 ) {
                    if (arrSusp.length < 7 ){
                        arrSusp.push(movie)
                    }
                } else if (movie.genre_ids[0] === 10752 ) {
                    if (arrBelic.length < 7 ){
                        arrBelic.push(movie)
                    }
                } else if (movie.genre_ids[0] === 37 ) {
                    if (arrWest.length < 7 ){
                        arrWest.push(movie)
                    }
                }
            })
        } catch ( error ) {
            console.log( error )
        }

    }

    

    constructorArr( arrAcc, 'Acción')
    constructorArr(arrAnim, 'Animación')
    constructorArr(arrAve, 'Aventuras')
    constructorArr(arrBelic, 'Guerra')
    constructorArr(arrCom, 'Comedia')
    constructorArr(arrCrim, 'Crimen')
    constructorArr(arrDoc, 'Documental')
    constructorArr(arrDram, 'Drama')
    constructorArr(arrFX, 'CienciaFicción')
    constructorArr(arrFami, 'Familiar')
    constructorArr(arrFant, 'Fantasía')
    constructorArr(arrHist, 'Historia')
    constructorArr(arrMist, 'Misterio')
    constructorArr(arrMusic, 'Musicales')
    constructorArr(arrRom, 'Romance')
    constructorArr(arrSusp, 'Suspenso')
    constructorArr(arrTerr, 'Terror')
    constructorArr(arrTv, 'SeriesTV')
    constructorArr(arrWest, 'Oeste')

}



allMoviesFilters()
bigImage()
popularMovies()