import { AllProducts } from "../assets/data/AllProducts";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function TopSelling() {
  const { favorites, toggleFavorite, addToCart, viewProduct } =
    useContext(ShopContext);

  const topProd = AllProducts.slice(3, 6);
    return (
      <div className="text-white">
        <hr />
        <h3 className="fw-bold text-center my-5">Top Selling</h3>
        <div className="row">
          {topProd.map((product, key) => {
            return (
              <div className="col-lg-4 col-12 g-4" key={key}>
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
    );
}

export default TopSelling;
