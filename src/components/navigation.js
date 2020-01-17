import React from "react";
import "./navigation.css";
import moment from "moment";
import {openWeatherKey} from "../config/config.js";

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
            ],
            weather: {},
            time: moment().format('h:mm:ss a')
        }
        this.showTime = this.showTime.bind(this);
        this.getLocation = this.getLocation.bind(this);
        this.showWeather = this.showWeather.bind(this);
        this.showTime()
        
    }
    showTime(){
        setInterval(()=>{
            this.setState({'time' : moment().format('h:mm:ss a')})
        }, 1000)
    }

    getLocation(options){
        return new Promise((res,rej)=>{
            navigator.geolocation.getCurrentPosition(res, rej, options);
        });
    }

    componentDidMount(){
        this.showWeather()
        console.log(this.state.weather)
    }

    showWeather(){
        let searchUrl = `https://api.openweathermap.org/data/2.5/weather`

        const params = {
            appid: openWeatherKey,
            units: `imperial`
        }

        function formatQueryParams(params){
            const queryItems = Object.keys(params).map(key => `${key}=${params[key]}`)
            return queryItems.join('&');
        }

        const queryString = formatQueryParams(params)
                
        let getCoordinatesSuccess = position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            let q = `lat=${lat}&lon=${lon}`;
            let url = searchUrl+"?"+q+"&"+queryString;

            fetch(url).then((data)=>{
                return data.json()
            }).then(renderData)
        }

        let renderData = data => {
            console.log(data)
            let city = data.name;
            let temp = data.main.temp;
            this.setState({'weather': {city: city, temp: temp}})
        }

        try {
            this.getLocation()
            .then(getCoordinatesSuccess)
            .catch(err => { 
                //can then decided to use default data (or cached data)
                console.log(err)
            });
        }catch(e) {
            console.log(e);
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
                               <p>{this.state.weather.city ? `${this.state.weather.city} ${parseInt(this.state.weather.temp)}${String.fromCharCode(8457)} ` : 'Getting Your City Data...'} | {this.state.time}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}