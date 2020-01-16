import React, { useCallback } from "react"
import "./midsection.css";
import Story from "./story.js"
import gsap from "gsap";
import $ from "jquery";

export default class Midsection extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            items: [
                'Meet the doctors',
                'Breast Cancer 101',
                'Find a center near you',
                'Pay your bill',
                'Education',
                'Second opinion',
                'Risk Assessment Program',
                'Breast Imaging',
                'Nutrition & FAQ 101',
                'Surgery',
                'Oncology',
                'Radiation Therapy'
            ]
        }
        this.runAnimation = this.runAnimation.bind(this);
    }
    runAnimation(id, cb1, cb2){
      $(window).scroll(function(){
          let docViewTop = $(window).scrollTop();
          let docViewBottom = docViewTop + $(window).height();

          let elemTop = $(id).offset().top;
          let elemBotttom = elemTop + $(id).height();

          let inView = ((docViewBottom > elemTop) && (docViewTop < elemBotttom)) ? true : false;
        
          inView ? cb1() : cb2();
      })  
    }


    componentDidMount(){
        let id = $("#midsection");
        this.runAnimation(id, () =>{
            console.log('animation 1')
            gsap.to(id, 2, {
                top: '0px',
                opacity: 1
            });
        }, () =>{
            console.log('animation 2')
            gsap.to(id, 2, {
                top: '200px',
                opacity: 0
            });
        })
    }

  
    render(){
        const list = this.state.items.map((item, idx) => {
            return (
                <div key={idx} className="col-sm mid-links">
                    <button className="btn btn-info">{item}</button>
                </div>
            )
        })

        return ( //refactor
            <div id="midsection" className="midsection spacer">
                <section className="container">
                    <div className="row">
                        {list.slice(0,3)}
                    </div>
                    <div className="row">
                        {list.slice(3,6)}
                    </div>
                </section>
               
               <Story 
                    title={`Take Charge of Your Health`} 
                    content={`We Are RadNet. RadNet has been delivering high-quality healthcare for over 35 years, leading the industry as the largest provider of outpatient imaging in the US.`} 
                    media={<iframe width="560" height="315" src="https://www.youtube.com/embed/xchRt8QIF9Q" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}/>
                <section className="container">
                    <div className="row">
                        {list.slice(6,9)}
                    </div>
                    <div className="row">
                        {list.slice(9,list.length)}
                    </div>
                </section>
            </div>
        )
    }

}

