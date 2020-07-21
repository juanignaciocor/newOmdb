import React from "react"
import { Button } from '@material-ui/core';
import Loading from "../../assets/components/loading"
import "./index.css"

export default ({ movie, loading, user, morePagination, addToFav, commentInput, comment, postComment, reviews }) => {
    return (
        <div className="containerMovie">
            {!loading ? (<Loading></Loading>) : (

                movie.Title ? (
                    <React.Fragment>  <div className="card">
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
                        <div className="containerReviews">
                            <h2 className="section-heading">POPULAR REVIEWS</h2>
                            <div className="containerComents">
                                {reviews.map((elemento) => {
                                    return (
                                        <div className="comments" key={elemento._id}>
                                            <div className="leftProfile">
                                                <p className="reviewBy">Review by <span className="name">{elemento.userId.username}</span></p>
                                                <div className="containerImage">
                                                    <img className="profileImage" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"></img>
                                                </div>

                                            </div>
                                            <div className="review">
                                                <p>{elemento.comments}</p>

                                            </div>
                                        </div>
                                    )
                                })}


                            </div>
                            <div className="containerMore">
                                <span className="more" onClick={(e) => morePagination(e)}> More </span>
                            </div>
                            <div className="postReview">
                                <h2 className="section-heading">POST REVIEW</h2>
                                <div className="form__group field">
                                    <form onSubmit={(e) => postComment(e)} >
                                        <label className="form__label">Comment</label>

                                        <textarea
                                            className="form__field"
                                            rows="8"
                                            cols="40"
                                            onChange={(e) => commentInput(e.target.value)}
                                            value={comment}
                                        ></textarea>
                                        <input type="submit" value="send"></input>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </React.Fragment>
                ) : (<div>No llega nada</div>)

            )}


        </div>
    )
}