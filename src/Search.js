import React from 'react';
import './Search.css';

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="form-group w-50">
          <input
            type="text"
            placeholder="City Name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit">Change city</button>
      </form>
    </div>
  );
}