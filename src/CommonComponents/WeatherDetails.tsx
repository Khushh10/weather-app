export default function WeatherDetails({ Cname, temp, humid, speed }: { Cname: string, temp: string, humid: string, speed: string }) {
    return (
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-8 col-lg-6 col-xl-4">
                    <div className="card extraa" >
                        <div className="card-body p-4">
                            <div className="d-flex flex-column text-center mt-5 mb-4">
                                <h6 className="display-4 mb-0 font-weight-bold" style={{ color: "#1C2331" }}>{temp}°F</h6>
                                <span className="small" style={{ color: "#868B94" }}>{Cname}</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <div><i className="fas fa-wind fa-fw" style={{ color: "#868B94" }}></i> <span className="ms-1">
                                        {speed}
                                    </span></div>
                                    <div><i className="fas fa-tint fa-fw" style={{ color: "#868B94" }}></i> <span className="ms-1">
                                        {humid}%</span>
                                    </div>
                                    <div><i className="fas fa-sun fa-fw" style={{ color: "#868B94" }}></i> <span className="ms-1">
                                        0.2h </span>
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