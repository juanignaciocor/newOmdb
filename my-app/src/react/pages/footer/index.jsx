import React from "react"
import { SvgIcon } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import logo from "../../assets/icons/logo.png"
import "./footer.css"

export default () => {
    return (
        <div className="containerFooter">
            <div className="logo">
                <img className="logoImage" src={logo} alt="movieLogo"></img>
            </div>
            <div className="contact">
                <p>juanignaciocor92@gmail.com</p>
            </div>
            <div className="webSocial">
                <FacebookIcon></FacebookIcon>
                <InstagramIcon></InstagramIcon>
                <LinkedInIcon></LinkedInIcon>

            </div>


        </div>
    )
}