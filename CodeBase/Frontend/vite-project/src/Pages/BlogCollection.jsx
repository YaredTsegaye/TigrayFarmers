// BlogCollection.jsx
import React, {useEffect} from "react";
import { useBreadcrumb } from './BreadcrumbContext';
import BlogDetail from './BlogDetail';

const blogs = [
  {
    imageUrl: "./src/assets/images/gallery/blog-4.png",
    author: "admin",
    category: "Donation",
    date: "30 Jun\n2023",
    title: "Donate Your Money For Africa Poor Child.",
    subtitle: "We understand that there are many people organization The seeking support,",
    detailLink: "blog-details.html",
  },
  {
    imageUrl: "./src/assets/images/gallery/blog-4.png",
    author: "admin",
    category: "Donation",
    date: "30 Jun\n2023",
    title: "Donate Your Money For Africa Poor Child.",
    subtitle: "We understand that there are many people organization The seeking support,",
    detailLink: "blog-details.html",
  },
  {
    imageUrl: "./src/assets/images/gallery/blog-4.png",
    author: "admin",
    category: "Donation",
    date: "30 Jun\n2023",
    title: "Donate Your Money For Africa Poor Child.",
    subtitle: "We understand that there are many people organization The seeking support,",
    detailLink: "blog-details.html",
  },
  
  // Include other blog entries here
];

function BlogCollection() {
  const { setBreadcrumbs } = useBreadcrumb();

  useEffect(() => {
    // Set the breadcrumb path for the BlogCollection page and make it visible
    setBreadcrumbs({
      items: [
        { label: "Home", href: "/" },
        { label: "Blog", href: "/Blog" }
      ],
      isVisible: true
    });
  }, [setBreadcrumbs]);
  return (
    <>
      <div className="blog-section-two section-padding2" hidden={false}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="section-tittle text-center mb-50">
                <span className="sub-tittle text-capitalize font-600">Blog</span>
                <h2 className="title font-700">Our Blog & Feeds</h2>
              </div>
            </div>
          </div>
          <div className="row gy-24">
            {blogs.map((blog, index) => (
              <BlogDetail key={index} {...blog} />
            ))}
          </div>
        </div>
      </div>
    </>
    );
        }

export default BlogCollection;
