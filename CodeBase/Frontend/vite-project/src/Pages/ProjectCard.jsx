// ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ imageUrl, category, title, description, goal, raised, link }) => (
  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 view-wrapper">
    <div className="single-donate h-calc">
      <div className="donate-img position-relative">
        <a href={link}>
          <img className="w-100" src={imageUrl} alt="img" />
        </a>
        <div className="donate-badge">
          <p className="subtitle">{category}</p>
        </div>
      </div>
      <div className="donate-info">
        <div className="d-flex justify-content-between align-items-center">
          <div className="donate-info-title">
            <h4 className="title text-capitalize">
              <a href={link}>{title}</a>
            </h4>
            <p className="subtitle">{description}</p>
            {/* Assuming progress is calculated based on goal and raised amounts */}
            <div className="progress custom-progress-two">
              <div className="progress-bar" style={{ width: `${(raised / goal) * 100}%` }}></div>
            </div>
            <div className="flex justify-content-between mt-14 mb-20">
              <div className="flex gap-20">
                <div className="charges">
                  <p className="pera">${goal}</p>
                  <h4 className="title">Goal</h4>
                </div>
                <div className="charges">
                  <p className="pera">${raised}</p>
                  <h4 className="title">Raised</h4>
                </div>
              </div>
            </div>
            <a href={link} className="btn donate-btn w-100">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;
