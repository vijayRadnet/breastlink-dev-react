import React from "react";
import "./jumbotron.css";


export default function Jumbotron(props){
    const {jumbotext, classes, id, image} = props 
    let bgImage = {
        backgroundImage: `url(${image})`
    }
    console.log(bgImage)

    return (
        <section id={id} className={`jumbotron ${classes ? classes : ''}`} 
            style={bgImage}>
            <p className="jumbotext">{jumbotext}</p>
            <div className="jumbogradient"></div>
        </section>
    )
}
