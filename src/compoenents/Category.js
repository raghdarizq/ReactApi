import React, { useState, useEffect } from "react";
const Category = (props) => {
  const Api_url = "https://fakestoreapi.com/products/categories";
  const [Catego, setCategory] = useState([]);
  const categories = () => {
    fetch(Api_url)
      .then((res) => res.json())
      .then((data) => setCategory(data));
  };
  const specific_category = (catName) => {
    console.log(catName);
    fetch(`https://fakestoreapi.com/products/category/${catName}`)
      .then((res) => res.json())
      .then((data) => props.setPro(data));
  };

  useEffect(() => {
    categories();
  }, []);

  return (
    <>
      <div className="container">
        <div className="d-grid gap-2 d-md-block">
          <button
            className="btn btn-primary ms-1"
            type="button"
            onClick={() => {
              props.getdata()
            }}
          >
            All
          </button>
          {Catego.map((data) => {
            return (
              <button
                className="btn btn-primary ms-1"
                type="button"
                key={data}
                onClick={() => {
                  specific_category(data);
                }}
              >
                {data}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Category;
