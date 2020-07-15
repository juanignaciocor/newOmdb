import React, { useEffect, useState } from "react"
import Movie from "../pages/movie"
import { connect } from "react-redux"
import Logger from "../pages/loguer /index"
import { loguear } from "../../redux/actions/user"

const HomeComponent = ({ loguear, history }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handlerChange = (e) => {
        if (e.target.name === "username") {
            setUsername(e.target.value)
        }
        if (e.target.name === "password") {
            setPassword(e.target.value)
        }
    }
    const fetchUser = (e) => {
        e.preventDefault()
        loguear({ username, password })
            .then(() => history.push("./home"))
    }
    return (
        <Logger handlerChange={handlerChange}
            username={username}
            password={password}
            fetchUser={fetchUser}
        ></Logger>
    )
}


const mapStateToProps = function (state, ownProps) {
    return {
        history: ownProps.history
    }
}
const mapDispatchToProps = function (dispatch, ownprops) {
    return {
        loguear: (user) => dispatch(loguear(user))
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(HomeComponent));
