import React from "react"
import { Button } from '@material-ui/core';
import Loading from "../../assets/components/loading"
import Review from "../reviews/reviews"
import "./index.css"

export default ({ movie, loading, user, morePagination, addToFav, commentInput, comment, postComment, reviews }) => {
    return (
        <div className="containerMovie">
            {!loading ? (<Loading></Loading>) : (
                movie.Title ? (
                    <React.Fragment>
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

                        </div>
                        <Review morePagination={morePagination}
                            commentInput={commentInput}
                            comment={comment}
                            postComment={postComment}
                            reviews={reviews}
                            title={"POPULAR REVIEWS"} />
                    </React.Fragment>
                ) : (<div>No llega nada</div>)

            )}


        </div>
    )
}