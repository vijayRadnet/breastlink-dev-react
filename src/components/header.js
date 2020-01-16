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
        this.darkMode = this.darkMode.bind(this);
    }
    darkMode(){
        this.props.darkModeClick()
    }
    handleClick(){
        u(".overlay").toggle()
    }
    render(){
        return (
            <header>
                <div><img className="logo" src={logo} /><sup>DEV</sup></div>
                <div className="button-menu">
                    <button className="btn btn-info dark-mode" onClick={this.darkMode}>{this.props.darkModeOn ? 'Light': 'Dark'} Mode</button>
                    <button className="btn btn-info btn-wow" onClick={this.handleClick}>Make an appointment</button>
                    
                </div>
                <div className="clearfix"></div>
            </header>
        )
    }
}

export default Header;