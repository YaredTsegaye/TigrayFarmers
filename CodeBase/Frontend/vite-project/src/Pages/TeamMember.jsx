// TeamMember.jsx
import React from 'react';

const TeamMember = ({ imageUrl, name, role, socialLinks }) => (
  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 view-wrapper">
    <div className="single-team h-calc wow fadeInUp" data-wow-delay="0.0s">
      <div className="team-img">
        <a href="volunteer-details.html">
          <img src={imageUrl} className="img-fluid w-100" alt="img" />
        </a>
      </div>
      <div className="team-info">
        <div className="d-flex justify-content-between align-items-center">
          <div className="team-info-title mb-8">
            <div className="d-flex gap-40 align-items-center">
              <div className="content">
                <h4 className="title text-capitalize">
                  <a href="volunteer-details.html">{name}</a>
                </h4>
                <p className="pera">{role}</p>
              </div>
              <div className="social">
                {socialLinks.map((link, index) => (
                  <a key={index} className="hover-icon social-icon" href={link.href}>
                    <i className={link.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TeamMember;
