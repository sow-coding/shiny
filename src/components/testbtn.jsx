import React from "react";
import { Link } from "react-router-dom";

const Testbtn = () => {
    return (
        <Link to="/question">
        <button className="testbtn">Faire le test</button>
        </Link>
    )
}

export default Testbtn