import React from "react"
import { Link } from "react-router-dom"
import VisibilityIcon from '@material-ui/icons/Visibility';
import StarIcon from '@material-ui/icons/Star';
import Review from "../reviews/reviews"
import Carrousel from "../../assets/components/carrousel"

import "./index.css"
export default ({ topMovies, commentInput, morePagination, postComment, reviews, comment }) => {
    return (
        <div className="container">
            <div >
                <div className="imagengradiente" >
                    <div className="gradiente"></div>
                </div>
                <h2 className="section-mostpopular">MOST POPULAR</h2>
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
                                        <span className="textIcon">{elemento.count}</span>
                                    </div>
                                    <div className="iconPossRight">
                                        <StarIcon className="starIcon"></StarIcon>
                                        <span className="textIcon">{elemento.movie[0].imdbRating}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })) : (null)}

                </div>
                <h2 className="section-next">
                    next releases</h2>
                <Carrousel></Carrousel>
                <Review morePagination={morePagination}
                    commentInput={commentInput}
                    comment={comment}
                    postComment={postComment}
                    reviews={reviews}
                    title={"Page reviews"} />


            </div>
        </div>
    )
}