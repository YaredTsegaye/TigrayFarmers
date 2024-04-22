// ProjectCollection.jsx
import React, {useEffect} from "react";
import { useBreadcrumb } from './BreadcrumbContext';
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    Id: 1,
    imageUrl: "./src/assets/images/gallery/donate-1.png",
    category: "Farming",
    title: "Transforming Agriculture in Gulomakeda",
    description: "In the heart of Gulomakeda, agriculture is not just a means of livelihood; it's a way of life. Yet, our farmers face challenges that threaten this vital lifeline—from water scarcity to outdated farming techniques. Our mission is to empower these resilient communities by introducing sustainable agricultural practices, enhancing productivity, and ensuring food security.",
    goal: 20000,
    raised: 5000,
    link: "ProjectDetail/1",
  },
  {
    Id: 2,
    imageUrl: "./src/assets/images/gallery/donate-2.png",
    category: "Education",
    title: "Build Schools in Rural Areas",
    description:
      "Funding the construction of schools in underdeveloped regions.",
    goal: 30000,
    raised: 15000,
    link: "project-details.html",
    projectCategory: "Farming",
    relatedPost: [{
      title: "How to Build a School in Rural Areas",
      link: "blog-details.html",
    }],
    donors: [
      {
        name: "<NAME>",
        image: "./src/assets/images/gallery/donate-1.png",
        amount: 1000,
      },
      {
        name: "<NAME>",
        image: "./src/assets/images/gallery/donate-2.png",
        amount: 1000,
      },
      {
        name: "<NAME>",
        image: "./src/assets/images/gallery/donate-3.png",
        amount: 1000,
      },
    ],
    tags: [
      "Farming",
      "Hunger",
      "Water",
      "Shelter"
    ]
  },
  {
    Id: 3,
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
    Id: 4,
    imageUrl: "./src/assets/images/gallery/donate-6.png",
    category: "Water",
    title: "Clean Water for Everyone",
    description: "Drilling wells to ensure access to clean drinking water.",
    goal: 18000,
    raised: 12000,
    link: "project-details.html",
  },
  {
    Id: 5,
    imageUrl: "./src/assets/images/gallery/donate-7.png",
    category: "Shelter",
    title: "Emergency Shelter Aid",
    description: "Providing temporary shelters for disaster-struck families.",
    goal: 22000,
    raised: 18000,
    link: "project-details.html",
  },
  {
    Id: 6,
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
  const { setBreadcrumbs } = useBreadcrumb();

  useEffect(() => {
    // Set the breadcrumb path for the DonationCollection page and make it visible
    setBreadcrumbs({
      items: [
        { label: "Home", href: "/" },
        { label: "Projects", href: "/ProjectCollection" }
      ],
      isVisible: true
    });
  }, [setBreadcrumbs]);
  return (
    <>
     
      <section className="donate-section top-bottom-padding">
        <div className="container">
          <div className="row gy-24">
            {projectsData.map((project, index) => (
               <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectCollection;