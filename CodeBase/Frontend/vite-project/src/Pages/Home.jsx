import React from "react";
import DonationsCollection from "./DonationCollection";
import HelpfulAreaCollection from './HelpfulAreaCollection';
import TestimonialCollection from './TestimonialCollection';
import BlogCollection from './BlogCollection';
import Hero from './Hero';

function Home() {
  return (
    <>
      {/* Hero area S t a r t*/}
      <Hero 
        titleKey="Help Tigrayan Farmers Rebuild Their Lives"
        titleMain="Sow Seeds of Hope: Rebuild Tigray Together!"
        description="Join us in nurturing the future of Tigray—donate now to help our farmers flourish anew"
        donateLink="donation.html"
        volunteerLink="volunteer.html"
        heroImage="./src/assets/images/hero/farmer.png"
      />
      {/* End-of Hero*/}

      {/* helpful area S t a r t*/}
      <HelpfulAreaCollection />
      {/* End-of helpful*/}

      {/* Donate S t a r t */}
      <DonationsCollection />
      {/* End-of Donate */}

      {/* Testimonial S t a r t*/}
      <TestimonialCollection />
      {/* End-of Testimonial */}

      {/* Blog S t a r t */}
      <BlogCollection />
      {/* End-of Blog */}

    </>
  );
}

export default Home;
