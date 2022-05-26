import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../features/authSlice";
import { getCategories } from "../../features/CategorySlice";
import { toast } from 'react-toastify';

const Header = () => {
  const categories = useSelector((data) => data.category.value);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth.value);
//   console.log('user', user)

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const logOut = () => {
    dispatch(logout())
    toast.error(' Log out success!', {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });

  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse d-flex justify-content-between"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Product
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/categories"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  {categories.map((item, index) => (
                    <li key={index}>
                      <a class="dropdown-item" href="#">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Blog
                </a>
              </li>
            </ul>
            {user?.name ? (
              <div>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link className="nav-link" to="profile">
                      {user.name}
                    </Link>
                  </li>
                  <li class="nav-item">
                    <button onClick={logOut} className="nav-link">Log Out</button>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link className="nav-link" to="sign-up">
                      Sign Up
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" to="log-in">
                      Log In
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
