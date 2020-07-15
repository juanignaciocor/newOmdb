import React, { useEffect, useState } from "react"
import Movie from "../pages/movie"
import { connect } from "react-redux"


const MoviesComponent = ({ movies }) => {
    useEffect(() => {

    })
    return (
        <Movie movies={movies} />
    )
}


const mapStateToProps = function (state, ownprops) {
    return {
        movies: state.movies.films
    }
}
const mapDispatchToProps = function (dispatch, ownprops) {
    return {

    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(MoviesComponent));
