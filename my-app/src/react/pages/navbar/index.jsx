import React from 'react';
import { Link } from "react-router-dom"
import logo from "../../assets/icons/logo.png"
import "./index.css"



export default function SearchAppBar({ setSearch, Search, submit, logOut, user }) {

    return (
        <header className="headerSection">
            <div className="gradienteHeader">
                <div className="headerLogo">
                    <img src={logo} alt="movieLogo"></img>

                </div>
                <section className="navbarSection">
                    <Link to="/home">Home</Link>
                    {user.username ? (<Link to="/home" onClick={logOut}>Log Out</Link>) :
                        (<React.Fragment>
                            <Link to="/logger">Log in</Link>
                            <Link to="/register">Register</Link>
                        </React.Fragment>
                        )}
                    <Link to="/profile">Profile</Link>

                </section>
                <div className="headerFormulario">
                    <form onSubmit={submit}>
                        <input
                            placeholder="Search…"
                            type="text"
                            onChange={(e) => {
                                return setSearch(e.target.value)
                            }}
                            value={Search}></input>
                    </form>
                </div>
            </div>
        </header>
    )
}
