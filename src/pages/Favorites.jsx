import React, { useContext} from 'react'
import { ShopContext } from '../context/ShopContext';

function Favorites() {
  const { AllProducts, toggleFavorite, favorites, addToCart } = useContext(ShopContext);
  const favoriteProducts = AllProducts.filter((item) => favorites.includes(item.id));

  return (
    <div className='mt-4 container px-lg-5 rounded-3 border shadow-lg d-grid gap-5 text-white py-5'>
      <h3 className="fw-bold text-center my-5">Favorites</h3>
      <div className="row">
      {favoriteProducts.map((product, key) => {
          return (
            <div className="col-lg-3 col-12 g-4" key={key}>
              <div className="card border bg-transparent">
                <i
                  className={`${
                    favorites.includes(product.id)
                      ? "fa-solid text-danger"
                      : "fa-regular text-light "
                  } fa-heart position-absolute top-0 end-0 m-3 z-index-1 fs-4  cursor-pointer`}
                  onClick={() => toggleFavorite(product.id)}
                ></i>

                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  onClick={() => viewProduct(product.id)}
                />
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

export default Favorites