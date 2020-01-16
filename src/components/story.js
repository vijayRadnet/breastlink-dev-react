import React from "react"
import "./story.css";

export default function Story(props){
    const {media, title, content} = props

    return (
        <section className="featured-story">
            <div className="row">
                <div className="col-md">
                {media}
                </div>
                <div className="col-md">
                    <h2>{title}</h2>
                    <div className="story-blurb">
                        {content}
                    </div>
                </div>
            </div>
         </section>
    )
}