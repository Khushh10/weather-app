import instance from './Services/instance';
import { useState } from 'react';
import './App.css';
import DaysForecast from './CommonComponents/DaysForecast';
import WeatherDetails from './CommonComponents/WeatherDetails';
import ErrorPage from './CommonComponents/ErrorPage';
import NoLocationAccess from './CommonComponents/NoLocationAccess';

function App() {
  const [data, setData] = useState({ name: "", main: { temp: "", humidity: "" }, weather: { main: "" }, wind: { speed: "" } });
  const [location, setLocation] = useState('');
  const [showWeatherDetails, setShowWeatherDetails] = useState(false);
  const [showErrorPage, setShowErrorPage] = useState(false);

  const weatherLocation = () => {
    instance.get('/weather', {
      params: {
        q: location,
      },
    })
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
    console.log(position);
  }

  getlocation();

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

      {/* {showWeatherDetails && <WeatherDetails Cname={data.name} temp={data.main.temp} humid={data.main.humidity} speed={data.wind.speed} />} */}
      {/* <WeatherDetails Cname={data.name} temp={data.main.temp} humid={data.main.humidity} speed={data.wind.speed} /> */}
      <NoLocationAccess/>
      {showErrorPage && <ErrorPage />}
      {showWeatherDetails && <DaysForecast value={location}/>}

    </div>
  );
}

export default App;
