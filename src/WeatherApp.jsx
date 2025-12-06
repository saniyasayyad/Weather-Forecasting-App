import SearchBox from './SearchBox'
import InfoBox from "./InfoBox";
import { useState } from 'react'
import './WeatherApp.css'

export default function WeatherApp(){
    const [weatherInfo, setweatherInfo] = useState({
        city : "Pune",
        feelslike: 24.82,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    let updateInfo = (result) =>{
        setweatherInfo(result);
    }

    return (
        <div className="weather-app-container">
            <div className="weather-app-content">
                <h1 className="app-title">🌤️ Weather Forecast</h1>
                <p className="app-subtitle">Get real-time weather information for any city</p>
                <SearchBox updateInfo={updateInfo}/>
                <InfoBox info={weatherInfo}/>
            </div>
        </div>
    )
}