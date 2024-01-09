import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="my-5 text-white">
    <div className="container px-4">
      <div className="row">
        <div className="col d-flex py-4 row">
          <h5 className="col-md-6">
            <NavLink to="/watchShop/" className={"navbar-brand fs-4 fw-bolder text-white"}>Watch Shop</NavLink>
          </h5>
          <div className="col-md-6 text-end d-flex justify-content-end gap-3">
            <i className="fa-brands fa-facebook fs-4"></i>
            <i className="fa-brands fa-twitter fs-4"></i>
            <i className="fa-brands fa-instagram fs-4"></i>
            <i className="fa-brands fa-youtube fs-4"></i>
          </div>
        </div>
        <hr />
  
        <div
          className="col-md-12 row row-gap-3 text-start text-md-center p-4"
        >
          <div className="col-md-3">
            <h6>
              <strong>Shop Info</strong>
            </h6>
            <ul className=" fw-normal p-0">
              <li className="list-unstyled py-2">
                <a href="#" className="text-decoration-none text-secondary">
                  About Us
                </a>
              </li>
              <li className="list-unstyled py-2">
                <a href="#" className="text-decoration-none text-secondary">
                  Our Brands
                </a>
              </li>
              <li className="list-unstyled py-2">
                <a href="#" className="text-decoration-none text-secondary">
                  Latest Models
                </a>
              </li>
            </ul>
          </div>
  
          <div className="col-md-3">
            <h6>
              <strong>Watches</strong>
            </h6>
            <ul className=" fw-normal p-0">
              <li className="list-unstyled py-2">
                <a href="#" className="text-decoration-none text-secondary">
                  Men's Collection
                </a>
              </li>
              <li className="list-unstyled py-2">
                <a href="#" className="text-decoration-none text-secondary">
                  Women's Collection
                </a>
              </li>
              <li className="list-unstyled py-2">
                <a href="#" className="text-decoration-none text-secondary">
                  Limited Edition
                </a>
              </li>
            </ul>
          </div>
  
          <div className="col-md-3">
            <h6>
              <strong>Contact</strong>
            </h6>
            <ul className=" fw-normal p-0 text-secondary">
              <li className="list-unstyled py-2">
                <span>Email: info@watchshop.com</span>
              </li>
              <li className="list-unstyled py-2">
                <span>Location: 123 Watch Street, Cityville</span>
              </li>
              <li className="list-unstyled py-2">
                <span>Phone: +1 (123) 456-7890</span>
              </li>
            </ul>
          </div>
  
          <div className="col-md-3">
            <h6>
              <strong>Connect</strong>
            </h6>
            <ul className=" fw-normal p-0 ">
              <li className="list-unstyled py-2">
                <a href="#" className="text-decoration-none text-secondary">
                  Newsletter
                </a>
              </li>
              <li className="list-unstyled py-2">
                <a href="#" className="text-decoration-none text-secondary">
                  Loyalty Program
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  
    <div className="container-fluid text-center ">
      <p className="py-3">&copy; 2023 Watch Shop. All Rights Reserved.</p>
    </div>
  </footer>
  
  );
}

export default Footer;
