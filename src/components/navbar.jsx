import React from "react";
import { Link } from "react-router-dom";
import Testbtn from "./testbtn";
import logoshiny from "../assets/images/logoshiny.png"

const navbar = () => {
    return (

        <div className="hostContainer">
            <div className="host-top">
                <div className="host-top-left">
                    <div className="logo">
                        <img src={logoshiny} alt="logo"/>
                        <h1>Shiny</h1>
                    </div>
                </div>
                
                <div className="host-top-right">
                    <div className="navbar">
                        <Link to="/" className="acceuil">Accueil</Link>
                        <Link to="/profils" className="profils">Profils</Link>
                        <Testbtn />
                    </div>
                </div>
            </div>
        </div>

        /*<div className="navbar">
        <Link to="/">Accueil</Link>
        <Link to="/">Profils</Link>
        <Testbtn />
        </div>*/

    )
}

export default navbar