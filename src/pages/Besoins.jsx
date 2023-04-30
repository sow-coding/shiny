import React from "react";
import Navbar from "../components/navbar";
import Profilbtn from "../components/profilbtn";

const Besoin = () => {
    return (
        <div className="besoinContainer">
            <Navbar />
            <div className="besoinText">
                <h1>Les compétences dont vous avez besoin : <span className="stack">UX Design, frontend, backend</span></h1>
                <Profilbtn />
                <div className="text">
                    <div className="textUn">
                        <h3>UX Design</h3>
                        <p>UX Design Le rôle de l’UX est de Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
                    </div>
                    <div className="textDeux">
                        <h3>Frontend</h3>
                        <p>Frontend dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                    </div>
                    <div className="textTrois">
                        <h3>Backend</h3>
                        <p>Backend consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Besoin