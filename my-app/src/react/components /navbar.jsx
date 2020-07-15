import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { getMovies } from "../../redux/actions/movies"
import { desloguear } from "../../redux/actions/user"

import NavBar from "../pages/navbar/index"


const NavBarComponent = ({ getMovies, history, desloguear, user }) => {
    const [search, setSearch] = useState("")


    const onSubmit = (e) => {
        e.preventDefault()
        getMovies(search)
            .then(() => history.push("/movies"))
    }
    return (
        <NavBar
            setSearch={setSearch}
            search={search}
            submit={onSubmit}
            logOut={desloguear}
            user={user} />
    )
}


const matchStateToProps = function (state, ownProps) {
    return {
        history: ownProps.history,
        user: state.user.logged
    }
}
const matchDispatchToProps = function (dispatch, ownprops) {
    return {
        getMovies: (title) => (dispatch(getMovies(title))),
        desloguear: () => (dispatch(desloguear()))

    }
}

export default connect(matchStateToProps, matchDispatchToProps)(NavBarComponent);
