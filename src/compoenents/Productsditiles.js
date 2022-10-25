import { Link } from "react-router-dom";

const Productsditiles = (props) => {
  const productId= props.id
  return (
    <>
      <div className="card">
        <img src={props.img} className="card-img-top " alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}
          </h5>
          <p className="card-text">
            price is :<mark>{props.price}$</mark>
          </p>
          <Link  className="btn btn-primary " to={`/product/${productId}`}>
            More Ditels
          </Link>
        </div>
      </div>
    </>
  );
};
export default Productsditiles;
