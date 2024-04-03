// ProjectCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ProjectCard ({ project }) {
  if (!project) {
    return null;
  }
  return (
    <>
  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 view-wrapper">
    <div className="single-donate h-calc">
      <div className="donate-img position-relative">
        <Link to={`/ProjectDetail/${project.Id}`} state={{ project }}>
          <img className="w-100" src={project.imageUrl} alt="img" />
        </Link>
        <div className="donate-badge">
          <p className="subtitle">{project.category}</p>
        </div>
      </div>
      <div className="donate-info">
        <div className="d-flex justify-content-between align-items-center">
          <div className="donate-info-title">
            <h4 className="title text-capitalize">
              <a href={project.link}>{project.title}</a>
            </h4>
            <p className="subtitle">{project.description}</p>
            {/* Assuming progress is calculated based on goal and raised amounts */}
            <div className="progress custom-progress-two">
              <div className="progress-bar" style={{ width: `${(project.raised / project.goal) * 100}%` }}></div>
            </div>
            <div className="flex justify-content-between mt-14 mb-20">
              <div className="flex gap-20">
                <div className="charges">
                  <p className="pera">${project.goal}</p>
                  <h4 className="title">Goal</h4>
                </div>
                <div className="charges">
                  <p className="pera">${project.raised}</p>
                  <h4 className="title">Raised</h4>
                </div>
              </div>
            </div>
            <Link to={`/ProjectDetail/${project.Id}`} state={{ project }}>Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
);
}
ProjectCard.propTypes = {
  project: PropTypes.shape({
    Id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    goal: PropTypes.number,
    raised: PropTypes.number,
    link: PropTypes.string
  }).isRequired,
};
export default ProjectCard;
