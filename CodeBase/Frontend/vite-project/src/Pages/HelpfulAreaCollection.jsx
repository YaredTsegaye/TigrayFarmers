// HelpfulAreaCollection.jsx
import React from 'react';
import HelpfulCard from './HelpfulCard';

const helpfulAreas = [
  {
    iconClass: "ri-shake-hands-line",
    title: "Equip",
    description: "Provide essential farming tools and equipment (plows, seeds, fertilizer, etc.)",
  },
  {
    iconClass: "ri-graduation-cap-line",
    title: "Revitalize",
    description: "Rebuild vital infrastructure, like irrigation systems and grain mills.",
  },
  {
    iconClass: "ri-user-line",
    title: "Innovate",
    description: "Introduce modern agricultural techniques to increase yields and resilience.",
  },
  {
    iconClass: "ri-money-dollar-circle-line",
    title: "Harmonize",
    description: "Collaborate with local communities to prioritize their immediate and long-term needs.",
  },
];

const HelpfulAreaCollection = () => (
  <div className="helpful-area">
    <div className="container">
      <div className="row gy-24">
        {helpfulAreas.map((area, index) => (
          <HelpfulCard key={index} {...area} />
        ))}
      </div>
    </div>
  </div>
);

export default HelpfulAreaCollection;
