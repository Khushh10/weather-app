import { MouseEventHandler } from "react";

function TempButtonF({ onFarClick, temp, City }: { onFarClick: MouseEventHandler, temp: unknown, City: string }) {
    return (
        <div className="d-flex flex-column text-center mt-5 mb-4">
            <h6 className="display-4 mb-0 font-weight-bold" style={{ color: "#1C2331" }}>{temp as string}°C</h6>
            <button
                className="btn btn-outline-light text-dark border-0 rounded-pill ml-n5 my-2" type="button">
                <i className="fa fa-search" onClick={onFarClick}> CONVERT TO °F</i>
            </button>
            <span className="small" style={{ color: "#868B94" }}>{City}</span>
        </div>
    );
}

export default TempButtonF;