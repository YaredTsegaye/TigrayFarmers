import React from "react";
function ContactDetails({ icon, subtitle, title }) {
  return (
    <div className="contact-icon-list">
      <div className="single-icon">
        <i className={icon}></i>
      </div>
      <div className="divider-ver"></div>
      <div className="contact-content">
        <p className="subtitle">{subtitle}</p>
        <a className="title" href="javascript:void(0)">
          {title}
        </a>
      </div>
    </div>
  );
}

export default ContactDetails;
