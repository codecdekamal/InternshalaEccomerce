import React from "react";
import { Link } from "react-router-dom";
const NavSec = () => {
  return (
    <nav>
      <div className="linkToPages bg-warning p-2  fs-5 row justify-content-md-center justify-content-between">
        <div className="link col-2">
          <Link
          to="/"
            className="text-decoration-none  text-dark"
          >
            Home
          </Link>
        </div>
        <div className="link col-2">
          <Link
          to="../../../allproducts"
            className="text-decoration-none  text-dark"
          >
            All Products
          </Link>
        </div>
        <div className="btn-group col-2 ">
          <button
            type="button"
            className="btn  dropdown-toggle fs-5  "
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Women
          </button>
          <ul className="dropdown-menu fs-5 ">
            <li>
              <Link
              to="../../../../productpages/womens/dresses"
                className="dropdown-item"
              >
                dresses
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                to="../../../productpages/womens/skirts"
              >
                skirts
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                to="../../../productpages/womens/pants"
              >
                pants
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="../../../productPages/Womens/allproducts"
              >
                all products
              </Link>
            </li>
          </ul>
        </div>
        <div className="btn-group col-2">
          <button
            type="button"
            className="btn  dropdown-toggle fs-5"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Men
          </button>
          <ul className="dropdown-menu fs-5">
            <li>
              <Link
                className="dropdown-item"
                to="../../../productPages/Mens/jackets"
              >
                jackets
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                to="../../../productPages/Mens/shirts"
              >
                shirts
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                to="../../../productPages/Mens/pants"
              >
                pants
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link
                className="dropdown-item"
                to="../../../productPages/Mens/allproducts"
              >
                all products
              </Link>
            </li>
          </ul>
        </div>
        <div className="link col-2">
          <Link
            className="text-decoration-none  text-dark"
            to="../../../productPages/others/kids"
          >
            kids
          </Link>
        </div>
        <div className="link col-md-2 d-flex d-md-block col-12 mt-3 my-md-auto justify-content-center ">
          <Link
            className="text-decoration-none text-dark "
            to="../../../contacts"
          >
            contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavSec;
