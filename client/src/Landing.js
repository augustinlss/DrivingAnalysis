import React, {useEffect, useState} from "react";
import axios from 'axios';
import './Landing.css';
import { Bar } from 'react-chartjs-2';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

function Landing() {
    const [chartData, setChartData] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: "CO2",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: "rgb(0,122,255)",
        }],
    });
    const [dP, setDP] = useState(0);
    const [dNP, setNDP] = useState(0);
    async function getChartData() {
        const res = await axios.get("https://driving-analysis-server.vercel.app/api/send/info");
        console.log(res.data.emissionsPM[0]);
        setChartData({
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: "CO2",
                data: [res.data.emissionsPM[0], res.data.emissionsPM[1], res.data.emissionsPM[2], res.data.emissionsPM[3], res.data.emissionsPM[4], res.data.emissionsPM[5], res.data.emissionsPM[6], res.data.emissionsPM[7], res.data.emissionsPM[8], res.data.emissionsPM[9], res.data.emissionsPM[10], res.data.emissionsPM[11]],
                backgroundColor: "rgb(0,122,255)",
            }],
        });
        setDP(res.data.distanceDrivenPol);
        setNDP(res.data.distanceDrivenNPol);

    }

    useEffect(() => {
        getChartData();
    }, []);



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
                            <Bar id="chart" data={chartData} options={{responsive: true, maintainAspectRatio: false,}}/>
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
                        <p>Distance driven in Urban areas: <b>{Math.round(dP)} km</b></p>
                        <p>Distance driven in Non-Urban areas: <b>{Math.round(dNP)} km</b></p>
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
