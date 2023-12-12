import denied from '../images/LocationAccess.gif';

function NoLocationAccess() {
    return (
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-8 col-lg-6 col-xl-4">
                    <div className="card extraa">
                        <div className="card-body p-4">
                            <div className="d-flex flex-column text-center mt-5 mb-4">
                                <h6 className="display-4 mb-0 font-weight-bold" style={{ color: "#1C2331" }}>
                                    <img className='imgsize' src={denied} alt="wait hora" />
                                </h6>
                                <span className="my-3"><h5>LOCATION ACCESS DENIED NOW SEARCH BY NAME !!</h5></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NoLocationAccess;