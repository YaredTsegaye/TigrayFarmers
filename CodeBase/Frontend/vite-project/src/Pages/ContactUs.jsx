import React from "react";
import Breadcrumb from "./Breadcrumb";
import ContactUsContent from "./ContactUsContent";

function ContactUs() {
  const breadcrumbPath = [
    { label: "Home", href: "/" },
    // You can add more path items if necessary
  ];
  // The current page title
  const currentPage = "Contact Us";
  return (
    <>
      {/* Breadcrumb Area S t a r t */}
      <section className="breadcrumb-section breadcrumb-bg">
        {/* Use the Breadcrumb component and pass the props */}
        <Breadcrumb pathItems={breadcrumbPath} currentPage={currentPage} />
      </section>
      {/* End-of Breadcrumb Area */}

      {/* Contact area S t a r t*/}
      <section className="volunteer-details top-bottom-padding2">
        <ContactUsContent />
      </section>
      {/* End-of contact*/}
    </>
  );
}

export default ContactUs;
