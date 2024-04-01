import React from "react";
import HelpfulAreaCollection from "./HelpfulAreaCollection";
import Breadcrumb from './Breadcrumb';
import DonationsCollection from "./DonationCollection";
import TeamCollection from './TeamCollection';
import AboutUsContent from './AboutUsContent';

function AboutUs() {
  const breadcrumbPath = [
    { label: "Home", href: "/" },
    // You can add more path items if necessary
  ];
    // The current page title
    const currentPage = "About Us";
  return (
    <>
      {/* Breadcrumb Area S t a r t */}
      <section className="breadcrumb-section breadcrumb-bg">
         {/* Use the Breadcrumb component and pass the props */}
      <Breadcrumb pathItems={breadcrumbPath} currentPage={currentPage} />
      </section>
      {/* End-of Breadcrumb Area */}
      {/* About us Area S t a r t */}
      <section className="about-area">
        <AboutUsContent />
      </section>
      {/* End-of About us Area */}

      {/* helpful area S t a r t*/}
      <section className="helpful-area-three section-padding">
       <HelpfulAreaCollection />
      </section>
      {/* End-of helpful*/}

      {/* Team Area S t a r t */}
      <section className="team-section top-padding">
        <TeamCollection />
      </section>
      {/* End-of Team */}

      {/* Donate S t a r t */}
      <DonationsCollection />
      {/* End-of Donate */}
    </>
  );
}

export default AboutUs;
