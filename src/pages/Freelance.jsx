import React from "react";
import Navbar from "../components/navbar"
import imgfreelance from "../assets/images/homme-medecine-chirurgie-esthetique-dr-benouaiche-paris.jpg" 
import Stack from "../components/stack";

const Freelance = () => {
    return (
        <div>
            <Navbar />
            <div className="freelanceContainer">
                <div className="freelance-card">
                    <div className="freelance-card-left">
                        <img src={imgfreelance} alt="freelance"/>
                    </div>
                    <div className="freelance-card-right">
                        <div className="freelance-card-right-top">
                            <h1>Jean Doe</h1>
                            <p>Paris, France</p>
                        </div>
                        <div className="freelance-card-right-bottom">
                            <h1>Développeur Fullstack</h1>
                            <div className="stacks">
                            <Stack /> 
                            <Stack />
                            <Stack />
                            </div>
                            <div className="dispo">
                                <div className="green"></div>
                                <p>Disponible maintenant</p>
                            </div>

                            <h2>550 € / JOUR</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Freelance