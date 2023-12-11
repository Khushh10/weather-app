import React from 'react';

export default function ErrorPage() {
    const waitGif = 'https://i.gifer.com/o26.gif';
  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-8 col-lg-6 col-xl-4">
          <div className="card extraa">
            <div className="card-body p-4">
              <div className="d-flex flex-column text-center mt-5 mb-4">
                <h6 className="display-4 mb-0 font-weight-bold" style={{ color: "#1C2331" }}>
                  <img className='imgsize' src={waitGif} alt="wait hora" />
                </h6>
                <span className="large my-3" style={{ color: "#868B94" }}>CHECK THE CITY NAME AGAIN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
