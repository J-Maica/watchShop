import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
function Products() {
  const {
    favorites,
    toggleFavorite,
    addToCart,
    displayProducts,
    searchInput,
    setSearchInput,
    sortProduct,
    setSortProduct,
    searchProduct,
    clearSearch,
    setSortProducts,
  } = useContext(ShopContext);

  const handleInputSearch = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="mt-4 container px-lg-5 rounded-3 border shadow-lg gap-5 text-white py-5">
      <h3 className="fw-bold text-center">Products</h3>
      <div className="mb-3 row mt-4 gap-4 gap-md-0">
        <div className="col-md-6 col-12">
          <input
            type="text"
            value={searchInput}
            onChange={handleInputSearch}
            placeholder="Search products..."
            className="form-control"
          />
          <button className="btn btn-secondary mt-2 " onClick={searchProduct}>
            Search
          </button>
          <button className="btn btn-secondary mt-2 ms-2" onClick={clearSearch}>
            Clear Search
          </button>
        </div>

        <div className="col-md-6 col-12">
          <select
            className="form-select ms-2"
            value={sortProduct}
            onChange={(e) => setSortProduct(e.target.value)}
          >
            <option value="">None</option>
            <option value="highestToLowest">Highest to Lowest Price</option>
            <option value="lowestToHighest">Lowest to Highest Price</option>
          </select>

          <button
            className="btn btn-secondary mt-2 ms-2"
            onClick={setSortProducts}
          >
            Apply Sort
          </button>
        </div>
      </div>
      <div className="row">
        {displayProducts.map((product, key) => {
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
  );
}

export default Products;
