import {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import BioSection from './PresidentBio';
import { useBreadcrumb } from './BreadcrumbContext';
const TeamMemberDetail = () => {
  const { memberId } = useParams(); // Extracting the memberId from the URL

  const { setBreadcrumbs } = useBreadcrumb();

  useEffect(() => {
    // Set the breadcrumb path for the DonationCollection page and make it visible
    setBreadcrumbs({
      items: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/aboutus" }
      ],
      isVisible: true
    });
  }, [setBreadcrumbs]);

  // Fetch the detailed data of the member. This example assumes you have a function to fetch data.
  // For demonstration, let's assume the data is static here.
  const memberDetail = {
    name: "Dr. Almaz Desta Zewde",
    imageUrl: "/images/dr-almaz.jpg",
    //role: "President",
    bio: <BioSection />,
    socialLinks: [
      { href: 'https://twitter.com', icon: 'fa fa-twitter' },
      { href: 'https://linkedin.com', icon: 'fa fa-linkedin' }
    ]
  };

  

  return (
    <div className="member-detail">
      <h1>{memberDetail.name}</h1>
      <img src={memberDetail.imageUrl} alt={memberDetail.name} />
      <h2>{memberDetail.role}</h2>
      <div>{memberDetail.bio}</div> {/* Directly render the BioSection component */}
      <div>
        {memberDetail.socialLinks.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
            <i className={link.icon}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TeamMemberDetail;
