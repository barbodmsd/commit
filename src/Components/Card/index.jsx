import React from "react";

export default function Card({ products }) {
  const items = products?.map((e, index) => (
    <div class="card" style="width: 18rem;">
      <img
        src={e.attributes["image-urls"][0]}
        class="card-img-top"
        alt={e.attributes.name}
      />
      <div class="card-body">
        <h5 class="card-title">{e.attributes.name}</h5>
        <p class="card-text">
          Price : {e.attributes.price/100}
        </p>
        <Link to={`/product-details/${id}`} class="btn btn-primary">
          Go somewhere
        </Link>
      </div>
    </div>
  ));
  return <>{
    items
  }</>;
}
