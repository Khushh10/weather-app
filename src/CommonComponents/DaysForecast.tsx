import axios from "axios";
import { useState, useEffect } from "react";

export default function DaysForecast({ value }: { value: string }) {
    const [hdata, setHData] = useState<any[]>([]);

    const daysurl = `http://api.openweathermap.org/data/2.5/forecast?q=${value}&cnt=4&id=524901&appid=9cd4b8f7032d45aef4ac47907d63d924`;

    const weatherLocation = () => {
        axios
            .get(daysurl)
            .then((res) => {
                console.log(res.data);
                setHData(res.data.list); 
            })
            .catch((error) => {
                console.error('Error fetching weather data:', error);
            });
    };

    return (
        <div>
            <div className="row position-absolute bottom-0 start-50 translate-middle-x mb-4">
                <button
                    className="btn btn-outline-light text-dark border-0 rounded-pill ml-n5"
                    type="button"
                    onClick={weatherLocation}
                >
                    <i className="fa fa-search"> Get Data Of 4 Days</i>
                </button>
                {hdata.map((item: any, index: number) => (
                    <div key={index} className="col-md-3 day-weather-box text-center">
                        <div className="col-sm-12 day-weather-inner-box">
                            <div className="col-sm-8 forecast-main">
                                <p>{item.dt_txt}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
