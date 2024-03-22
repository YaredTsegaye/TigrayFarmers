import React from "react";

function Home() {
  return (
    <>
      {/* header */}
      <div className="header-area">
        <div className="main-header header-sticky">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="menu-wrapper d-flex align-items-center justify-content-between">
                  <div className="header-left d-flex align-items-center justify-content-between">
                    {/* Logo*/}
                    <div className="logo logo-large light-logo">
                      <a href="home.html">
                        <img src="./src/assets/images/logo/Logo-charitfix.png" alt="logo" />
                      </a>
                    </div>
                    {/* Logo Mobile*/}
                    <div className="logo logo-mobile light-logo">
                      <a href="home.html">
                        <img src="./src/assets/images/icon/favicon.png" alt="img" />
                      </a>
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
                          <a href="home.html" className="single active">
                            Home
                          </a>
                        </li>
                        <li className="single-list">
                          <a href="about.html" className="single">
                            About us
                          </a>
                        </li>
                        <li className="single-list">
                          <a href="project.html" className="single">
                            Project
                          </a>
                        </li>
                        <li className="single-list">
                          <a href="donation.html" className="single">
                            Donation
                          </a>
                        </li>
                        <li className="single-list">
                          <a href="contact-us.html" className="single">
                            Blog
                          </a>
                        </li>
                        <li className="single-list">
                          <a href="Register.html" className="single">
                            Conatc us
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>

                  <div className="header-right">
                    <div className="cart">
                      {/* search button */}
                      <a href="javascript:void(0)" className="rounded-btn search-bar">
                        <i className="ri-search-line"></i>
                      </a>
                      <a href="login.html" className="btn-primary-fill pill-btn">
                        Log in
                      </a>
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

      {/* Hero area S t a r t*/}
      <div className="hero-area">
        <div className="single-slider hero-padding">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xxl-6 col-xl-6 col-lg-6 my-auto">
                <div className="hero-caption-one mb-20">
                  <h4 className="key-title font-700 mb-20 wow fadeInUp" data-wow-delay="0.0s">
                    Help Tigrayan Farmers Rebuild Their Lives
                  </h4>
                  <h1 className="title font-700 wow fadeInUp" data-wow-delay="0.1s">
                  Sow Seeds of Hope: Rebuild Tigray Together!
                  </h1>
                  <p className="pera wow fadeInUp" data-wow-delay="0.3s">
                  Join us in nurturing the future of Tigray—donate now to help our farmers flourish anew
                  </p>
                  <div className="d-flex gap-20 flex-wrap">
                    <a href="donation.html" className="btn-primary-fill hero-btn wow fadeInLeft" data-wow-delay="0.4s">
                      Donate Now
                    </a>
                    <a href="volunteer.html" className="btn-tertiary-fill hero-btn wow fadeInRight" data-wow-delay="0.4s">
                      Join Volunteers
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="d-flex gap-44">
                  <div className="hero-image position-relative d-none d-lg-block">
                    <img
                      src="./src/assets/images/hero/farmer.png"
                      alt="img"
                      className="w-100 tilt-effect wow fadeInUp"
                      data-wow-delay="0.1s"
                    />
                  </div>
                  {/* <div className="hero-count-section flex flex-column gap-60">
                  <div className="hero-count wow fadeInUp" data-wow-delay="0.0s">
                    <h4 className="title">12+</h4>
                    <p className="pera">
                      Years of <br/>
                      Experience
                    </p>
                  </div>
                  <div className="hero-count wow fadeInUp" data-wow-delay="0.2s">
                    <h4 className="title">140+</h4>
                    <p className="pera">
                      Thousands <br/>
                      volunteers
                    </p>
                  </div>
                  <div className="hero-count  wow fadeInUp" data-wow-delay="0.3s">
                    <h4 className="title">500+</h4>
                    <p className="pera">
                      Worid wide <br/>
                      Offices
                    </p>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End-of Hero*/}

      {/* helpful area S t a r t*/}
      <div className="helpful-area">
        <div className="container">
          <div className="row gy-24">
            <div className="col-xl-3 col-md-6 col-lg-6">
              <div className="helpful-card h-calc  wow fadeInLeft" data-wow-delay="0.2s">
                <div className="helpful-card-icon">
                  <i className="ri-shake-hands-line"></i>
                </div>
                <div className="helpful-card-caption">
                  <h4 className="caption-title">Equip</h4>
                  <p className="caption-para">Provide essential farming tools and equipment (plows, seeds, fertilizer, etc.)</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-6">
              <div className="helpful-card h-calc  wow fadeInLeft" data-wow-delay="0.0s">
                <div className="helpful-card-icon">
                  <i className="ri-graduation-cap-line"></i>
                </div>
                <div className="helpful-card-caption">
                  <h4 className="caption-title">Revitalize</h4>
                  <p className="caption-para">Rebuild vital infrastructure, like irrigation systems and grain mills.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-6">
              <div className="helpful-card h-calc wow fadeInRight" data-wow-delay="0.0s">
                <div className="helpful-card-icon">
                  <i className="ri-user-line"></i>
                </div>
                <div className="helpful-card-caption">
                  <h4 className="caption-title">Innovate</h4>
                  <p className="caption-para">Introduce modern agricultural techniques to increase yields and resilience.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-6">
              <div className="helpful-card h-calc  wow fadeInRight" data-wow-delay="0.2s">
                <div className="helpful-card-icon">
                  <i className="ri-money-dollar-circle-line"></i>
                </div>
                <div className="helpful-card-caption">
                  <h4 className="caption-title">Harmonize</h4>
                  <p className="caption-para">Collaborate with local communities to prioritize their immediate and long-term needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End-of helpful*/}

      {/* Donate S t a r t */}
      <div className="donate-section bottom-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              {/* Section Tittle */}
              <div className="section-tittle text-center mb-50">
                <span className="sub-tittle text-capitalize font-600">We Love To Help Poor</span>
                <h2 className="title font-700">Help & Donate Us Now</h2>
              </div>
            </div>
          </div>
          <div className="row gy-24">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 view-wrapper">
              <div className="single-donate h-calc wow fadeInUp" data-wow-delay="0.0s">
                <div className="donate-img position-relative">
                  <a href="donation-details.html">
                    {" "}
                    <img className="w-100" src="./src/assets/images/gallery/Empower.png" alt="img" />{" "}
                  </a>
                  <div className="donate-badge">
                    <p className="subtitle">Empower</p>
                  </div>
                </div>
                <div className="donate-info">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="donate-info-title">
                      <h4 className="title text-capitalize">
                        <a href="blog-details.html">Help Tigray Farmers Rebuild Their Lives</a>
                      </h4>
                      <p className="subtitle">Donate today to empower farmers in Tigray with vital tools and resources.</p>
                      {/* <div className="progress custom-progress-two">
                      <div className="progress-bar" style="width: 25%"></div>
                    </div> */}
                      <div className="flex justify-content-between mt-14 mb-20">
                        <div className="flex gap-20">
                          <div className="charges">
                            <p className="pera">$15.000</p>
                            <h4 className="title">Goals</h4>
                          </div>
                          <div className="charges">
                            <p className="pera">$15.000</p>
                            <h4 className="title">Raised</h4>
                          </div>
                        </div>
                        <div className="forward-btn">
                          <i className="ri-reply-fill"></i>
                        </div>
                      </div>
                      <a href="donate-payment.html" className="btn donate-btn w-100">
                        Donate Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 view-wrapper">
              <div className="single-donate h-calc wow fadeInUp" data-wow-delay="0.1s">
                <div className="donate-img position-relative">
                  <a href="donation-details.html">
                    {" "}
                    <img className="w-100" src="./src/assets/images/gallery/donate-2.png" alt="img" />{" "}
                  </a>
                  <div className="donate-badge">
                    <p className="subtitle">Crisis</p>
                  </div>
                </div>
                <div className="donate-info">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="donate-info-title">
                      <h4 className="title text-capitalize">
                        <a href="donation-details.html">War and Famine Devastate Tigray.</a>
                      </h4>
                      <p className="subtitle">Millions face starvation due to conflict and lack of farming resources.</p>
                      {/* <div className="progress custom-progress-two">
                      <div className="progress-bar" style="width: 65%"></div>
                    </div> */}
                      <div className="flex justify-content-between mt-14 mb-20">
                        <div className="flex gap-20">
                          <div className="charges">
                            <p className="pera">$15.000</p>
                            <h4 className="title">Goals</h4>
                          </div>
                          <div className="charges">
                            <p className="pera">$15.000</p>
                            <h4 className="title">Raised</h4>
                          </div>
                        </div>
                        <div className="forward-btn">
                          <i className="ri-reply-fill"></i>
                        </div>
                      </div>
                      <a href="donate-payment.html" className="btn donate-btn w-100">
                        Donate Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 view-wrapper">
              <div className="single-donate h-calc wow fadeInUp" data-wow-delay="0.2s">
                <div className="donate-img position-relative">
                  <a href="donation-details.html">
                    {" "}
                    <img className="w-100" src="./src/assets/images/gallery/Transform.png" alt="img" />{" "}
                  </a>
                  <div className="donate-badge">
                    <p className="subtitle">Transform</p>
                  </div>
                </div>
                <div className="donate-info">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="donate-info-title">
                      <h4 className="title text-capitalize">
                        <a href="donation-details.html">Break the Cycle of Hunger in Tigray</a>
                      </h4>
                      <p className="subtitle">Your support will provide seeds, tools, and agricultural training.</p>
                      {/* <div className="progress custom-progress-two">
                      <div className="progress-bar" style="width: 85%"></div>
                    </div> */}
                      <div className="flex justify-content-between mt-14 mb-20">
                        <div className="flex gap-20">
                          <div className="charges">
                            <p className="pera">$15.000</p>
                            <h4 className="title">Goals</h4>
                          </div>
                          <div className="charges">
                            <p className="pera">$15.000</p>
                            <h4 className="title">Raised</h4>
                          </div>
                        </div>
                        <div className="forward-btn">
                          <i className="ri-reply-fill"></i>
                        </div>
                      </div>
                      <a href="donate-payment.html" className="btn donate-btn w-100">
                        Donate Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End-of Donate */}

      {/* Testimonial S t a r t*/}
      <div className="testimonial-section-two" hidden={true}>
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-xl-7">
              {/* Section Tittle */}
              <div className="section-tittle mb-50">
                <span className="sub-tittle text-capitalize font-600">Testimonials</span>
                <h2 className="title font-700">what They`re Talking About Us</h2>
              </div>
            </div>
          </div>
          <div className="row g-24 testimonial-slider-two">
            <div className="col-xl-4">
              <div className="single-testimonial position-relative">
                <div className="client-info">
                  <div className="client-image">
                    <img src="./src/assets/images/gallery/testimonial-4.png" alt="image" />
                  </div>
                  <div className="client-details">
                    <h3 className="name">Robart Jonson</h3>
                    <p className="location">United , Canada</p>
                  </div>
                </div>
                <div className="position-absolute quote">
                  <svg xmlns="http://www.w3.org/2000/svg" width="54" height="33" viewBox="0 0 54 33" fill="none">
                    <path
                      opacity="0.25"
                      d="M0 2C0 0.895431 0.895431 0 2 0H20C21.1046 0 22 0.895431 22 2V29.4951C22 31.0437 20.3158 32.0048 18.9825 31.217L0.98254 20.5806C0.373596 20.2208 0 19.5661 0 18.8587V2Z"
                      fill="#00715D"
                    />
                    <path
                      opacity="0.25"
                      d="M32 2C32 0.895431 32.8954 0 34 0H52C53.1046 0 54 0.895431 54 2V29.4951C54 31.0437 52.3158 32.0048 50.9825 31.217L32.9825 20.5806C32.3736 20.2208 32 19.5661 32 18.8587V2Z"
                      fill="#00715D"
                    />
                  </svg>
                </div>
                <div className="position-relative">
                  <p className="pera">
                    <i>
                      These questions are used to provoke thought and discussion. They can be used to challenge the other person's
                      assumptions, such as "Do you really think that's true?"
                    </i>
                  </p>
                </div>
                <div className="rating">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="single-testimonial position-relative">
                <div className="client-info">
                  <div className="client-image">
                    <img src="./src/assets/images/gallery/testimonial-5.png" alt="image" />
                  </div>
                  <div className="client-details">
                    <h3 className="name">Carry Robart</h3>
                    <p className="location">United , Canada</p>
                  </div>
                </div>
                <div className="position-absolute quote">
                  <svg xmlns="http://www.w3.org/2000/svg" width="54" height="33" viewBox="0 0 54 33" fill="none">
                    <path
                      opacity="0.25"
                      d="M0 2C0 0.895431 0.895431 0 2 0H20C21.1046 0 22 0.895431 22 2V29.4951C22 31.0437 20.3158 32.0048 18.9825 31.217L0.98254 20.5806C0.373596 20.2208 0 19.5661 0 18.8587V2Z"
                      fill="#00715D"
                    />
                    <path
                      opacity="0.25"
                      d="M32 2C32 0.895431 32.8954 0 34 0H52C53.1046 0 54 0.895431 54 2V29.4951C54 31.0437 52.3158 32.0048 50.9825 31.217L32.9825 20.5806C32.3736 20.2208 32 19.5661 32 18.8587V2Z"
                      fill="#00715D"
                    />
                  </svg>
                </div>
                <div className="position-relative">
                  <p className="pera">
                    <i>
                      These questions are used to provoke thought and discussion. They can be used to challenge the other person's
                      assumptions, such as "Do you really think that's true?"
                    </i>
                  </p>
                </div>
                <div className="rating">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="single-testimonial position-relative">
                <div className="client-info">
                  <div className="client-image">
                    <img src="./src/assets/images/gallery/testimonial-6.png" alt="image" />
                  </div>
                  <div className="client-details">
                    <h3 className="name">Carry Marathi</h3>
                    <p className="location">United , Canada</p>
                  </div>
                </div>
                <div className="position-absolute quote">
                  <svg xmlns="http://www.w3.org/2000/svg" width="54" height="33" viewBox="0 0 54 33" fill="none">
                    <path
                      opacity="0.25"
                      d="M0 2C0 0.895431 0.895431 0 2 0H20C21.1046 0 22 0.895431 22 2V29.4951C22 31.0437 20.3158 32.0048 18.9825 31.217L0.98254 20.5806C0.373596 20.2208 0 19.5661 0 18.8587V2Z"
                      fill="#00715D"
                    />
                    <path
                      opacity="0.25"
                      d="M32 2C32 0.895431 32.8954 0 34 0H52C53.1046 0 54 0.895431 54 2V29.4951C54 31.0437 52.3158 32.0048 50.9825 31.217L32.9825 20.5806C32.3736 20.2208 32 19.5661 32 18.8587V2Z"
                      fill="#00715D"
                    />
                  </svg>
                </div>
                <div className="position-relative">
                  <p className="pera">
                    <i>
                      These questions are used to provoke thought and discussion. They can be used to challenge the other person's
                      assumptions, such as "Do you really think that's true?"
                    </i>
                  </p>
                </div>
                <div className="rating">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End-of Testimonial */}

      {/* Blog S t a r t */}
      <div className="blog-section-two section-padding2" hidden={true}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              {/* Section Tittle */}
              <div className="section-tittle text-center mb-50">
                <span className="sub-tittle text-capitalize font-600">Blog</span>
                <h2 className="title font-700">Our Blog & Feeds</h2>
              </div>
            </div>
          </div>
          <div className="row gy-24">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 view-wrapper">
              <div className="single-blog h-calc wow fadeInLeft" data-wow-delay="0.1s">
                <div className="blog-img position-relative">
                  <a href="blog-details.html">
                    {" "}
                    <img src="./src/assets/images/gallery/blog-4.png" className="img-fluid w-100" alt="img" />{" "}
                  </a>
                  <div className="blog-img-overlay-text">
                    <div className="flex gap-16 mb-20 align-items-center">
                      <div className="user flex gap-10 align-items-center">
                        <i className="ri-user-line"></i>
                        <p className="info">By: admin</p>
                      </div>
                      <div className="donate flex gap-10 align-items-center">
                        <i className="ri-chat-3-line"></i>
                        <p className="info">Donation</p>
                      </div>
                    </div>
                  </div>
                  <div className="blog-badge">
                    <p className="subtitle">
                      30 Jun <br />
                      2023
                    </p>
                  </div>
                </div>
                <div className="blog-info">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="blog-info-title">
                      <h4 className="title text-capitalize">
                        <a href="blog-details.html">Donate Your Money For Africa Poor Child.</a>
                      </h4>
                      <p className="subtitle">We understand that there are many people organization The seeking support,</p>
                      <a href="blog-details.html" className="imp-link">
                        Read More <i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 view-wrapper">
              <div className="single-blog h-calc wow fadeInUp" data-wow-delay="0.0s">
                <div className="blog-img position-relative">
                  <a href="blog-details.html">
                    {" "}
                    <img src="./src/assets/images/gallery/blog-5.png" className="img-fluid w-100" alt="img" />{" "}
                  </a>
                  <div className="blog-img-overlay-text">
                    <div className="flex gap-16 mb-20 align-items-center">
                      <div className="user flex gap-10 align-items-center">
                        <i className="ri-user-line"></i>
                        <p className="info">By: admin</p>
                      </div>
                      <div className="donate flex gap-10 align-items-center">
                        <i className="ri-chat-3-line"></i>
                        <p className="info">Donation</p>
                      </div>
                    </div>
                  </div>
                  <div className="blog-badge">
                    <p className="subtitle">
                      30 Jun <br />
                      2023
                    </p>
                  </div>
                </div>
                <div className="blog-info">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="blog-info-title">
                      <h4 className="title text-capitalize">
                        <a href="blog-details.html">Donate Your Money For Africa Poor Child.</a>
                      </h4>
                      <p className="subtitle">We understand that there are many people organization The seeking support,</p>
                      <a href="blog-details.html" className="imp-link">
                        Read More <i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 view-wrapper">
              <div className="single-blog h-calc wow fadeInRight" data-wow-delay="0.1s">
                <div className="blog-img position-relative">
                  <a href="blog-details.html">
                    {" "}
                    <img src="./src/assets/images/gallery/blog-6.png" className="img-fluid w-100" alt="img" />{" "}
                  </a>
                  <div className="blog-img-overlay-text">
                    <div className="flex gap-16 mb-20 align-items-center">
                      <div className="user flex gap-10 align-items-center">
                        <i className="ri-user-line"></i>
                        <p className="info">By: admin</p>
                      </div>
                      <div className="donate flex gap-10 align-items-center">
                        <i className="ri-chat-3-line"></i>
                        <p className="info">Donation</p>
                      </div>
                    </div>
                  </div>
                  <div className="blog-badge">
                    <p className="subtitle">
                      30 Jun <br />
                      2023
                    </p>
                  </div>
                </div>
                <div className="blog-info">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="blog-info-title">
                      <h4 className="title text-capitalize">
                        <a href="blog-details.html">Donate Your Money For Africa Poor Child.</a>
                      </h4>
                      <p className="subtitle">We understand that there are many people organization The seeking support,</p>
                      <a href="blog-details.html" className="imp-link">
                        Read More <i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End-of Blog */}

      {/* Popular brand S t a r t */}
      <div className="popular-brand-section bottom-padding" hidden={true}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="brand-img-container">
                <div className="flex justify-content-between brand-img-slider align-items-center">
                  <div className="brand-img">
                    <img src="./src/assets/images/gallery/brand-1.png" alt="image" />
                  </div>
                  <div className="brand-img">
                    <img src="./src/assets/images/gallery/brand-2.png" alt="image" />
                  </div>
                  <div className="brand-img">
                    <img src="./src/assets/images/gallery/brand-3.png" alt="image" />
                  </div>
                  <div className="brand-img">
                    <img src="./src/assets/images/gallery/brand-4.png" alt="image" />
                  </div>
                  <div className="brand-img">
                    <img src="./src/assets/images/gallery/brand-1.png" alt="image" />
                  </div>

                  <div className="brand-img">
                    <img src="./src/assets/images/gallery/brand-2.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
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
      </footer>
    </>
  );
}

export default Home;
