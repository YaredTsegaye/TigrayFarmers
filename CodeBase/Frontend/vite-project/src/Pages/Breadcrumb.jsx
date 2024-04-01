// Breadcrumb.jsx
import React from 'react';

const Breadcrumb = ({ pathItems, currentPage }) => (
  <section className="breadcrumb-section breadcrumb-bg">
    <div className="container">
      <div className="breadcrumb-text">
        <nav aria-label="breadcrumb" className="breadcrumb-nav wow fadeInUp" data-wow-delay="0.0s">
          <ul className="breadcrumb listing">
            {pathItems.map((item, index) => (
              <li key={index} className="breadcrumb-item single-list">
                <a href={item.href} className="single">
                  {item.label}
                </a>
              </li>
            ))}
            <li className="breadcrumb-item single-list" aria-current="page">
              <span className="single">{currentPage}</span>
            </li>
          </ul>
        </nav>
        <h1 className="title wow fadeInUp" data-wow-delay="0.1s">
          {currentPage}
        </h1>
      </div>
    </div>
  </section>
);

export default Breadcrumb;
