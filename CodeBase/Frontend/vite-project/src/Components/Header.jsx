import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header-area">
      <div className="main-header header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="menu-wrapper d-flex align-items-center justify-content-between">
                <div className="header-left d-flex align-items-center justify-content-between">
                  {/* Logo*/}
                  <div className="logo logo-large light-logo">
                    <NavLink to="/">
                      <img src="./src/assets/images/logo/Logo-charitfix.png" alt="logo" />
                    </NavLink>
                  </div>
                  {/* Logo Mobile*/}
                  <div className="logo logo-mobile light-logo">
                    <NavLink to="/">
                      <img src="./src/assets/images/icon/favicon.png" alt="img" />
                    </NavLink>
                  </div>
                </div>

                <div className="search-container">
                  <input type="text" id="searchField" className="search-field" placeholder="Search..." />
                  <button id="closeSearch" className="close-search-btn">
                    <i className="ri-close-line"></i>
                  </button>
                </div>

                {/* Main-menu for desktop */}
                <div className="main-menu d-none d-lg-block">
                  <nav>
                    <ul className="listing" id="navigation">
                      <li className="single-list">
                        <NavLink to="/" className="single">
                          Home
                        </NavLink>
                      </li>
                      <li className="single-list">
                        <NavLink to="/aboutus" className="single">
                          About us
                        </NavLink>
                      </li>
                      <li className="single-list">
                        <NavLink to="/project" className="single">
                          Project
                        </NavLink>
                      </li>
                      <li className="single-list">
                        <NavLink to="/donation" className="single">
                          Donation
                        </NavLink>
                      </li>
                      <li className="single-list">
                        <NavLink to="/blog" className="single">
                          Blog
                        </NavLink>
                      </li>
                      <li className="single-list">
                        <NavLink to="/contactus" className="single">
                          Contact us
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className="header-right">
                  <div className="cart">
                    {/* search button */}
                    <NavLink to="/" className="rounded-btn search-bar">
                      <i className="ri-search-line"></i>
                    </NavLink>
                    <NavLink to="/login" className="btn-primary-fill pill-btn">
                      Log in
                    </NavLink>
                  </div>
                </div>
              </div>
              {/* Mobile Menu */}
              <div className="div">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
