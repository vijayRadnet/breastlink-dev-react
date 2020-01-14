import React from "react";
import ReactDOM from "react-dom";
import "./app.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import u from "./util/utility.js";

class App extends React.Component {
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){

       // u(".overlay").toggle()
    }

    render(){
        return (
            <div className="app">
                <Header/>
                <Main />
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