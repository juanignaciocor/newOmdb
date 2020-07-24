import React from "react"
import { Link } from "react-router-dom"
import "./index.css"
export default ({ movies }) => {
    return (
        <div className="container-Movies">
            <div className="columns">
                {movies.length >= 1 ? (

                    movies.map((pelicula, index) => {
                        return (
                            <div className="Movies-Card" key={pelicula.imdbID}>
                                <Link to={`/movies/${pelicula.imdbID}`} >
                                    <div className="MoviesImg-Card">
                                        <img className="MoviesImg" src={pelicula.Poster}></img>
                                    </div>
                                </Link>
                                <div className="Movies-text-cont">
                                    <h2 className="Movies-text-Tittle">{pelicula.Title}</h2>
                                    <h2 className="Movies-text-Description"> Año de la pelicula: {pelicula.Year}</h2>
                                </div>


                            </div>

                        )

                    })



                ) : (<div>Loading</div>)}


            </div>
        </div>


    )
}