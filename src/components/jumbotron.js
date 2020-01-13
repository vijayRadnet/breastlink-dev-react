import React from "react";
import "./jumbotron.css";
import sydneyRae from "./images/sydney-rae.jpg";

export default function Jumbotron(props){
    const {jumbotext} = props 
    return (
        <section className="jumbotron">
            <p className="jumbotext">{jumbotext}</p>
            <img src={sydneyRae} />
        </section>
    )
}
