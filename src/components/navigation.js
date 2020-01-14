import React from "react";
import "./navigation.css";

export default class Navigation extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            menu: [
                'breast-centers',
                'womens-imaging',
                'patient-info',
                'about',
                'doctors',
                'services',
                'blog'
            ]
        }
    }

    render(){
        const list = this.state.menu.map((item, idx) => (
            <li key={idx}>
                {item.toUpperCase()}
            </li>
        ));
        return (
            <ul className="navigation-wrap">
                {list}
            </ul>
        )
    }
}