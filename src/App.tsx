import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import DaysForecast from './CommonComponents/DaysForecast';
import WeatherDetails from './CommonComponents/WeatherDetails';
import ErrorPage from './CommonComponents/ErrorPage';

function App() {
  const [data, setData] = useState({ name: "", main: { temp: "", humidity: "" }, weather: { main: "" }, wind: { speed: "" } });
  const [location, setLocation] = useState('');
  const [showWeatherDetails, setShowWeatherDetails] = useState(false);
  const [showErrorPage, setShowErrorPage] = useState(false);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9cd4b8f7032d45aef4ac47907d63d924&units=metric`;

  const weatherLocation = () => {
    axios.get(url)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setShowWeatherDetails(true);
        setShowErrorPage(false);
      })
      .catch((error) => {
        setShowWeatherDetails(false);
        setShowErrorPage(true);
      })
  }

  function getlocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }

  function showPosition(position: any) {
    // console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const curUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=9cd4b8f7032d45aef4ac47907d63d924`
    console.log(latitude);
    console.log(longitude);
  }

  useEffect(getlocation, []);
  
  return (
    <div className="container" id="wrapper">
      <div className="container-fluid position-absolute top-0 start-50 translate-middle-x col-md-9 col-sm-5 col-xs-4" id="current-weather">
        <div className="row justify-content-center">
          <div className="col-md-11 col-sm-10 col-xs-5">
            <input className="form-control border-secondary rounded-pill pr-5" type="text" placeholder='Enter Location' id="example-search-input2" onChange={event => setLocation(event.target.value)} />
          </div>
          <div className="col-md-1 col-sm-1 col-xs-1">
            <button className="btn btn-outline-light text-dark border-0 rounded-pill ml-n5" type="button" onClick={weatherLocation}>
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      {showWeatherDetails && <WeatherDetails Cname={data.name} temp={data.main.temp} humid={data.main.humidity} speed={data.wind.speed} />}
      {showErrorPage && <ErrorPage />}

      {/* <DaysForecast value={location} /> */}
    </div>
  );
}

export default App;
