import React, { useEffect, useState } from "react";
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
      } catch (error) {}
    })();
  }, [id]);
  return <div>ProductDetails</div>;
}
