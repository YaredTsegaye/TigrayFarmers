// ProjectCollection.jsx
import React from "react";
import ProjectCard from "./ProjectCard";
import Breadcrumb from "./Breadcrumb";
import ProjectDetail from "./ProjectDetail";

const projectsData = [
  {
    imageUrl: "./src/assets/images/gallery/donate-1.png",
    category: "Food",
    title: "Empower Rural Farmers",
    description: "Supporting food security and sustainable farming practices.",
    goal: 20000,
    raised: 5000,
    link: "project-details.html",
  },
  {
    imageUrl: "./src/assets/images/gallery/donate-2.png",
    category: "Education",
    title: "Build Schools in Rural Areas",
    description:
      "Funding the construction of schools in underdeveloped regions.",
    goal: 30000,
    raised: 15000,
    link: "project-details.html",
  },
  {
    imageUrl: "./src/assets/images/gallery/donate-3.png",
    category: "Medical",
    title: "Mobile Health Clinics",
    description:
      "Providing accessible healthcare services to remote communities.",
    goal: 25000,
    raised: 10000,
    link: "project-details.html",
  },
  {
    imageUrl: "./src/assets/images/gallery/donate-6.png",
    category: "Water",
    title: "Clean Water for Everyone",
    description: "Drilling wells to ensure access to clean drinking water.",
    goal: 18000,
    raised: 12000,
    link: "project-details.html",
  },
  {
    imageUrl: "./src/assets/images/gallery/donate-7.png",
    category: "Shelter",
    title: "Emergency Shelter Aid",
    description: "Providing temporary shelters for disaster-struck families.",
    goal: 22000,
    raised: 18000,
    link: "project-details.html",
  },
  {
    imageUrl: "./src/assets/images/gallery/donate-8.png",
    category: "Agriculture",
    title: "Sustainable Farming Initiatives",
    description: "Introducing sustainable farming equipment and training.",
    goal: 27000,
    raised: 13500,
    link: "project-details.html",
  },
];
function ProjectCollection() {
  const breadcrumbPath = [
    { label: "Home", href: "/" },
    // You can add more path items if necessary
  ];
  // The current page title
  const currentPage = "Projects";
  return (
    <>
      {/* Breadcrumb Area S t a r t */}
      <section className="breadcrumb-section breadcrumb-bg">
        {/* Use the Breadcrumb component and pass the props */}
        <Breadcrumb pathItems={breadcrumbPath} currentPage={currentPage} />
      </section>
      {/* End-of Breadcrumb Area */}
      <section className="donate-section top-bottom-padding">
        <div className="container">
          <div className="row gy-24">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectCollection;
