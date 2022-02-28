import React from 'react';

const GetWeatherFive = ({weather,date,setDate,switches}) => {

    return (
        <>
            <div className="buttons">
                {weather.list.map((item)=> item.dt_txt.slice(0,10)).filter((item,idx,array)=> array.indexOf(item) === idx).map((item)=> {
                    return (
                        <button className="buttons__btn" onClick={()=> setDate(item)} key={item} style={{color : switches ? '#FFFFFF' : '#000000',background : switches ? '#4F4F4F' : '#FFFFFF' }}>{item}</button>
                    )
                })}
            </div>
            <div className="FiveQ" style={{background : switches ? '#4F4F4F' : '#FFFFFF' }}>
                {weather.list.filter((item)=> item.dt_txt.includes(date)).map((item)=>{
                    return (
                        <div key={item.dt_txt} className="FiveQ__get" style={{background : switches ? '#2E3035' : '#4793FF33' }}>
                            <span className="FiveQ__title" style={{color : switches ? '#FFFFFF' : '#000000'}}>{item.dt_txt.slice(10)}</span>
                            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt=""/>
                            <p className="FiveQ__title" style={{color : switches ? '#FFFFFF' : '#000000'}}>{Math.round(item.main.temp - 273.15)}°</p>
                            <p className="FiveQ__des">{item.weather[0].description}</p>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default GetWeatherFive;