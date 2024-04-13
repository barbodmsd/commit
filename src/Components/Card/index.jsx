import React from "react";
import style from './card.module.css'
import { Link } from "react-router-dom";
export default function Card({ products}) {
    const 
  return (
    <div className={`card ${style.productCard}`}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
         Price : {price/100}
        </p>
        <Link to={`/product-details/${id}`} className="btn btn-primary">
          Go somewhere
        </Link>
      </div>
    </div>
  );
}
