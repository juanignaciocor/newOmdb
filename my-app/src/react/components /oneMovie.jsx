import React, { useEffect, useState } from "react"
import Movie from "../pages/oneMovie/index"
import { connect } from "react-redux"
import { getMovie, viewCount } from "../../redux/actions/movies"
import { addFav, removeFav } from "../../redux/actions/user"
import { likeThis, postReview, fetchMovieReviews, reviews } from "../../redux/actions/comments"

const MovieComponent = ({ getMovie,
    movieID,
    movie,
    viewCount,
    user,
    addFav,
    removeFav,
    fetchMovieReviews,
    postReview,
    likeThis,
    reviews }) => {

    const [loading, setLoading] = useState(false)
    const [comment, setComment] = useState("")
    const [change, setChange] = useState(false)
    const [page, setPage] = useState(1)

    useEffect(() => {
        getMovie(movieID)
            .then((data) => {
                viewCount({ movieId: movieID, movie: data.movie })
                    .then(() => fetchMovieReviews(movieID, page)
                        .then(() => (setTimeout(() => (setLoading(true)), 1000))))
            })
    }, [])

    useEffect(() => {
        fetchMovieReviews(movieID, page)
    }, [change])
    useEffect(() => {
        fetchMovieReviews(movieID, page)
    }, [page])
    const addToFav = (e) => {
        e.preventDefault()
        let sendUser = {
            Title: movie.Title,
            Poster: movie.Poster,
            id: user.id
        }
        addFav(sendUser)
    }

    const removeToFav = (e) => {
        e.preventDefault()
        let sendUser = {
            Title: movie.Title,
            Poster: movie.Poster,
            id: user.id
        }
        removeFav(sendUser)
    }

    const commentInput = (e) => { setComment(e) }

    const morePagination = (e) => {
        e.preventDefault()
        setPage(page + 1)
    }

    const postComment = (e) => {
        e.preventDefault()

        const userComment = { userId: user.id, comments: comment, movieId: movieID }
        if (comment) {
            postReview(userComment)
                .then(() => {
                    setChange(!change)
                    setComment("")
                })
        }

    }

    const oneMoreLike = (commentId) => {
        const like = { id: commentId }
        likeThis(like)
    }

    return (
        <Movie
            loading={loading}
            movie={movie}
            user={user}
            addToFav={addToFav}
            removeToFav={removeToFav}
            commentInput={commentInput}
            postComment={postComment}
            comment={comment}
            oneMoreLike={oneMoreLike}
            reviews={reviews}
            morePagination={morePagination} />
    )
}


const mapStateToProps = function (state, ownProps) {
    return {
        movie: state.movies.film,
        movieID: ownProps.match.params.id,
        user: state.user.logged,
        reviews: state.review.Moviecomments
    }
}
const mapDispatchToProps = function (dispatch, ownprops) {
    return {
        getMovie: (id) => (dispatch(getMovie(id))),
        viewCount: (obj) => (dispatch(viewCount(obj))),
        addFav: (userFav) => (dispatch(addFav(userFav))),
        removeFav: (userFav) => (dispatch(removeFav(userFav))),
        fetchMovieReviews: (id, page) => (dispatch(fetchMovieReviews(id, page))),
        postReview: (review) => (dispatch(postReview(review))),
        likeThis: (commentId) => (dispatch(likeThis(commentId)))
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(MovieComponent));
