import React from "react";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

function ContactUsContent() {
  return (
    <div className="volunteer-details top-bottom-padding2">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="contact-section">
              <div className="contact-list">
                <ContactDetails icon="ri-phone-fill" subtitle="Phone" title="+ 012 345 678" />
                <ContactDetails icon="ri-mail-fill" subtitle="Email" title="Helpfull@gmail.com" />
                <ContactDetails icon="ri-map-pin-line" subtitle="Location" title="View on Google Map" />
              </div>
            </div>
          </div>
        </div>
        <div className="top-padding4">
          <div className="row gy-24">
            <div className="col-xl-6">
              <ContactForm />
            </div>
            <div className="col-xl-6">
              <iframe
                className="map-frame"
                src="https://maps.googleapis.com/maps/api/js?key=&callback=initMap"
                width="600"
                height="450"
                style={{ border: "15px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsContent;
