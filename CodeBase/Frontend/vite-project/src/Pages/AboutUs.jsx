import React from "react";

function AboutUs() {
  return (
    <>
      {/* Breadcrumb Area S t a r t */}
      <section className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="breadcrumb-text">
            <nav aria-label="breadcrumb" className="breadcrumb-nav wow fadeInUp" data-wow-delay="0.0s">
              <ul className="breadcrumb listing">
                <li className="breadcrumb-item single-list">
                  <a href="index.html" className="single">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item single-list" aria-current="page">
                  <a href="javascript:void(0)" className="single">
                    About Us
                  </a>
                </li>
              </ul>
            </nav>
            <h1 className="title wow fadeInUp" data-wow-delay="0.1s">
              About Us
            </h1>
          </div>
        </div>
      </section>
      {/* End-of Breadcrumb Area */}

      {/* helpful area S t a r t*/}
      <section className="helpful-area-three section-padding">
        <div className="container">
          <div className="row g-24">
            <div className="col-xl-3 col-md-6 col-lg-6">
              <div className="helpful-card wow fadeInUp" data-wow-delay="0.0s">
                <div className="helpful-card-icon">
                  <i className="ri-hand-coin-line"></i>
                </div>
                <div className="helpful-card-caption">
                  <h4 className="caption-title">Medical & Blood</h4>
                  <p className="caption-para">When deciding which charity to donate to, it important to do your research.</p>
                  <a href="javascript:void(0)" className="imp-link">
                    Read More <i className="ri-arrow-right-up-line"></i>
                  </a>
                </div>
                <div className="number-watermark">
                  <h4 className="number">01</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-6">
              <div className="helpful-card wow fadeInUp" data-wow-delay="0.10s">
                <div className="helpful-card-icon">
                  <i className="ri-24-hours-line"></i>
                </div>
                <div className="helpful-card-caption">
                  <h4 className="caption-title">Social Service</h4>
                  <p className="caption-para">When deciding which charity to donate to, it important to do your research.</p>
                  <a href="javascript:void(0)" className="imp-link">
                    Read More <i className="ri-arrow-right-up-line"></i>
                  </a>
                </div>
                <div className="number-watermark">
                  <h4 className="number">02</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-6">
              <div className="helpful-card wow fadeInUp" data-wow-delay="0.20s">
                <div className="helpful-card-icon">
                  <i className="ri-exchange-dollar-line"></i>
                </div>
                <div className="helpful-card-caption">
                  <h4 className="caption-title">Send a Charitable</h4>
                  <p className="caption-para">When deciding which charity to donate to, it important to do your research.</p>
                  <a href="javascript:void(0)" className="imp-link">
                    Read More <i className="ri-arrow-right-up-line"></i>
                  </a>
                </div>
                <div className="number-watermark">
                  <h4 className="number">03</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-6">
              <div className="helpful-card wow fadeInUp" data-wow-delay="0.03s">
                <div className="helpful-card-icon">
                  <i className="ri-book-open-line"></i>
                </div>
                <div className="helpful-card-caption">
                  <h4 className="caption-title">Education</h4>
                  <p className="caption-para">When deciding which charity to donate to, it important to do your research.</p>
                  <a href="javascript:void(0)" className="imp-link">
                    Read More <i className="ri-arrow-right-up-line"></i>
                  </a>
                </div>
                <div className="number-watermark">
                  <h4 className="number">04</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End-of helpful*/}

      {/* About us Area S t a r t */}
      <section className="about-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6 my-auto">
              {/* Section Tittle */}
              <div className="section-tittle mb-35">
                <span className="sub-tittle text-capitalize font-600">About us</span>
                <h2 className="title font-700 pb-15">We Are Best Treatment For Our Hospita</h2>
                <p className="pera-subtitle mb-15">
                  When deciding which charity to donate to, it's important to do your e search and find one that aligns with your values and
                  interests. Look for charities that are transparent preventable diseases,
                </p>
                <p className="pera-subtitle">
                  When deciding which charity to donate to, it's important to do your e search and find one that aligns with your values and
                  interests. Look for charities that are transparent preventable diseases,
                </p>
              </div>
              <div className="about-info">
                <div className="row">
                  <div className="col-lg-10 mb-20">
                    <div className="d-flex gap-20">
                      <div className="info-icon">
                        <i className="ri-hand-heart-line"></i>
                      </div>
                      <div className="info-content">
                        <h4 className="title">Donation</h4>
                        <p className="pera">Fund programs that help children escape poverty providing vocational training.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-10 mb-20">
                    <div className="d-flex gap-20">
                      <div className="info-icon">
                        <i className="ri-user-line"></i>
                      </div>

                      <div className="info-content">
                        <h4 className="title">Volunteer</h4>
                        <p className="pera">Fund programs that help children escape poverty providing vocational training.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-10 mt-10">
                    <a href="about.html" className="btn btn-primary-fill">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="position-relative h-100">
                <div>
                  <img className="w-100 d-none d-lg-block" src="/src/assets/images/gallery/about-3.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End-of About us Area */}

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

      {/* Team Area S t a r t */}
      <section className="team-section top-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              {/* Section Tittle */}
              <div className="section-tittle text-center mb-50">
                <span className="sub-tittle text-capitalize font-600">Expert Team</span>
                <h2 className="title font-700">Meet our volunteer team</h2>
              </div>
            </div>
          </div>
          <div className="row gy-24">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 view-wrapper">
              <div className="single-team h-calc wow fadeInUp" data-wow-delay="0.0s">
                <div className="team-img">
                  <a href="volunteer-details.html">
                    <img src="/src/assets/images/gallery/team-1.png" className="img-fluid w-100" alt="img" />
                  </a>
                </div>
                <div className="team-info">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="team-info-title mb-8">
                      <div className="d-flex gap-40 align-items-center">
                        <div className="content">
                          <h4 className="title text-capitalize">
                            <a href="volunteer-details.html">david warner</a>
                          </h4>
                          <p className="pera">sir bradman</p>
                        </div>
                        <div className="social">
                          <a className="hover-icon" href="javascript:void(0)">
                            <i className="ri-share-fill"></i>
                          </a>
                          <div className="all-social-icon">
                            <a className="social-icon" href="javascript:void(0)">
                              <i className="ri-google-fill"></i>
                            </a>
                            <a className="social-icon" href="javascript:void(0)">
                              <i className="ri-facebook-fill"></i>
                            </a>
                            <a className="social-icon" href="javascript:void(0)">
                              <i className="ri-linkedin-fill"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 view-wrapper">
              <div className="single-team h-calc wow fadeInUp" data-wow-delay="0.1s">
                <div className="team-img">
                  <a href="volunteer-details.html">
                    <img src="/src/assets/images/gallery/team-2.png" className="img-fluid w-100" alt="img" />
                  </a>
                </div>
                <div className="team-info">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="team-info-title mb-8">
                      <div className="d-flex gap-40 align-items-center">
                        <div className="content">
                          <h4 className="title text-capitalize">
                            <a href="volunteer-details.html">Jony Bristow</a>
                          </h4>
                          <p className="pera">sir bradman</p>
                        </div>
                        <div className="social">
                          <a className="hover-icon" href="javascript:void(0)">
                            <i className="ri-share-fill"></i>
                          </a>
                          <div className="all-social-icon">
                            <a className="social-icon" href="javascript:void(0)">
                              <i className="ri-google-fill"></i>
                            </a>
                            <a className="social-icon" href="javascript:void(0)">
                              <i className="ri-facebook-fill"></i>
                            </a>
                            <a className="social-icon" href="javascript:void(0)">
                              <i className="ri-linkedin-fill"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 view-wrapper">
              <div className="single-team h-calc wow fadeInUp" data-wow-delay="0.2s">
                <div className="team-img">
                  <a href="volunteer-details.html">
                    <img src="/src/assets/images/gallery/team-3.png" className="img-fluid w-100" alt="img" />
                  </a>
                </div>
                <div className="team-info">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="team-info-title mb-8">
                      <div className="d-flex gap-40 align-items-center">
                        <div className="content">
                          <h4 className="title text-capitalize">
                            <a href="volunteer-details.html">david warner</a>
                          </h4>
                          <p className="pera">sir bradman</p>
                        </div>
                        <div className="social">
                          <a className="hover-icon" href="javascript:void(0)">
                            <i className="ri-share-fill"></i>
                          </a>
                          <div className="all-social-icon">
                            <a className="social-icon" href="javascript:void(0)">
                              <i className="ri-google-fill"></i>
                            </a>
                            <a className="social-icon" href="javascript:void(0)">
                              <i className="ri-facebook-fill"></i>
                            </a>
                            <a className="social-icon" href="javascript:void(0)">
                              <i className="ri-linkedin-fill"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End-of Team */}

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
    </>
  );
}

export default AboutUs;
