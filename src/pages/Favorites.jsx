import React, { useContext} from 'react'
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

function Favorites() {
  const { AllProducts, toggleFavorite, favorites, addToCart } = useContext(ShopContext);
  const favoriteProducts = AllProducts.filter((item) => favorites.includes(item.id));

  return (
    <div className='mt-4 container px-lg-5 rounded-3 border shadow-lg d-grid gap-5 text-white py-5'>
      <h3 className="fw-bold text-center">Favorites</h3>
      <div className="row">
      {favoriteProducts.map((product, key) => {
          return (
            <div className="col-md-4 col-6 col-lg-3 g-4" key={key}>
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
                <h1 className="card-title fs-6  fw-bolder">{product.name}</h1>
                  <p className="card-text fs-6 text-truncate">
                    {product.description}
                  </p>
                  <div className="d-grid d-md-flex justify-content-md-between align-items-center">
                    <h1 className="card-title fs-6">₱ {product.price}</h1>
                    <button
                      className="btn btn-light btn-sm "
                      onClick={() => addToCart(product.id)}
                    >
                      <i className="fa-solid fa-cart-plus"></i>
                    </button>
                  </div>
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