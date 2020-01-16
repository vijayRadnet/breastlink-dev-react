import React from "react";
import "./social.css";
import Story from "./story.js"
import giveBlood from "./images/giveblood.jpg";

export default function Social(props){
    const {media, title, content} = props


    

    return (
        <section className="social">
            <div>
            <Story 
                    title={`National Blood Donor Month`} 
                    content={<p>
                        The need for blood is critical. In fact, according to the American Red Cross, someone in the US needs blood every two seconds, and just one donation can save as many as three lives.
Celebrate National Blood Donor Month this January and help save a life ♥️
#RadNet #NationalBloodDonorMonth @americanredcross
                    </p>} 
                    media={<img src={giveBlood} style={{maxWidth: 300, maxHeight: 300}} />}/>
            </div>
        </section>
    )
}