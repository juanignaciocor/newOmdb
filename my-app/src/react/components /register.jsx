import React, { useEffect, useState } from "react"
import Register from "../pages/register"
import { connect } from "react-redux"
import { createUser } from "../../redux/actions/user"

const RegisterComponent = ({ createUser }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")

    const handlerChange = (e) => {
        if (e.target.name === "username") {
            setUsername(e.target.value)
        }
        if (e.target.name === "password") {
            setPassword(e.target.value)
        }
        if (e.target.name === "email") {
            setEmail(e.target.value)
        }
        if (e.target.name === "age") {
            setAge(e.target.value)
        }
    }
    const registerUser = (e) => {
        e.preventDefault()
        createUser({ username, password, email, age })
    }
    return (
        <Register
            handlerChange={handlerChange}
            registerUser={registerUser}
            username={username}
            password={password}
            email={email}
            age={age}
        ></Register>
    )
}


const mapStateToProps = function (state, ownProps) {
    return {
    }
}
const mapDispatchToProps = function (dispatch, ownprops) {
    return {
        createUser: (obj) => dispatch(createUser(obj))
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(RegisterComponent));
