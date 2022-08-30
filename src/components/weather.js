import React from 'react'
import './styles.css'

import moment from 'moment';

const refresh = () => {
    window.location.reload()
}






const CardExampleCard = ({weatherData}) => (
    <div className="main">

        <div className="top">
            <p className="area">{weatherData.name}</p>
        </div>

            <p className="day">{moment().format('dddd')}, {moment().format('LL')} </p>

            <p className="temp">{Math.round((Math.round(weatherData.main.temp - 273.15) * 9/5 + 32))}&deg;</p>
            <p className="feels">Feels like: {Math.round((Math.round(weatherData.main.feels_like - 273.15) * 9/5 + 32))}&deg;</p>
            <div className="center">
                <p className="low-high-temp">L: {Math.round((Math.round(weatherData.main.temp_min - 273.15) * 9/5 + 32))}&deg;</p>
                <p className="low-high-temp">H: {Math.round((Math.round(weatherData.main.temp_max - 273.15) * 9/5 + 32))}&deg;</p>
            </div>

            <p className="description" >{weatherData.weather[0].description}</p>

            <div className="space-around">
                <p className="humidity">Humidity: {weatherData.main.humidity}%</p>
                <p className="wind">Wind: {Math.round(weatherData.wind.speed * 2.237)} mph</p>
            </div>

            <div className="space-around">
                <p className="sunrise-sunset">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-in')}</p>
                <p className="sunrise-sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-in')}</p>
            </div>
            <div className="update">
                <button className="refresh-btn" onClick={refresh}><i className="fa-solid fa-rotate-right"></i></button>
                <span className="update-time">Last Updated: {moment().format('h:mm:ss a')}</span> 

            </div>
    </div>
)

export default CardExampleCard; 

