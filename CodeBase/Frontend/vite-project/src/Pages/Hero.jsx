// Hero.jsx
import React from 'react';

const Hero = ({ titleKey, titleMain, description, donateLink, volunteerLink, heroImage }) => (
  <div className="hero-area">
    <div className="single-slider hero-padding">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xxl-6 col-xl-6 col-lg-6 my-auto">
            <div className="hero-caption-one mb-20">
              <h4 className="key-title font-700 mb-20 wow fadeInUp" data-wow-delay="0.0s">
                {titleKey}
              </h4>
              <h1 className="title font-700 wow fadeInUp" data-wow-delay="0.1s">
                {titleMain}
              </h1>
              <p className="pera wow fadeInUp" data-wow-delay="0.3s">
                {description}
              </p>
              <div className="d-flex gap-20 flex-wrap">
                <a href={donateLink} className="btn-primary-fill hero-btn wow fadeInLeft" data-wow-delay="0.4s">
                  Donate Now
                </a>
                <a href={volunteerLink} className="btn-tertiary-fill hero-btn wow fadeInRight" data-wow-delay="0.4s">
                  Join Volunteers
                </a>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="d-flex gap-44">
              <div className="hero-image position-relative d-none d-lg-block">
                <img
                  src={heroImage}
                  alt="img"
                  className="w-100 tilt-effect wow fadeInUp"
                  data-wow-delay="0.1s"
                />
              </div>
              {/* Optional: If you have dynamic content for the hero-count-section, you can include it here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
