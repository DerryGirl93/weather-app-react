import React from 'react';

export default function DisplayForecast() {
  return (
    <div className="DisplayForecast">
      <div className="container">
        <div className="row">
          <div className="col">
            <p>
              <strong>Monday</strong> <br />
              25°C <br />
              Sunny
            </p>
          </div>
          <div className="col">
            <p>
              <strong>Tuesday</strong> <br />
              15°C <br />
              Cloud
            </p>
          </div>
          <div className="col">
            <p>
              <strong>Wednesday</strong> <br />
              10°C <br />
              Rain
            </p>
          </div>
          <div className="col">
            <p>
              <strong>Thursday</strong> <br />
              7°C <br />
              Storms
            </p>
          </div>
          <div className="col">
            <p>
              <strong>Friday</strong> <br />
              1°C <br />
              Snow
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
