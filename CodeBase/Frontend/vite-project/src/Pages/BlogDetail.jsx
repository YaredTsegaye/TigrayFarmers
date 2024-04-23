// BlogDetail.jsx
import React from 'react';

const BlogDetail = ({ imageUrl, author, category, date, title, subtitle, detailLink }) => (
  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 view-wrapper">
    <div className="single-blog h-calc wow fadeInLeft" data-wow-delay="0.1s">
      <div className="blog-img position-relative">
        <a href={detailLink}>
          <img src={imageUrl} className="img-fluid w-100" alt="img" />
        </a>
        <div className="blog-img-overlay-text">
          <div className="flex gap-16 mb-20 align-items-center">
            <div className="user flex gap-10 align-items-center">
              <i className="ri-user-line"></i>
              <p className="info">By: {author}</p>
            </div>
            <div className="donate flex gap-10 align-items-center">
              <i className="ri-chat-3-line"></i>
              <p className="info">{category}</p>
            </div>
          </div>
        </div>
        <div className="blog-badge">
          <p className="subtitle">{date}</p>
        </div>
      </div>
      <div className="blog-info">
        <div className="d-flex justify-content-between align-items-center">
          <div className="blog-info-title">
            <h4 className="title text-capitalize">
              <a href={detailLink}>{title}</a>
            </h4>
            <p className="subtitle">{subtitle}</p>
            <a href={detailLink} className="imp-link">
              Read More <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BlogDetail;
