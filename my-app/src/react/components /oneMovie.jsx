import React, { useEffect, useState } from "react"
import Movie from "../pages/oneMovie/index"
import { connect } from "react-redux"
import { getMovie, viewCount } from "../../redux/actions/movies"
import { addFav, removeFav } from "../../redux/actions/user"


const MovieComponent = ({ getMovie,
    movieID,
    movie,
    viewCount,
    user,
    addFav,
    removeFav }) => {

    const [loading, setLoading] = useState(false)
    useEffect(() => {
        getMovie(movieID)
            .then((data) => {
                viewCount({ movieId: movieID, movie: data.movie })
                    .then(() => setTimeout(() => (setLoading(true)), 1000)
                    )
            })
    }, [])

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
    return (
        <Movie
            loading={loading}
            movie={movie}
            user={user}
            addToFav={addToFav}
            removeToFav={removeToFav} />
    )
}


const mapStateToProps = function (state, ownProps) {
    return {
        movie: state.movies.film,
        movieID: ownProps.match.params.id,
        user: state.user.logged
    }
}
const mapDispatchToProps = function (dispatch, ownprops) {
    return {
        getMovie: (id) => (dispatch(getMovie(id))),
        viewCount: (obj) => (dispatch(viewCount(obj))),
        addFav: (userFav) => (dispatch(addFav(userFav))),
        removeFav: (userFav) => (dispatch(removeFav(userFav)))
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(MovieComponent));
