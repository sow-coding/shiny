import React from "react";
import { Link } from "react-router-dom";

const Profilbtn = () => {
    return (
        <Link to="/profils">
        <button className="profilbtn">Découvrir nos profils</button>
        </Link>
    )
}

export default Profilbtn