import React from "react";
import "./jumbotron.css";


export default function Jumbotron(props){
    const {jumbotext, classes, id, image, change} = props 
    let bgImage = {
        backgroundImage: `url(${image})`
    }

    const handleClick = e => {
         change(e.target)
    }
 
    return (
        <section id={id} className={`jumbotron ${classes ? classes : ''}`} 
            style={bgImage}>
           
            <p className="jumbotext">{jumbotext}</p>
            <div className="jumbogradient">
            <button id={`left`} data-jumbo-id={id} onClick={handleClick}>{`<<`}</button>
            <button id={`right`} data-jumbo-id={id} onClick={handleClick}>{`>>`}</button>
            </div>
        </section>
    )
}
