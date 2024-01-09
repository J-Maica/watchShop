import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

function NewProduct() {
  const { AllProducts, favorites, toggleFavorite, addToCart, viewProduct } =
    useContext(ShopContext);

  const newProd = AllProducts.slice(0, 3);
  return (
    <div className="text-white">
      <hr />
      <h3 className="fw-bold text-center my-5">New Product</h3>
      <div className="row">
        {newProd.map((product, key) => {
          return (
            <div className="col-md-4 col-12 g-4" key={key}>
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
                  <div className="d-md-flex justify-content-between">
                    <h5 className="card-title fs-5 fs-lg-6">{product.name}</h5>
                    <h5 className="card-title fs-5 fs-lg-6">₱ {product.price}</h5>
                  </div>
                  <p className="card-text fs-6 text-truncate">{product.description}</p>
                  <button
                    className="btn btn-light btn-sm"
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
  );
}

export default NewProduct;
