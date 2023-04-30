import React from "react";
import Navbar from "../components/navbar";
import imgshame from "../assets/images/undraw_missed_chances_k3cq 1.png"

const Shame = () => {
    return(
        <div>
            <Navbar />
            <div className="shame">
                <h1>Dommage...</h1>
                <img src={imgshame} alt="Deux personnes s'en allent"/>
                <p>Il semblerait que vous n’ayez besoin d’aucune compétence</p>
            </div>
        </div>
    )
}

export default Shame