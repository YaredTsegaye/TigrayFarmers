// DonationsCollection.jsx
import React from 'react';
import DonationComponent from './DonationComponent';
import Breadcrumb from './Breadcrumb';

const donationsData = [
  {
    imgSrc: "./src/assets/images/gallery/Empower.png",
    badgeText: "Empower",
    title: "Help Tigray Farmers Rebuild Their Lives",
    description: "Donate today to empower farmers in Tigray with vital tools and resources.",
    goalAmount: "$15.000",
    raisedAmount: "$15.000",
    donationLink: "donation-details.html"
  },
  {
    imgSrc: "./src/assets/images/gallery/crisis.png",
    badgeText: "Crisis",
    title: "War and Famine Devastate Tigray.",
    description: "Millions face starvation due to conflict and lack of farming resources.",
    goalAmount: "$15.000",
    raisedAmount: "$15.000",
    donationLink: "donation-details.html"
  },
  {
    imgSrc: "./src/assets/images/gallery/cycleofhunger.png",
    badgeText: "Transform",
    title: "Break the Cycle of Hunger in Tigray",
    description: "Your support will provide seeds, tools, and agricultural training.",
    goalAmount: "$15.000",
    raisedAmount: "$15.000",
    donationLink: "donation-details.html"
  },
];

function DonationCollection() {
  const breadcrumbPath = [
    { label: "Home", href: "/" },
  ];
    // The current page title
    const currentPage = "Donation";
  return (
    <>
    {/* Breadcrumb Area S t a r t */}
    <section className="breadcrumb-section breadcrumb-bg">
         {/* Use the Breadcrumb component and pass the props */}
      <Breadcrumb pathItems={breadcrumbPath} currentPage={currentPage} />
      </section>
      {/* End-of Breadcrumb Area */}
  <div className="donate-section bottom-padding">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-7">
          {/* Section Title */}
          <div className="section-tittle text-center mb-50">
            <span className="sub-tittle text-capitalize font-600">Support & Make a Difference in Lives</span>
            <h2 className="title font-700">Help & Donate Us Now</h2>
          </div>
        </div>
      </div>
      <div className="row gy-24">
        {donationsData.map((donation, index) => (
          <DonationComponent key={index} {...donation} />
        ))}
      </div>
    </div>
  </div>
  </>
);
}

export default DonationCollection;
