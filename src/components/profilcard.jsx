import React from "react";
import imgprofil from "../assets/images/homme-medecine-chirurgie-esthetique-dr-benouaiche-paris.jpg"
import { Link } from "react-router-dom";

const Profilcard = (props) => {
    return (
        <Link to="/freelance">
        <div className="card">
            <p>{props.job}</p>
            <div className="who">
                <img src={imgprofil} alt="un profil"/>
                <p>{props.name}</p>
            </div>
        </div>
        </Link>
    )
}

export default Profilcard