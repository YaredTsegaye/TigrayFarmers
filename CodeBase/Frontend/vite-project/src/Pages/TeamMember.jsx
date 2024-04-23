import PropTypes from 'prop-types';

const TeamMember = ({ imageUrl, name, role, socialLinks, description, onCardClick }) => (
  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 view-wrapper" onClick={onCardClick}>
    <div className="single-team h-calc wow fadeInUp" data-wow-delay="0.0s">
      <div className="team-img">
        <img src={imageUrl} className="img-fluid w-100" alt="team member" />
      </div>
      <div className="team-info">
        <div className="d-flex justify-content-between align-items-center">
          <div className="team-info-title mb-8">
            <div className="d-flex gap-40 align-items-center">
              <div className="content">
                <h4 className="title text-capitalize">{name}</h4>
                <p className="pera">{role}</p>
                <p className="pera">{description}</p>
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

TeamMember.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    })
  ).isRequired,
  onCardClick: PropTypes.func.isRequired
};

export default TeamMember;
