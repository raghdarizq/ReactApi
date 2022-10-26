import React, { useEffect } from "react";
import { useState } from "react";
import Productsditiles from "./Productsditiles";
import Category from "./Category";
const ProductsList = () => {
  const Api_url = "https://fakestoreapi.com/products";
  const [pro, setPro] = useState([]);
  const getdata = () => {
    fetch(Api_url)
      .then((res) => res.json())
      .then((data) => setPro(data));
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <>
      <Category setPro={setPro} getdata={getdata} />
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
                  id={products.id}
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
