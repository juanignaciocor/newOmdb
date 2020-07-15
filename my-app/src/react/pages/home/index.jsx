import React from "react"
import { Link } from "react-router-dom"

import "./index.css"
export default ({ topMovies }) => {
    return (
        <div className="container">
            <div >
                <div>
                    <p className="bienvenido">Bienvenido a la OMDB !!<br></br>
                     Aqui encontrara un catalogo de peliculas y series puntuadas por distintos usuarios.Tambien podra agregar amigos,calificar, comentar dichas peliculas/series  </p>
                </div>
                <h2 className="title focus-in-expand-fwd">Box Office Movies</h2>
                <div className="imgGrid">
                    {topMovies.length >= 1 ? (topMovies.map((elemento) => {
                        return (
                            <div className="containerCart" key={elemento["_id"]}>
                                <div className="containerImage">
                                    <Link to={`/movies/${elemento.movie[0].imdbID}`}><img className="shadow-pop-tr imagen" src={elemento.movie[0].Poster}></img></Link>

                                </div>
                                <div className="containerText">
                                    <p>Raiting: 8</p>
                                </div>
                            </div>
                        )
                    })) : (null)}

                </div>



            </div>
        </div>
    )
}