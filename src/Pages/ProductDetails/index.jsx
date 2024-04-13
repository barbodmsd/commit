import React, { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `https://sephora.p.rapidapi.com/products/v2/detail?id=${id}&country=SG&language=en-SG`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "384ba6ddb4mshd30ea53794d2c1bp16a8e9jsn1941df36d024",
              "X-RapidAPI-Host": "sephora.p.rapidapi.com",
            },
          }
        );
        const data = await res.json();
        setProduct(data.data);
      } catch (error) {
        alert(error)
      }
    })();
  }, [id]);
  return (
    <>
      {product ? (
        <div class="card mb-3 w-75 shadow-lg mx-auto my-2  product-details">
          <div class="row g-0">
            <div class="col-md-4">
              <img src={product.attributes['image-urls'][0]} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{product.attributes.name}</h5>
                <p class="card-text">
                  {product.attributes.description}
                </p>
                <p class="card-text">
                  Price : {product.attributes.price}
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="d-flex justify-content-center align-content-center position-fixed "
          style={{ inset: 0 }}
        >
          <DNA />
        </div>
      )}
    </>
  );
}
