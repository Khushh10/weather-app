import { MouseEventHandler } from "react";

function TempButtonF({ onFarClick, temp, City }: Readonly<{ onFarClick: MouseEventHandler, temp: unknown, City: string }>) {
    return (
        <div className="d-flex flex-column text-center mt-5 mb-4">
            <h6 className="display-4 mb-0 font-weight-bold" style={{ color: "white" }}>{temp as string}°C</h6>
            <button
                className="btn text-white border-0 rounded-pill ml-n5 my-2" type="button">
                <h5 onClick={onFarClick}><i className="fa-solid fa-shuffle" style={{color: "#ffffff"}}></i> CONVERT TO FARHENITE</h5>
            </button>
            <span className="small" style={{ color: "white" }}>{City}</span>
        </div >
    );
}

export default TempButtonF;