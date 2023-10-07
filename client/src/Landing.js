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
            backgroundColor: "blue",
        }],
    };
    return(
        <div className="Landing">
            <div className="nav">
                <p>LOGO</p>
                <p>Sign up</p>
                <p>FAQ</p>
                <p>Terms of Service</p>
            </div>
            <div className="container-body">
                <div className="selector">
                    <div className="selector-items">
                        <h1>John's car</h1>
                        <select>
                            <option value="">Volvo XC90</option>
                        </select> 
                        
                    </div>
                </div>
                <div className="containers-top-layer">
                    <div className="emissions-container">
                        <div className="emissions-title">
                            Emissions in kg of CO2 per month in
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
                                0% C02 Budget used this month
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="containers-bottom-layer">
                    
                </div>
            </div>
        </div>
    )
}
export default Landing;
