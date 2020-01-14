import React from "react";
import Jumbotron from "./jumbotron";
import "./main.css";
import sydneyRae from "./images/sydney-rae.jpg";
import oneFocus from "./images/one-focus.jpg";
import research from "./images/research.jpg";
import patientEducation from "./images/patient-education.jpg";

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            jumbos:[
                {
                    title: 'Patient Care',
                    classes: ['active'],
                    image: research
                }, 
                {
                    title: 'Patient Education',
                    image: oneFocus
                },
                {
                    title: 'Patient Education 2',
                    image: patientEducation
                }
            ]
        }
       
    }
    componentDidMount(){
       this.changeJumbo()
    }

    changeJumbo(){
        let i = 0;
        let jumboLength = this.state.jumbos.length;
        let cache = document.querySelectorAll('.jumbotron');
      
        setInterval(() => {
            if(i==0){
                ++i;
                cache[0].classList.remove('active');
                cache[i].classList.add('active')
            }
            else if(i < jumboLength && i+1 < jumboLength){
                ++i;
                cache[i-1].classList.remove('active');
                cache[i].classList.add('active');
            }else {
                i = 0;
                cache[jumboLength-1].classList.remove('active')
                cache[i].classList.add('active') 
            }
        }, 4000)
    }

    render(){
        const jumbos = this.state.jumbos.map((jumbo, idx)=>{
            let classes = jumbo.classes ? jumbo.classes.join(" ") : '';
            return (
                <Jumbotron key={idx} id={`jumbo-${idx}`} 
                    image={jumbo.image}    
                    jumbotext={jumbo.title} 
                    classes={classes} />
            )
        })
    
        return (
            <main className="clearfix">
                <div className="slider">{jumbos}</div>
                <p>Some other stuff</p>
            </main>
        )
    }
}

export default Main;