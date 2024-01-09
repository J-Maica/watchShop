import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
function Navbar() {
  const { getItemCount } = useContext(ShopContext);
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div className="container-fluid">
          <NavLink to={"/watchShop/"} className="navbar-brand">Watch Shop</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <NavLink
                  to={"/watchShop/"}
                  className="nav-link mx-2"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/products"} className="nav-link mx-2">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/about"} className="nav-link mx-2">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/contact"} className="nav-link mx-2">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/cart" className="nav-link fw-bold position-relative">
                <i className="fa-solid fa-cart-shopping"></i>
                <p className="position-absolute top-20 start-100 translate-middle badge rounded-pill bg-">{getItemCount()}</p>
              </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link mx-2 dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 <i className="fa-solid fa-user"></i>
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                  <NavLink to={"/profile"} className="dropdown-item">
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/favorites"} className="dropdown-item">
                      Favorites
                    </NavLink>
                  </li>
                  <li>
                    <a className="dropdown-item">Logout</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
