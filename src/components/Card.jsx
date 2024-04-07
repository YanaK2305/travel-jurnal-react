import React from "react";

export default function Card({ item }) {
  return (
    <div className="card">
      <img className="card--image" src={item.imageUrl} />
      <div className="cardbody">
        <div>
          <span className="card--location">
            <i className="uil uil-map-marker"></i>
            {item.location}
          </span>
          <a href={item.googleMapsUrl} target="blank" className="card--map">
            View on Google Maps
          </a>
        </div>
        <div className="card--title">{item.title}</div>
        <div className="card--date">
          {item.startDate} - {item.endDate}
        </div>
        <div className="card--subtitle">{item.description}</div>
      </div>
    </div>
  );
}
