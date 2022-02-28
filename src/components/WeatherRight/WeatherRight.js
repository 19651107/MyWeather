import React from 'react';

const WeatherRight = ({weather,switches}) => {

    const toDate = (date) => {
        return new Intl.DateTimeFormat('ru-Ru', {
            hour:'2-digit',
            minute:'2-digit',
        }).format(new Date(date))
    }

    return (
        <div className="weather__right" style={{background : switches ? '#4F4F4F' : '#FFFFFF' }}>
            <div className="weather__row">
                <div className="weather__temp">
                    <h2 className="weather__temp-tep">{Math.round(weather.list[0].main.temp - 273.15)}°</h2>
                    <p className="weather__temp-today" style={{color : switches ? '#FFFFFF' : '#000000'}}>Today</p>
                </div>
                <img className="weather__temp-img" src={`http://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`} alt="weathericon"/>
            </div>
            <p className="weather__time">Time : {toDate(Date.now())}</p>
            <p className="weather__city">City : {weather.city.name}</p>
        </div>
    );
};

export default WeatherRight;