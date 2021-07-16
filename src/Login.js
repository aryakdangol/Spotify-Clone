import React from 'react'
import "./Login.css"
import Spotifylogo from './images/logo-white.png'
import {loginUrl} from './spotify';
function Login(){
    return(
        <div className = "login">
            {/*Spotify logo  */}
            <img src = {Spotifylogo} alt = "" />
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login;