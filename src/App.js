import React, {useState} from 'react'
import './style.css'
import Header from "./components/Header/Header";
import WeatherRight from "./components/WeatherRight/WeatherRight";
import WeatherLeft from "./components/WeatherLeft/WeatherLeft";
import GetWeatherFive from "./components/GetWeatherFive/GetWeatherFive";
import axios from "axios";
import Vanta from "./components/Vanta/Vanta";


function App() {

    const [weather,setWeather] = useState({})
    const [city,setCity] = useState('')
    const [date,setDate] = useState('')
    const [switches,setSwitches] = useState(true)


    const getWeather = () => {
        axios(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d7d4e4e65112c1872fb8be75bb70cde8`)
            .then(({data})=> {
                setWeather(data)
                setDate(data.list[0].dt_txt.slice(0,10))
            })
        setCity('')
    }

  return (
    <div className="App" style={{background: switches ? '#000000' : '#E5E5E5'}}>
        <div className="container">
          <Header city={city} setCity={setCity} setWeather={setWeather} getWeather={getWeather} switches={switches} setSwitches={setSwitches}/>
          {JSON.stringify(weather) === '{}' ? <><Vanta/></> :
              <>
                  <div className="weather__card">
                      <WeatherRight weather={weather} switches={switches} setSwitches={setSwitches}/>
                      <WeatherLeft weather={weather} switches={switches} setSwitches={setSwitches}/>
                  </div>
                <GetWeatherFive weather={weather} date={date} setDate={setDate} switches={switches} setSwitches={setSwitches}/>
              </>
          }
        </div>
    </div>
  );
}

export default App;
