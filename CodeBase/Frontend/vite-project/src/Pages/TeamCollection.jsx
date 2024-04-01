// TeamCollection.jsx
import React from 'react';
import TeamMember from './TeamMember';

const teamMembers = [
  {
    imageUrl: "/src/assets/images/gallery/team-1.png",
    name: "David Warner",
    role: "Sir Bradman",
    socialLinks: [
      { href: "javascript:void(0)", icon: "ri-google-fill" },
      { href: "javascript:void(0)", icon: "ri-facebook-fill" },
      { href: "javascript:void(0)", icon: "ri-linkedin-fill" },
    ],
  },
  {
    imageUrl: "/src/assets/images/gallery/team-2.png",
    name: "Jony Bristow",
    role: "Sir Bradman",
    socialLinks: [
      { href: "javascript:void(0)", icon: "ri-google-fill" },
      { href: "javascript:void(0)", icon: "ri-facebook-fill" },
      { href: "javascript:void(0)", icon: "ri-linkedin-fill" },
    ],
  },
  {
    imageUrl: "/src/assets/images/gallery/team-3.png",
    name: "Marnus Labuschagne",
    role: "Future Legend",
    socialLinks: [
      { href: "javascript:void(0)", icon: "ri-google-fill" },
      { href: "javascript:void(0)", icon: "ri-facebook-fill" },
      { href: "javascript:void(0)", icon: "ri-linkedin-fill" },
    ],
  },
  // Add as many team members as you need following the pattern above
];

const TeamCollection = () => (
  <section className="team-section top-padding">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-7">
          <div className="section-tittle text-center mb-50">
            <span className="sub-tittle text-capitalize font-600">Expert Team</span>
            <h2 className="title font-700">Meet our volunteer team</h2>
          </div>
        </div>
      </div>
      <div className="row gy-24">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  </section>
);

export default TeamCollection;
