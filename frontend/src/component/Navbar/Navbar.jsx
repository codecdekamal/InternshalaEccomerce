import React from "react";
import "../../index.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark  ">
      <div className="container-fluid">
        <Link
        to="/"
          id="title"
          className="text-decoration-none text-warning textfor m-sm-3"
        >
          eccomerce
        </Link>
        <button
          className="navbar-toggler bg-light "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className=" collapse navbar-collapse mt-2  "
          id="navbarNavDropdown"
        >
          <div className="container-fluid text-warning ">
            <div className="nav-content">
              <div>
                <form
                  className="d-flex justify-content-lg-center "
                  role="search"
                >
                  <input type="search" name="" className="searchBar" />
                  <button className="border-0 px-4  text-bg-warning round ">
                    Search
                  </button>
                </form>
              </div>
              <div className="loginAndCart">
                <button className=" btn btn-warning " type="button">
                  <Link
                  to="/login"
                    className="text-light  text-decoration-none"
                  >
                    Login
                  </Link>
                </button>
                <Link
                to="/cart"
                  className="btn btn-link text-decoration-none text-warning  "
                >
                  <span
                    className="material-symbols-outlined"
                  >
                    shopping_cart
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
