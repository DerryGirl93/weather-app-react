import React from 'react';
import './Search.css';

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="form-group">
          <input
            type="text"
            placeholder="Search for a City"
            className="form-control"
            id="exampleInputEmail1"
            
          />
        </div>
        <button type="submit">Change City</button>
        <button type="submit">Current Location</button>
      </form>
    </div>
  );
}