import React, { useEffect } from "react";
import { useState } from "react";
import Productsditiles from "./Productsditiles";

const ProductsList = () => {
  const Api_url = "https://fakestoreapi.com/products";
  const [pro, setPro] = useState([]);
  useEffect(() => {
    fetch(Api_url)
      .then((res) => res.json())
      .then((data) => setPro(data));
  }, []);
  return (
    <>
      <h1 className="text-center">Our ProductsList</h1>
      <div className="container">
        <div className="row">
          {pro.map((products) => {
            return (
              <div className="col-3 mb-4" key={products.id}>
                <Productsditiles 
                title={products.title}
                img={products.image}
                price={products.price}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ProductsList;
