import React from "react"
import { Route, Switch } from "react-router-dom"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import Movies from "./movies"
import Navbar from "./navbar"
import Movie from "./oneMovie"
import Home from "./home"
import Logger from "./loguin"
import Register from "./register"
import Profile from "./profile"
import Footer from "../pages/footer/index"
import { logCookie } from "../../redux/actions/user"
import "../pages/main/index.css"

class Main extends React.Component {

    constructor() {
        super()

    }
    componentDidMount() {
    }
    render() {
        return (
            <React.Fragment>
                <Route path="/" component={Navbar}></Route>
                <Switch>
                    <Route exact path="/profile" component={Profile}></Route>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/movies" component={Movies}></Route>
                    <Route exact path="/movies/:id" component={Movie}></Route>
                    <Route exact path="/register" component={Register}></Route>
                    <Route exact path="/logger" component={Logger}></Route>

                </Switch>
                <Route path="/" component={Footer}></Route>

            </React.Fragment>
        )
    }
}
const matchDispatchToProps = function (dispatch, ownprops) {
    return {
        logCookie: () => dispatch(logCookie())

    }
}

export default withRouter(connect(null, matchDispatchToProps)(Main));
