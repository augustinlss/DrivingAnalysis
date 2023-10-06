import React, {useEffect, useState} from "react";
import axios from 'axios';
import './Landing.css';

function Landing() {
    return(
        <div className="Landing">
            <div className="nav">
                <p>LOGO</p>
                <p>Sign up</p>
                <p>FAQ</p>
                <p>Terms of Service</p>
            </div>
            <div className="container-body">
                <select>
                    <option value="">John's car Volvo XC90</option>
                </select>
            </div>
        </div>
    )
}
export default Landing;
