// TestimonialDetail.jsx
import React from 'react';

const TestimonialDetail = ({ image, name, location, quote, rating }) => (
  <div className="col-xl-4">
    <div className="single-testimonial position-relative">
      <div className="client-info">
        <div className="client-image">
          <img src={image} alt="image" />
        </div>
        <div className="client-details">
          <h3 className="name">{name}</h3>
          <p className="location">{location}</p>
        </div>
      </div>
      <div className="position-absolute quote">{/* SVG goes here if needed */}</div>
      <div className="position-relative">
        <p className="pera"><i>{quote}</i></p>
      </div>
      <div className="rating">
        {[...Array(rating)].map((_, i) => (
          <i key={i} className="ri-star-fill"></i>
        ))}
      </div>
    </div>
  </div>
);

export default TestimonialDetail;
