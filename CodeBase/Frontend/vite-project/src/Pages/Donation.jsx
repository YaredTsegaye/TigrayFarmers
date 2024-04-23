import React from 'react';

const Donation = ({ title, description, goalAmount, raisedAmount }) => (
  <div className="donate-info">
    <div className="donate-info-title">
      <h4 className="title text-capitalize">
        <a href="donation-details.html">{title}</a>
      </h4>
      <p className="subtitle">{description}</p>
    </div>
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
    </div>
    <a href="donate-payment.html" className="btn donate-btn w-100">
      Donate Now
    </a>
  </div>
);

export default Donation;
