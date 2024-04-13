import React, { useEffect, useState } from "react";
import Card from "../../Components/Card";

export default function Products() {
  const [products, setProducts] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          "https://sephora.p.rapidapi.com/products/v2/list?number=1&size=30&country=SG&language=en-SG&sort=sales",
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
        setProducts(data.data);
      } catch (error) {
        alert("fetching error");
      }
    })();
  }, []);
  const items=products?.map((e,index)=><Card key={index} img={e.}/>)
  return <div>Products</div>;
}
