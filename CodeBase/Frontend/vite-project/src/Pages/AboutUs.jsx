import React, {useEffect} from "react";
import { useBreadcrumb } from './BreadcrumbContext';
import HelpfulAreaCollection from "./HelpfulAreaCollection";
import DonationsCollection from "./DonationCollection";
import TeamCollection from './TeamCollection';
import AboutUsContent from './AboutUsContent';

function AboutUs() {
  const { setBreadcrumbs } = useBreadcrumb();

  useEffect(() => {
    // Set the breadcrumb path for the DonationCollection page and make it visible
    setBreadcrumbs({
      items: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/AboutUs" }
      ],
      isVisible: true
    });
  }, [setBreadcrumbs]);
 
  return (
    <>
      
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
