import React, {useEffect, useState} from "react";
import axios from 'axios';
import './Landing.css';
import { Bar } from 'react-chartjs-2';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

function Landing() {

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: "CO2",
            data: [10, 30, 20, 45, 70, 20, 30, 60, 10, 3, 0, 0],
            backgroundColor: "rgb(0,122,255)",
        }],
    };
    return(
        <div className="Landing">
            <div className="nav">
                <p className="nav-logo">DAT</p>
                <p>Sign up</p>
                <p>FAQ</p>
                <p>Terms of Service</p>
            </div>
            <div className="container-body">
                <div className="selector">
                    <div className="selector-items">
                        <h1>Company cars:</h1>
                        <select>
                            <option value="">John's car, Volvo XC90</option>
                            <option value="">Mike's car, Porsche Macan</option>
                            <option value="">Dave's car, Li auto L9 </option>
                        </select> 
                        
                    </div>
                </div>
                <div className="containers-top-layer">
                    <div className="emissions-container">
                        <div className="emissions-title">
                            <span className="emissions-title-span">Emissions in kg of CO2 per month in</span>
                            <select>
                                <option value="">2023</option>
                                <option value="">2022</option>
                                <option value="">2021</option>
                                <option value="">2020</option>
                            </select>
                        </div>
                        <div className="emissions-chart">
                            <Bar data={data}/>
                        </div>
                    </div>
                    <div className="budget-container">
                        <div className="budget-bin">
                            <div className="budget-text">
                                <span className="budget-percentage">70%</span><br></br>C02 Budget used this month
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="containers-bottom-layer">
                    <div className="driving-container">
                        <p>Driven in August: <b>572 km</b></p>
                        <p>Efficiency score: <b>B+</b></p>
                    </div>
                    <div className="payment-container">
                        <p>Last month's emissions: <b>23,- EUR</b></p>
                        <button type="button" className="payment-button">Pay</button>
                    </div>
                </div>
            </div>    
        </div>
    )
}
export default Landing;
