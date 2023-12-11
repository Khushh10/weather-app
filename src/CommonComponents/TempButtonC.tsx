import { MouseEventHandler } from "react";

function TempButtonC({ onCelClick, temp, City }: Readonly<{ onCelClick: MouseEventHandler, temp: unknown, City: string }>) {
    return (
        <div className="d-flex flex-column text-center mt-5 mb-4">
            <h6 className="display-4 mb-0 font-weight-bold" style={{ color: "white" }}>{temp as string}°F</h6>
            <button
                className="btn text-white border-0 rounded-pill my-2" type="button">
                <h5 onClick={onCelClick}><i className="fa fa-search"> </i> CONVERT TO CELCIUS</h5>
            </button>
            <span className="small" style={{ color: "white" }}>{City}</span>
        </div>
    );
}

export default TempButtonC;