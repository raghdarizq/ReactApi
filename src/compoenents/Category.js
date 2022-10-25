import React, { useState, useEffect } from "react";

const Category = () => {
  const [Categors, setCategors] = useState({});
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategors(data));
  },[]);
  return (
    <>
      <div className="container">
      {Categors.map((Cats)=>{
        return (<h1>sx</h1>)

      })}

      </div>
    </>
  );
};
export default Category;
