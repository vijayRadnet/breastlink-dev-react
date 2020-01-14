import React from "react";
import Navigation from "./navigation";
import "./header.css";
import logo from "./images/breastlink-logo.png";
import u from "../util/utility.js"

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            overlayOff: true
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        u(".overlay").toggle()
    }
    render(){
        return (
            <header>
                <img className="logo" src={logo} />
                <Navigation />
                <div className="clearfix" style={{textAlign: "right"}}>
                    <button onClick={this.handleClick}>Make an appointment</button>
                    <p>Los Angeles, CA 73&#8457;</p>
                </div>
            </header>
        )
    }
}

export default Header;