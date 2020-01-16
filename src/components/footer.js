import React from "react";
import "./footer.css";
import logo from "./images/breastlink-logo.png";

function Footer(props){
    return (
        <footer> 
            <div className="container-fluid">

                <div className="container">
                    <div className="row">
                        <div className="col-lg spacer">
                            <img className="logo" src={logo} /> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <h4>About</h4>
                            <ul>
                                <li>About RadNet</li>
                                <li>Our Radiologists</li>
                                <li>Imaging Centers</li>
                                <li>History</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div className="col-sm">
                            <h4>Patient Information</h4>
                            <ul>
                                <li>Patient Portal</li>
                                <li>Pay Bill</li>
                                <li>Insurance Information</li>
                                <li>Patient Forms</li>
                            </ul>
                        </div>
                        <div className="col-sm">
                            <h4>Services</h4>
                            <ul>
                                <li>MRI</li>
                                <li>X-Ray</li>
                                <li>CT</li>
                                <li>Ultrasound</li>
                                <li>Mammography</li>
                            </ul>
                        </div>
                        <div className="col-sm">
                            <h4>Social Media</h4>
                            <ul>
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>Twitter</li>
                                <li>Pinterest</li>
                                <li>Youtube</li>
                            </ul>
                        </div>
                    </div>
                    <div className="disclaimer">
                        <div className="row">
                            <div className="col-sm">
                                &copy; 2020 Breastlink
                            </div>
                            <div className="col-sm">
                                Privacy Statement
                            </div>
                            <div className="col-sm">
                                Disclaimer
                            </div>
                            <div className="col-sm">
                                HIPAA Notification
                            </div>
                            <div className="col-sm">
                                Anti Discrimination Policy
                            </div>
                        </div>
                    </div>
                </div>
             </div>
           
        </footer>
    )
}

export default Footer;