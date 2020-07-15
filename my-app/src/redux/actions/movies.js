import axios from "axios"
import { FETCH_MOVIES, FETCH_MOVIE, TOP_MOVIES } from "../constans/index"

export const fetchMovies = (movies) => ({
    type: FETCH_MOVIES,
    movies
})

export const fetchMovie = (movie) => ({
    type: FETCH_MOVIE,
    movie
})

export const topViews = (movies) => ({
    type: TOP_MOVIES,
    movies
})


//Pedido a la api imdb para conseguir una pelicula en base al id
export const getMovie = (id) => dispatch => {
    return axios.get(`https://www.omdbapi.com/?apikey=20dac387&i=${id}`)
        .then((res) => dispatch(fetchMovie(res.data)))
}
//Pedido a la api imdb para conseguir toda las peliculas en base a un nombre
export const getMovies = (tittle) => dispatch => {
    return axios.get(` https://www.omdbapi.com/?apikey=20dac387&s=${tittle}`)
        .then((res) => dispatch(fetchMovies(res.data.Search)))
}
//Pedido a nuestra api a cual suma uno al contador de views
export const viewCount = (movie) => dispatch => {
    return axios.post(`http://localhost:8080/api/view/count`, movie)
}

//Pedido a nuestra api a cual suma uno al contador de views
export const mostViews = () => dispatch => {
    return axios.get(`http://localhost:8080/api/view`)
        .then((res) => {
            dispatch(topViews(res.data))
        })
}



