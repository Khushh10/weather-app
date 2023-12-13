import { useEffect, useState } from "react";
import TempButtonF from "./TempButton";
import TempButtonC from "./TempButtonC";

function WeatherDetails({ Cname, temp, humid, speed }: Readonly<{ Cname: string, temp: unknown, humid: string, speed: string }>) {
const [temperature, setTemperature] = useState(temp);
    const [showTempFar, setShowTempFar] = useState(true);
    const [showTempCel, setShowTempCel] = useState(false);
    const [showDay, setShowDay] = useState(false);
    const [showNight, setShowNight] = useState(false);

    const changeTempF = () => {
        (temp as number) = ((temp as number) * (5 / 9)) + 32;
        // console.log((temp as number).toFixed(2));
        setTemperature((temp as number).toFixed(2));
        setShowTempCel(true);
        setShowTempFar(false);
    }

    const changeTempC = () => {
        temp = ((temp as number) - 32) / (5 / 9);
        setTemperature((temp as number).toFixed(2));
        // console.log((temp as number).toFixed(2));
        setShowTempCel(false);
        setShowTempFar(true);
    }

    const decideTime = () => {
        var today = new Date();
        var time = today.getHours();

        if (time >= 18 || time < 6) {
            setShowDay(false);
            setShowNight(true);
        } else {
            setShowDay(true);
            setShowNight(false);
        }
    }

    useEffect(decideTime, []);

    return (
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-8 col-lg-6 col-xl-4">
                    <div className="card extraa" >
                        <div className="card-body p-4">
                            {showDay && <i className="fa-solid fa-sun fa-2xl" style={{ color: "#ffffff" }}></i>}
                            {showNight && <i className="fa-solid fa-moon fa-2xl" style={{ color: "#ffffff" }}></i>}
                            {showTempFar && <TempButtonF onFarClick={() => changeTempF()} temp={temp} City={Cname} />}
                            {showTempCel && <TempButtonC onCelClick={() => changeTempC()} temp={temperature} City={Cname} />}
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <div><i className="fas fa-wind fa-fw"></i> <span className="ms-1">
                                        {speed} Km/h
                                    </span></div>
                                    <div><i className="fas fa-tint fa-fw"></i> <span className="ms-1">
                                        {humid}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherDetails;