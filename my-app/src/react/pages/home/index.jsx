import React from "react"
import { Link } from "react-router-dom"
import VisibilityIcon from '@material-ui/icons/Visibility';
import StarIcon from '@material-ui/icons/Star';

import "./index.css"
export default ({ topMovies }) => {
    return (
        <div className="container">
            <div >
                <div className="gradiente">
                    <img src="https://i.imgur.com/OdMte8m.jpg" className="imagengradiente gradiente"></img>
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
                                    <div className="iconPossLeft">
                                        <VisibilityIcon className="visibilityIcon"></VisibilityIcon>
                                        <span className="iconText">{elemento.count}</span>
                                    </div>
                                    <div className="iconPossRight">
                                        <StarIcon className="starIcon"></StarIcon>
                                        <span className="iconText">{elemento.movie[0].imdbRating}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })) : (null)}

                </div>



            </div>
        </div>
    )
}