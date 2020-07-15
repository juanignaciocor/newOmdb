import React from "react"
import { Button } from '@material-ui/core';
import Loading from "../../assets/components/loading"
import "./index.css"
export default ({ movie, loading, user, addToFav }) => {
    return (
        <div className="containerMovie">
            {!loading ? (<Loading></Loading>) : (

                movie.Title ? (
                    <div className="card">
                        <div className="card_left">
                            <img src={movie.Poster} />
                        </div>
                        <div className="card_right">
                            <h1>{movie.Title}</h1>
                            <div className="card_details">
                                <ul>
                                    <li>{movie.Year}</li>
                                    <li>{movie.Runtime}</li>
                                    <li>{movie.Director}</li>
                                </ul>
                            </div>
                            <div className="card_review">
                                <p>{movie.Plot}</p>
                            </div>
                            <button className="card_button" onClick={(e) => addToFav(e)}>Favorito</button>

                        </div>

                    </div>) : (<div>No llega nada</div>)

            )}
            <div>
                <div className="containerComents">
                    <div className="comments">
                        <p>User: Juan Ignacio Cor</p>
                        <p>Comentario: gran comentario</p>
                    </div>

                </div>
            </div>

        </div>
    )
}