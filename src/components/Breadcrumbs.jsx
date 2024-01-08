import { Link } from "react-router-dom";
function Breadcrumbs(props) {
    const {product} = props;

  return (
    <div className='text-white'>
      <Link className="text-decoration-none text-white" to="/">HOME</Link> / <Link className="text-decoration-none text-white" to="/products">PRODUCTS</Link> / {product.name}
    </div>
  );
}

export default Breadcrumbs;
