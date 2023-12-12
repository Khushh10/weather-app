import axios from "../Services/instance";
import { useState } from "react";

function DaysForecast({ value }: { value: string }) {
    const [hdata, setHData] = useState<{ main: { temp: number; }, dt_txt:string }[]>([]);
    const weatherLocation = () => {
        axios.get<{ list: { main: { temp: number; }, dt_txt: string; }[] }>('/forecast', {
            params: {
                q: value,
            },
        })
            .then((res) => {
                // console.log(res.data);
                setHData(res.data.list);
            })
    };

    return (
        <div>
            <div className="row position-absolute bottom-0 start-50 translate-middle-x mb-4 days-box py-2">
                <button className="btn text-white border-0 rounded-pill ml-n5" type="button" onClick={weatherLocation}>
                    <i className="fa fa-search"> Get Data Of 4 Days</i>
                </button>
                {hdata.map((forecastItem, key) => (
                    <div className="col-md-3 text-center my-2">
                        <div className="col-sm-12">
                            <div className="col-sm-8 forecast-main text-center">
                                <h5>{forecastItem.dt_txt}</h5>
                                <h5>{forecastItem.main.temp} °C</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DaysForecast;