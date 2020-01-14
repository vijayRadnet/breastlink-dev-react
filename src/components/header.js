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
                <div style={{float:'left'}}><img className="logo" src={logo} /></div>
                <div style={{float:'right', textAlign: "right", paddingTop: '20px'}}>
                    <button className="btn btn-info" onClick={this.handleClick}>Make an appointment</button>
                    <p>Los Angeles, CA 73{String.fromCharCode(8457)}</p>
                </div>
                <div className="clearfix"></div>
            </header>
        )
    }
}

export default Header;