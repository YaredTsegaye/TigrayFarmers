// DonationComponent.jsx
import React from 'react';

const DonationComponent = ({ imgSrc, badgeText, title, description, goalAmount, raisedAmount, donationLink }) => (
  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 view-wrapper">
    <div className="single-donate h-calc wow fadeInUp">
      <div className="donate-img position-relative">
        <a href={donationLink}>
          <img className="w-100" src={imgSrc} alt="img" />
        </a>
        <div className="donate-badge">
          <p className="subtitle">{badgeText}</p>
        </div>
      </div>
      <div className="donate-info">
        <div className="d-flex justify-content-between align-items-center">
          <div className="donate-info-title">
            <h4 className="title text-capitalize">
              <a href={donationLink}>{title}</a>
            </h4>
            <p className="subtitle">{description}</p>
            <div className="flex justify-content-between mt-14 mb-20">
              <div className="flex gap-20">
                <div className="charges">
                  <p className="pera">{goalAmount}</p>
                  <h4 className="title">Goals</h4>
                </div>
                <div className="charges">
                  <p className="pera">{raisedAmount}</p>
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
);

export default DonationComponent;
