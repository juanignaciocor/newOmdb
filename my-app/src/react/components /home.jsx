import React, { useEffect, useState } from "react"
import Movie from "../pages/movie"
import { connect } from "react-redux"
import Carrousel from "../assets/components/carrousel"
import Home from "../pages/home/index"
import { mostViews } from "../../redux/actions/movies"

const HomeComponent = ({ mostViews, topMovies }) => {
    useEffect(() => {
        mostViews()
    }, [])
    return (
        <React.Fragment>

            <Home topMovies={topMovies}></Home>
        </React.Fragment>
    )
}


const mapStateToProps = function (state, ownprops) {
    return {
        topMovies: state.movies.topMovies
    }
}
const mapDispatchToProps = function (dispatch, ownprops) {
    return {
        mostViews: () => dispatch(mostViews())
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(HomeComponent));
