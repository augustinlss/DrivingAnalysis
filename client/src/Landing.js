import React, {useEffect, useState} from "react";
import axios from 'axios';
import './Landing.css';
import { Bar } from 'react-chartjs-2';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

function Landing() {

    const handleClick = () => {
        sendData();
        async function sendData() {
            try {
                const json = {
                    "name": "John",
                    "car": "Toyota Camry",
                    "trip": {
                        "start_time": "2023-09-20T08:00:00",
                        "end_time": "2023-09-20T09:30:00",
                        "distance": 45.2, 
                        "average_speed": 30, 
                        "route": [
                        {
                            "timestamp": "2023-09-20T08:00:00",
                            "latitude": 34.0522,
                            "longitude": -118.2437,
                            "speed": 0 
                        },
                        {
                            "timestamp": "2023-09-20T08:15:00",
                            "latitude": 34.0657,
                            "longitude": -118.2361,
                            "speed": 25 
                        },
                        {
                            "timestamp": "2023-09-20T08:30:00",
                            "latitude": 34.0762,
                            "longitude": -118.2607,
                            "speed": 40 
                        },
                        {
                            "timestamp": "2023-09-20T09:00:00",
                            "latitude": 34.0901,
                            "longitude": -118.3369,
                            "speed": 60 
                        },
                        {
                            "timestamp": "2023-09-20T09:30:00",
                            "latitude": 34.0522,
                            "longitude": -118.2437,
                            "speed": 0 
                        }
                        ]
                    }
                }
    
                const res = await axios.post("http://localhost:4000/send/data", json);
                console.log(res.data)
            }catch (e) {
                console.log(e);
            }
        }
    }
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
                            <Bar id="chart" data={data} options={{responsive: true, maintainAspectRatio: false,}}/>
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
                        <button type="button" onClick={handleClick}></button>
                    </div>
                </div>
            </div>  
        </div>
    )
}
export default Landing;
