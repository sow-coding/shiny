import React from "react";
import Navbar from "../components/navbar";
import formphoto from '../assets/images/formphoto.png'
import Testbtn from "../components/testbtn";

const Host = () => {
    return (
        <div className="hostContainer">
            <Navbar />

            <div className="host-bottom">
                <div className="host-bottom-left">
                    <h1>Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents</h1>
                    <Testbtn />
                </div>
                <div className="host-bottom-right">
                    <img src={formphoto} alt="photo de formulaire" />
                </div>
            </div>
        </div>
    )
}

export default Host