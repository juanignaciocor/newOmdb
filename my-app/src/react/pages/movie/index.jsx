import React from "react"
import { Link } from "react-router-dom"
import "./index.css"
export default ({ movies }) => {
    return (

        <div id="columns">
            ({movies.length >= 1 ? (

                movies.map((pelicula, index) => {
                    return (
                        <figure key={pelicula.imdbID}>
                            <figcaption>
                                <h2 >{pelicula.Title}</h2>
                                <h2 > Año de la pelicula: {pelicula.Year}</h2>
                            </figcaption>
                            <Link to={`/movies/${pelicula.imdbID}`} >
                                <img src={pelicula.Poster}></img>
                            </Link>

                        </figure>

                    )

                })



            ) : (<div>Loading</div>)})


        </div>

    )
}