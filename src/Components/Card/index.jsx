import React from "react";
import './card.css' 
import { Link } from "react-router-dom";
export default function Card({ img,name,price,id }) {
  return (
    <div class="card">
      <img src={img} class="card-img-top" alt={name} />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">
         Price : {price}
        </p>
        <Link to={`/product-details/${id}`} class="btn btn-primary">
          Go somewhere
        </Link>
      </div>
    </div>
  );
}
