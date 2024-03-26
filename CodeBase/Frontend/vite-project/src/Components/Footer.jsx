import React from "react";

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
                  <a href="index.html">
                    <img src="./src/assets/images/logo/Logo-charitfix.png" alt="logo" />
                  </a>
                </div>
              </div>
              {/* Footer-menu */}
              <div className="main-menu d-none d-lg-block">
                <nav>
                  <ul className="listing" id="navigation2">
                    <li className="single-list">
                      <a href="index.html" className="single">
                        Home
                      </a>
                    </li>
                    <li className="single-list">
                      <a href="donation.html" className="single">
                        Donation
                      </a>
                    </li>
                    <li className="single-list">
                      <a href="about.html" className="single">
                        About
                      </a>
                    </li>
                    <li className="single-list">
                      <a href="blog.html" className="single">
                        Blog
                      </a>
                    </li>
                    <li className="single-list">
                      <a href="contact-us.html" className="single">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* Right button */}
              <ul className="cart">
                <li className="cart-list">
                  <a href="donate-payment.html" className="donate-btn">
                    Donate
                  </a>
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
                  <a className="single" href="javascript:void(0)">
                    About Company
                  </a>
                </li>
                <li className="single-list">
                  <a className="single" href="javascript:void(0)">
                    Latest Projects
                  </a>
                </li>
                <li className="single-list">
                  <a className="single" href="javascript:void(0)">
                    Latest Blog
                  </a>
                </li>
                <li className="single-list">
                  <a className="single" href="javascript:void(0)">
                    Our Testimonials
                  </a>
                </li>
                <li className="single-list">
                  <a className="single" href="javascript:void(0)">
                    Our Mission
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-6">
            <div className="footer-link">
              <h4 className="title">Get Support</h4>
              <ul className="imp-link">
                <li className="single-list">
                  <a className="single" href="javascript:void(0)">
                    About
                  </a>
                </li>
                <li className="single-list">
                  <a className="single" href="javascript:void(0)">
                    How it Works
                  </a>
                </li>

                <li className="single-list">
                  <a className="single" href="javascript:void(0)">
                    Success Stories
                  </a>
                </li>
                <li className="single-list">
                  <a className="single" href="javascript:void(0)">
                    Contact
                  </a>
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
                    <a className="single" href="javascript:void(0)">
                      donation@gmail.com
                    </a>
                  </div>
                </li>
                <li className="single-list">
                  <div className="d-flex align-items-center gap-10 mb-20">
                    <div className="imp-icon">
                      <i className="ri-phone-fill"></i>
                    </div>
                    <a className="single" href="javascript:void(0)">
                      (+88) 111-222-333
                    </a>
                  </div>
                </li>
                <li className="single-list">
                  <div className="d-flex align-items-center gap-10 mb-20">
                    <div className="imp-icon">
                      <i className="ri-map-pin-2-fill"></i>
                    </div>
                    <a className="single" href="javascript:void(0)">
                      Tropical Cyclone, Volcano
                    </a>
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
                      <a href="donation-details.html">
                        <img src="./src/assets/images/gallery/project-1.png" alt="image" />
                      </a>
                    </div>

                    <div className="project-info">
                      <p className="project-date">12.Oct.2023</p>
                      <h4 className="project-title">
                        <a href="donation-details.html">18 Best Charity Marketing Champions</a>
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="single-list">
                  <div className="d-flex gap-20">
                    <div className="project-img">
                      <a href="donation-details.html">
                        <img src="./src/assets/images/gallery/project-2.png" alt="image" />
                      </a>
                    </div>
                    <div className="project-info">
                      <p className="project-date">20.Oct.2024</p>
                      <h4 className="project-title">
                        <a href="donation-details.html">Charity starts from home. You Can't Even Help,</a>
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
                        <a className="single" href="">
                          <i className="ri-facebook-fill"></i>
                        </a>
                      </li>
                      <li className="single-list">
                        <a className="single" href="">
                          <i className="ri-youtube-fill"></i>
                        </a>
                      </li>
                      <li className="single-list">
                        <a className="single" href="">
                          <i className="ri-instagram-line"></i>
                        </a>
                      </li>
                      <li className="single-list">
                        <a className="single" href="">
                          <i className="ri-linkedin-fill"></i>
                        </a>
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
