
const Productsditiles = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.img} className="card-img-top " alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            price is :<mark>{props.price}$</mark>
          </p>
          <a  href="/#" className="btn btn-primary">
            More Ditels
          </a>
        </div>
      </div>
    </>
  );
};
export default Productsditiles;
