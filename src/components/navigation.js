import React from "react";
import "./navigation.css";

export default class Navigation extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            menu: [
                'Find A Location',
                'Womens Imaging',
                'Patient info',
                'Doctors',
                'Services',
                'Blog',
            ]
        }
    }

    render(){
        const list = this.state.menu.map((item, idx) => (
            <div className="col-sm" key={idx}>
                {item.toUpperCase()}
            </div>
        ));
        return (
            <div className="navigation-wrap">
                <div className="row">
                    <div className="nav-items col-lg">
                        <div className="container">
                            <div className="row">
                                {list.slice(0,3)}

                            </div>
                            <div className="row">
                                {list.slice(3,list.length)}
                            </div>
                        </div>
                    </div>
                     <div className="col-lg">
                        <div className="container">
                            <div id="search-site" className="input-group">
                                <input className="form-control" type="text" placeholder="Search" />  
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary">Go</button> 
                                </div>
                            </div>
                            <div className="weather-info text-right">
                               <p>Los Angeles, CA 73{String.fromCharCode(8457)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}