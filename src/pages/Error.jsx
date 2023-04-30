import React from "react";
import Navbar from "../components/navbar";
import errorimg from "../assets/images/undraw_page_not_found_su7k 1.svg"

const Error = () => {
    return (
        <div>
            <Navbar />
            <div className="errorContainer">
                <h1 className="oups">Oups...</h1>
                <img src={errorimg} alt="photo de 404"/>
                <h1>Il semblerait qu’il y ait un problème</h1>
            </div>
        </div>
    )
}

export default Error