import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./Moreinfo.css"

const MoreInfo = () => {
  let params = useParams();
  const Api_url = "https://fakestoreapi.com/products";
  const [pro, setpro] = useState({});
  useEffect(() => {
    fetch(`${Api_url}/${params.productId}`)
      .then((res) => res.json())
      .then((data) => setpro(data));
  }, []);
  return (
    <>

      <div className="wrapper">
        <div className="product-img">
          <img src={pro.image} height="420" width="327" alt={pro.title} />
        </div>
        <div className="product-info">
          <div className="product-text">
            <h1>{pro.title}</h1>
            <h2>by studio and friends {params.productId}</h2>
            <p>
              {pro.description}
            </p>
          </div>
          <div className="product-price-btn">
            <p>
              <span>{pro.price}</span>$
            </p>
            <button type="button">buy now</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default MoreInfo;
