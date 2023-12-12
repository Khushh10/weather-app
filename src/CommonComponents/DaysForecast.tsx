import axios from "../Services/instance";
import { useState } from "react";

function DaysForecast({ value }: { value: string }) {
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
            <div className="row position-absolute bottom-0 start-50 translate-middle-x mb-4 days-box py-2">
                <button className="btn text-white border-0 rounded-pill ml-n5" type="button" onClick={weatherLocation}>
                    <i className="fa fa-search"> Get Data Of 4 Days</i>
                </button>
                {hdata.map((forecastItem,key) => (
                    <div className="col-md-3 text-center my-2">
                        <div className="col-sm-12">
                            <div className="col-sm-8 forecast-main">
                                <h5>Day {key+1}</h5>
                                <p>{forecastItem.main.temp} °C</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DaysForecast;