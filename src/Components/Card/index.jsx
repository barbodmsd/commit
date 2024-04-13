import React from "react";
import { Link } from "react-router-dom";
import './Card.css'
export default function Card({ products }) {
  const items = products?.map((e, index) => (
    <div key={index} className="card" >
      <img
        src={e.attributes["image-urls"][0]}
        className="card-img-top"
        alt={e.attributes.name}
      />
      <div className="card-body">
        <h5 className="card-title">{e.attributes.name}</h5>
        <p className="card-text">
          Price : ${e.attributes.price/100}
        </p>
        <Link to={`/product-details/${e.id}/${e.attributes.name.replaceAll('','-')}`} className="btn btn-primary">
          Go somewhere
        </Link>
      </div>
    </div>
  ));
  return <>{
    items
  }</>;
}
