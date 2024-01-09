import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
function ViewProduct() {
  const { AllProducts, addToCart, favorites, toggleFavorite } = useContext(ShopContext);
  const { productId } = useParams();
  const product = AllProducts.find((e) => e.id === Number(productId));
  console.log(product);
  return (
    <div className="mt-4 container px-lg-5 rounded-3 border shadow-lg gap-5 text-white py-5">
      <Breadcrumbs product={product} />
      <div className="row align-items-center mt-4 mt-lg-0">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3 text-white">
          <h1 className="display-4 fw-bold lh-1">{product.name}</h1>
          <div>
          <h3 className="mt-4">₱ {product.price}</h3>
          <p className="lead">Brand: {product.brand}</p>
          </div>
          <p className="lead">{product.description}</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                   <button
                    className="btn btn-lg btn-light fw-bold"
                    onClick={() => addToCart(product.id)}
                  >
                    Add to cart
                  </button>
     
          <Link to={"/products"} className="btn btn-outline-secondary btn-lg px-4">Back</Link>
          </div>
        </div>
        <div className="col-lg-4 offset-lg-1 overflow-hidden shadow-sm m-lg-5 mt-lg-3 position-relative">
        <i
                  className={`${
                    favorites.includes(product.id)
                      ? "fa-solid text-danger"
                      : "fa-regular text-secondaryBrown "
                  } fa-heart position-absolute top-0 end-0 m-3 z-index-1 fs-4  cursor-pointer`}
                  onClick={() => toggleFavorite(product.id)}
                ></i>
          <img className="rounded img-fluid" src={product.image} alt={product.name} />
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
