import React from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import { useState } from "react";

const Question = () => {

    const [choice, setChoice] = useState("")
    const [ocolor, setoColor] = useState("white")
    const [ncolor, setnColor] = useState("white")


    return (
        <div>
            <Navbar />
            <div className="question">
                <h1>Question 1</h1>
                <p>Votre application doit-elle impérativement apparaître en premier dans les résultats de recherche ?</p>
                <div className="yesorno">
                    <button className={"oui " + ocolor} onClick={() => {
                        setChoice(choice + "/besoin")
                        setoColor("blue")
                    }}>OUI</button>
                    <button className={"non " + ncolor}onClick={() => {
                        setChoice(choice + "/dommage")
                        setnColor("blue")
                    }}>NON</button>
                </div>
                <div className="bforaf">
                    <Link to="/">Précédent</Link>
                    <Link to={choice}>Suivant</Link>    
                </div>
            </div>
        </div>
    )
}




export default Question