// HelpfulCard.jsx
import React from 'react';

const HelpfulCard = ({ iconClass, title, description }) => (
  <div className="col-xl-3 col-md-6 col-lg-6">
    <div className="helpful-card h-calc wow fadeInLeft" data-wow-delay="0.2s">
      <div className="helpful-card-icon">
        <i className={iconClass}></i>
      </div>
      <div className="helpful-card-caption">
        <h4 className="caption-title">{title}</h4>
        <p className="caption-para">{description}</p>
      </div>
    </div>
  </div>
);

export default HelpfulCard;
