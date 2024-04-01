// BlogCollection.jsx
import React from 'react';
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
  // Include other blog entries here
];

const BlogCollection = () => (
  <div className="blog-section-two section-padding2" hidden={true}>
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
);

export default BlogCollection;
