import React from 'react';
import Temp from '../images/temp.svg'
import Wind from '../images/wind.svg'
import Group from '../images/Group.svg'
import Press from '../images/pressure.svg'
import Cloud from '../images/clud.png'


const WeatherLeft = ({weather,switches}) => {
    return (
        <div className="weather__left" style={{background : switches ? '#4F4F4F' : '#FFFFFF' }}>
            <ul className="weather__list">
                <li className="weather__item"><img className="weather__svg" src={Temp} alt=""/>Temperature <span className="weather__qwe" style={{color : switches ? '#FFFFFF' : '#000000'}}>{Math.round(weather.list[0].main.temp - 273.15)}° - Have nice day</span></li>
                <li className="weather__item"><img className="weather__svg" src={Press} alt=""/>Pressure<span className="weather__qwe" style={{color : switches ? '#FFFFFF' : '#000000'}}>{weather.list[0].main.pressure} m mercury column</span></li>
                <li className="weather__item"><img className="weather__svg" src={Group} alt=""/>Group <span className="weather__qwe" style={{color : switches ? '#FFFFFF' : '#000000'}}>{weather.list[0].weather[0].main}</span></li>
                <li className="weather__item"><img className="weather__svg" src={Wind} alt=""/>Wind <span className="weather__qwe" style={{color : switches ? '#FFFFFF' : '#000000'}}>{weather.list[0].wind.speed} M/C</span></li>
            </ul>
            <img className="weather__img" src={Cloud} alt=""/>
        </div>
    );
};

export default WeatherLeft;