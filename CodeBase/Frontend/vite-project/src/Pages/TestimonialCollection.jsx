// TestimonialCollection.jsx
import React from 'react';
import TestimonialDetail from './TestimonialDetail';

const testimonials = [
  {
    image: "./src/assets/images/gallery/testimonial-4.png",
    name: "Robart Jonson",
    location: "United, Canada",
    quote: "These questions are used to provoke thought and discussion...",
    rating: 5,
  },
  // Add other testimonials here...
];

const TestimonialCollection = () => (
  <div className="testimonial-section-two" hidden={true}>
    <div className="container">
      <div className="row justify-content-start">
        <div className="col-xl-7">
          {/* Section Title */}
          <div className="section-tittle mb-50">
            <span className="sub-tittle text-capitalize font-600">Testimonials</span>
            <h2 className="title font-700">what They're Talking About Us</h2>
          </div>
        </div>
      </div>
      <div className="row g-24 testimonial-slider-two">
        {testimonials.map((testimonial, index) => (
          <TestimonialDetail key={index} {...testimonial} />
        ))}
      </div>
    </div>
  </div>
);

export default TestimonialCollection;
