import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./app.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main"; 
import Social from "./components/social";

import u from "./util/utility.js";

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            darkModeOn: false,
            time: new Date()
        }
        this.darkMode = this.darkMode.bind(this);
    }
    componentDidMount(){
        let time = this.state.time;
        if(time.getHours() > 16){
            this.darkMode()
        }
    }

    darkMode(){
        this.setState({'darkModeOn': !this.state.darkModeOn});
    }

    render(){
        return (
            <div className={`app ${this.state.darkModeOn ? 'dark':''}`}>
                <Header darkModeClick={this.darkMode} darkModeOn={this.state.darkModeOn}/>
                <Main />
                <Social />
                <Footer/>
                <div className="overlay">Hello World</div>
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);

//document.body.appendChild(component("Hello south park"));