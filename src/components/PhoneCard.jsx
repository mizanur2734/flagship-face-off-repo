import React from "react";
import { Link } from "react-router";

const PhoneCard = ({ phone }) => {
  console.log(phone);
  const { name, image, description } = phone || {};
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to="/phone-details">
            <button className="btn btn-primary">View More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
