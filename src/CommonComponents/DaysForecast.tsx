import axios from "../Services/instance";
import { useState } from "react";

function DaysForecast({ value }: { value: string }) {
    const [hdata, setHData] = useState<{ main: { temp: number; }, dt_txt: string }[]>([]);

    const weatherLocation = async () => {
        try {
            const res = await axios.get('/forecast', { params: { q: value, }, });
            setHData(res.data.list);
        }
        catch (error) {
            console.log("ERROR AA RHA HAII!!");
        }
    }

    return (
        <div>
            <div className="row position-absolute bottom-0 start-50 translate-middle-x mb-1 days-box py-2">
                <button className="btn text-white border-0" type="button" onClick={weatherLocation}>
                    <i className="fa fa-search"> Get Data Of 4 Days</i>
                </button>
                {hdata.map((forecastItem) => (
                    <div className="col-md-3 text-center my-2">
                        <div className="col-sm-12">
                            <div className="col-sm-8">
                                <h6>{forecastItem.dt_txt}</h6>
                                <h6>{forecastItem.main.temp} °C</h6>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DaysForecast;