// ###### LIBRERIAS ######

const API_KEY = '2f446d77ecd6a786a695f5e9770f2bc3'
let language = 'es-MX'
const URL = 'https://api.themoviedb.org/3'
const IMG_500_URL = 'https://image.tmdb.org/t/p/w500'
const IMG_ORIGINAL_URL = 'https://image.tmdb.org/t/p/original'

// Funcion para crear elementos by ID
let getElement = ( id ) => { return document.getElementById( id ) }

// Se crea contenedor principal
let mainContainer = getElement('movies')

// Selector por query
let selectQueryClass = ( father, query ) => { return document.querySelector(`div#${father} .${query}`)}

// Función para crear div y asignarle id
let createDiv = (id) => {
    let div = document.createElement("div")
    div.setAttribute("id" , id)
    return div
}

// Crear contenedores por clase
let createDivClass = ( id ) => {
    let div = document.createElement("div")
    div.setAttribute("class", id)
    return div
}

// Funcion para hacer append
let appendContainer = ( main , conector ) => { return main.append(conector) }

// Creador de contenedores de gallerias 
let createSelectContainer = ( newContainer, append ) => {
    let newDiv = createDiv( newContainer )
    newDiv.classList.add("opt");
    appendContainer( append , newDiv )
    return getElement( newContainer )
}

let createQuerySelectContainer = ( father, newContainer, append ) => {
    let newDiv = createDivClass( newContainer )
    appendContainer( append, newDiv )
    return selectQueryClass( father, newContainer )
}

// Función para crear Titulos
let titleGen = ( mainContainer, title ) => {
    let newTitle = createDivClass('title-select')
    appendContainer(mainContainer, newTitle)
    newTitle.innerHTML = title
}

// Crear Galeria
let createGallery = ( mainContainer, titleContainer, title, elements ) =>{
    let newContainer =  createSelectContainer( titleContainer, mainContainer )
    titleGen(newContainer, title)
    let newContainerGal = createQuerySelectContainer( titleContainer, 'gallery', newContainer )
    newContainerGal.innerHTML = elements
}

// Crea las listas de Peliculas

const constructorArr = ( arr, name ) => {
    let movies = ''
    arr.forEach( movie => {
        if( movie.backdrop_path != null){
            movies += `<div><a href=movie.html?id=${movie.id}><img src="${IMG_500_URL}${movie.backdrop_path}" alt="${movie.title}"></a></div>`
        }
    })
    createGallery(mainContainer, name.toLowerCase() , name , movies )
}

// ###### LIBRERIAS ######