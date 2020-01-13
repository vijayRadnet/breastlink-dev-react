import React from "react";
import Jumbotron from "./jumbotron";
import "./main.css";

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            jumbos:['Patient Care', 'Patient Education']
        }
    }
    render(){
        const jumbos = this.state.jumbos.map((jumbo, idx)=>{
            return (
                <Jumbotron key={idx} jumbotext={jumbo} />
            )
        })
    
        return (
            <main className="clearfix">
                {jumbos}
                <p>Some other stuff</p>
            </main>
        )
    }
}

export default Main;