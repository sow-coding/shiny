import React from "react";
import Navbar from "../components/navbar";
import Profilcard from "../components/profilcard";

const Profil = ()  => {
    return (
        <div>
            <Navbar />
            <div className="profilContainer">
                <h1>Trouvez votre prestataire</h1>
                <p className="vision">Chez Shiny nous réunissons les meilleurs profils pour vous.</p>
                <div className="profils">
                    <div className="profils-top">
                    <Profilcard job="UX Designer" name="Jean Doe"/>
                    <Profilcard job="Développeur frontend" name="Alexendre Dupont"/>
                    </div>
                    <div className="profils-bottom">
                    <Profilcard job="Devops" name="Jean Biche"/>
                    <Profilcard job="UI Designer" name="Laurent Ipsum"/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profil