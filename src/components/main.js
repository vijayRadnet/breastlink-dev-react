import React from "react";
import Jumbotron from "./jumbotron";
import "./main.css";
import Navigation from "../components/navigation.js";
import oneFocus from "./images/one-focus.jpg";
import research from "./images/research.jpg";
import patientEducation from "./images/patient-education.jpg";
import _ from "lodash";

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            jumbos:[
                {
                    title: `One Center ${String.fromCharCode(8226)} One Focus ${String.fromCharCode(8226)} One Team`,
                    classes: ['active'],
                    image: research
                }, 
                {
                    title: 'Meet Our Doctors',
                    image: oneFocus
                },
                {
                    title: 'Cancer 101',
                    image: patientEducation
                }
            ]
        }
        this.counter = 0;
        this.timer = null;
        this.jumboLength = this.state.jumbos.length;
        this.cache = null;
        
        this.initCarousel = this.initCarousel.bind(this);
        this.changeCarousel = this.changeCarousel.bind(this);
        this.stopCarousel = this.stopCarousel.bind(this);
       
    }
    componentDidMount(){
       this.initCarousel()
       this.cache = document.querySelectorAll('.jumbotron');
    }
   
    initCarousel(){
        
        this.timer = setInterval(() => {
            if(this.counter==0){
                ++this.counter;
                this.cache[0].classList.remove('active');
                this.cache[this.counter].classList.add('active')
            }
            else if(this.counter < this.jumboLength && this.counter+1 < this.jumboLength){
                ++this.counter;
                this.cache[this.counter-1].classList.remove('active');
                this.cache[this.counter].classList.add('active');
            }else {
                this.counter = 0;
                this.cache[this.jumboLength-1].classList.remove('active')
                this.cache[this.counter].classList.add('active') 
            }
        }, 2000);
    }
    stopCarousel(){
        clearInterval(this.timer);
    }
    changeCarousel(target){
       let id = target.getAttribute('data-jumbo-id')
       id = parseInt(id.substr(id.indexOf('-'+1, id.length)));
       this.stopCarousel();
       if(target.id == "left"){
           console.log(this.counter)
            //if arrow left pushed we want to go back thru the array
            //remove the current div, then go back 1 and make that active
            //going thru this if i hit left at 0, i should go back -1 or to pos 2
            //current is now 2, then i should hit again and it should go to 1
            //then at 1 should go back to 0

            if(this.counter == 0){
                let throttle = _.throttle(()=>{
                    this.cache[this.counter].classList.remove('active');
                    this.cache[this.jumboLength-1].classList.add('active');
                    this.counter = this.jumboLength-1;
                    this.initCarousel()
                }, 300);
                throttle();
            }else{
                let throttle = _.throttle(()=>{
                    this.cache[this.counter].classList.remove('active');
                    this.cache[--this.counter].classList.add('active');
                    this.initCarousel()
                }, 300);
                throttle();
            }
       }else{
            if(this.counter >= this.jumboLength-1){
                this.counter = 0;
                let throttle = _.throttle(()=>{
                    this.cache[this.jumboLength-1].classList.remove('active');
                    this.cache[this.counter].classList.add('active');
                    this.initCarousel()
                }, 300);
                throttle();
            }else{
                //case current div not out of bounds
                let throttle = _.throttle(()=>{
                    this.cache[this.counter].classList.remove('active');
                    this.cache[++this.counter].classList.add('active');
                    this.initCarousel()
                }, 300);
                throttle();
            }
        
       }
    }

    render(){
        const jumbos = this.state.jumbos.map((jumbo, idx)=>{
            let classes = jumbo.classes ? jumbo.classes.join(" ") : '';
            return (
                <Jumbotron key={idx} id={`jumbo-${idx}`} 
                    image={jumbo.image}    
                    jumbotext={jumbo.title} 
                    classes={classes}
                    change={this.changeCarousel} />
            )
        })
    
        return (
            <main className="clearfix">
                <Navigation />
                <div className="slider">{jumbos}</div>
                <p>Some other stuff</p>
            </main>
        )
    }
}

export default Main;