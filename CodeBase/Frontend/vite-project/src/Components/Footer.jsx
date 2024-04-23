import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-wrapper footer-bg-one">
      <div className="container">
        <div className="footer-menu">
          <div className="col-lg-12">
            <div className="menu-wrapper d-flex align-items-center justify-content-between">
              <div className="header-left d-flex align-items-center justify-content-between">
                {/* Logo*/}
                <div className="logo">
                  <NavLink to="index.html">
                    <img src="./src/assets/images/logo/logomain.png" alt="logo" />
                  </NavLink>
                </div>
              </div>
              {/* Footer-menu */}
              <div className="main-menu d-none d-lg-block">
                <nav>
                  <ul className="listing" id="navigation2">
                    <li className="single-list">
                      <NavLink to="/" className="single">
                        Home
                      </NavLink>
                    </li>
                    <li className="single-list">
                      <NavLink to="/donation" className="single">
                        Donation
                      </NavLink>
                    </li>
                    <li className="single-list">
                      <NavLink to="/aboutus" className="single">
                        About
                      </NavLink>
                    </li>
                    <li className="single-list">
                      <NavLink to="/blog" className="single">
                        Blog
                      </NavLink>
                    </li>
                    <li className="single-list">
                      <NavLink to="/contactus" className="single">
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* Right button */}
              <ul className="cart">
                <li className="cart-list">
                  <NavLink to="donate-payment.html" className="donate-btn">
                    Donate
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="footer-line" />
        <div className="footer-imp-link row g-4 justify-content-between">
          <div className="col-xl-2 col-lg-6">
            <div className="footer-link">
              <h4 className="title">Explore Links</h4>
              <ul className="imp-link">
                <li className="single-list">
                  <NavLink className="single" to="javascript:void(0)">
                    About Company
                  </NavLink>
                </li>
                <li className="single-list">
                  <NavLink className="single" to="javascript:void(0)">
                    Latest Projects
                  </NavLink>
                </li>
                <li className="single-list">
                  <NavLink className="single" to="javascript:void(0)">
                    Latest Blog
                  </NavLink>
                </li>
                <li className="single-list">
                  <NavLink className="single" to="javascript:void(0)">
                    Our Testimonials
                  </NavLink>
                </li>
                <li className="single-list">
                  <NavLink className="single" to="javascript:void(0)">
                    Our Mission
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-6">
            <div className="footer-link">
              <h4 className="title">Get Support</h4>
              <ul className="imp-link">
                <li className="single-list">
                  <NavLink className="single" to="javascript:void(0)">
                    About
                  </NavLink>
                </li>
                <li className="single-list">
                  <NavLink className="single" to="javascript:void(0)">
                    How it Works
                  </NavLink>
                </li>

                <li className="single-list">
                  <NavLink className="single" to="javascript:void(0)">
                    Success Stories
                  </NavLink>
                </li>
                <li className="single-list">
                  <NavLink className="single" to="javascript:void(0)">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-5">
            <div className="footer-link">
              <br />
              <br />
              <ul className="imp-link">
                <li className="single-list">
                  <div className="d-flex align-items-center gap-10 mb-20">
                    <div className="imp-icon">
                      <i className="ri-mail-fill"></i>
                    </div>
                    <NavLink className="single" to="javascript:void(0)">
                      donation@gmail.com
                    </NavLink>
                  </div>
                </li>
                <li className="single-list">
                  <div className="d-flex align-items-center gap-10 mb-20">
                    <div className="imp-icon">
                      <i className="ri-phone-fill"></i>
                    </div>
                    <NavLink className="single" to="javascript:void(0)">
                      (+88) 111-222-333
                    </NavLink>
                  </div>
                </li>
                <li className="single-list">
                  <div className="d-flex align-items-center gap-10 mb-20">
                    <div className="imp-icon">
                      <i className="ri-map-pin-2-fill"></i>
                    </div>
                    <NavLink className="single" to="javascript:void(0)">
                      Tropical Cyclone, Volcano
                    </NavLink>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="footer-link">
              <h4 className="title">Projects</h4>
              <ul className="imp-link">
                <li className="single-list">
                  <div className="d-flex gap-20 mb-20 align-items-center">
                    <div className="project-img">
                      <NavLink to="donation-details.html">
                        <img src="./src/assets/images/gallery/project-1.png" alt="image" />
                      </NavLink>
                    </div>

                    <div className="project-info">
                      <p className="project-date">12.Oct.2023</p>
                      <h4 className="project-title">
                        <NavLink to="donation-details.html">18 Best Charity Marketing Champions</NavLink>
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="single-list">
                  <div className="d-flex gap-20">
                    <div className="project-img">
                      <NavLink to="donation-details.html">
                        <img src="./src/assets/images/gallery/project-2.png" alt="image" />
                      </NavLink>
                    </div>
                    <div className="project-info">
                      <p className="project-date">20.Oct.2024</p>
                      <h4 className="project-title">
                        <NavLink to="donation-details.html">Charity starts from home. You Can't Even Help,</NavLink>
                      </h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="footer-line" />
      </div>
      {/* footer-bottom area */}
      <div className="footer-bottom-area">
        <div className="container">
          <div className="footer-border">
            <div className="row">
              <div className="col-xl-12">
                <div className="footer-copy-right text-center">
                  <p className="pera">Copyright © 2024. All rights reserved.</p>
                  <div className="footer-social-link">
                    <ul className="listing">
                      <li className="single-list">
                        <NavLink className="single" to="">
                          <i className="ri-facebook-fill"></i>
                        </NavLink>
                      </li>
                      <li className="single-list">
                        <NavLink className="single" to="">
                          <i className="ri-youtube-fill"></i>
                        </NavLink>
                      </li>
                      <li className="single-list">
                        <NavLink className="single" to="">
                          <i className="ri-instagram-line"></i>
                        </NavLink>
                      </li>
                      <li className="single-list">
                        <NavLink className="single" to="">
                          <i className="ri-linkedin-fill"></i>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
