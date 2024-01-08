import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
function Products() {
  const { AllProducts, favorites, toggleFavorite, addToCart } =
  useContext(ShopContext);
  return (
    <div className='mt-4 container px-lg-5 rounded-3 border shadow-lg d-grid gap-5 text-white py-5'>
      <h3 className="fw-bold text-center">Products</h3>
      <div className="row">
      {AllProducts.map((product, key) => {
          return (
            <div className="col-lg-3 col-12 g-4" key={key}>
              <div className="card border bg-transparent">
                <i
                  className={`${
                    favorites.includes(product.id)
                      ? "fa-solid text-danger"
                      : "fa-regular text-secondaryBrown "
                  } fa-heart position-absolute top-0 end-0 m-3 z-index-1 fs-4  cursor-pointer`}
                  onClick={() => toggleFavorite(product.id)}
                ></i>
                <Link to={`/product/${product.id}`}>
                <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
                </Link>


                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title">{product.name}</h5>
                    <h5 className="card-title">₱ {product.price}</h5>
                  </div>
                  <p className="card-text">{product.description}</p>
                  <button
                    className="btn btn-light"
                    onClick={() => addToCart(product.id)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Products