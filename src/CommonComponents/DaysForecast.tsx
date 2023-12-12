import axios from "../Services/instance";
import { useState } from "react";

export default function DaysForecast({ value }: { value: string }) {
    const [hdata, setHData] = useState<{ main: { temp: number; }; }[]>([]);
    const weatherLocation = () => {
        axios.get<{ list: { main: { temp: number; }; }[]; }>('/forecast', {
            params: {
                q: value,
            },
        })
            .then((res) => {
                console.log(res.data);
                setHData(res.data.list);
            })
    };

    return (
        <div>
            <div className="row position-absolute bottom-0 start-50 translate-middle-x mb-4">
                <button className="btn text-white border-0 rounded-pill ml-n5" type="button" onClick={weatherLocation}>
                    <i className="fa fa-search"> Get Data Of 4 Days</i>
                </button>
                {hdata.map((forecastItem) => (
                    <div className="col-md-3 day-weather-box text-center">
                        <div className="col-sm-12 day-weather-inner-box">
                            <div className="col-sm-8 forecast-main">
                                <p>{forecastItem.main.temp} °C</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
