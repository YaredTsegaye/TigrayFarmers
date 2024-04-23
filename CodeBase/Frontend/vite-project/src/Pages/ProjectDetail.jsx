import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

function ProjectDetail() {
    // Use location to access the state passed through the Link component
    const location = useLocation();
    const [project] = useState(location.state?.project);

    //print project details
    console.log(project.title);
    // useParams is not used here since we are not fetching data but leaving it in case you need the ID for something else
    //this will be used after we implement the backend
    const { Id } = useParams(); 

    // If project data is not available, you might want to handle it - either redirect the user, fetch data, or display a message
    if (!project) {
        return <div>Project not found or no data available.</div>;
    }
  
    return (
      <>
      {/* Donation S t a r t */}
      <section className="donation-section top-bottom-padding2">
        <div className="container">
          <div className="row gy-24">
            <div className="col-xxl-9 col-xl-8 col-lg-8">
              {/* Donate Details */}
              <div className="donate-details">
                <div className="donate-img position-relative">
                  <a href="javascript:void(0)">
                    <img className="w-100" src={project.imageUrl} alt={project.title} />
                  </a>
                  <div className="donate-img-overlay"></div>
                </div>
                <div className="donate-info" hidden={true}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="donate-info-title">
                      <h4 className="title text-capitalize">{project.title}</h4>
                      <p className="subtitle">{project.description}</p>
                      <div className="alert">
                        <div className="icon">
                          <i className="ri-error-warning-fill"></i>
                        </div>
                        <div className="alert-msg">
                          <h4 className="title">Notice:</h4>
                          <p className="pera">Text mode is enabled. while in test mode no live donations are processed</p>
                        </div>
                      </div>
                      <div className="progress custom-progress-two">
                        <div className="progress-bar" style={{ width: '100%' }}></div>
                      </div>
                      <div className="flex justify-content-between mt-14 mb-20">
                        <div className="flex gap-20">
                          <div className="charges">
                            <p className="pera">{project.goal}</p>
                            <h4 className="title">Goals</h4>
                          </div>
                          <div className="charges">
                            <p className="pera">{project.raised}</p>
                            <h4 className="title">Raised</h4>
                          </div>
                        </div>
                        <div className="forward-btn">
                          <i className="ri-reply-fill"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="payment-section">
                    <div className="select-payment">
                      <h4 className="title">Select Payment Method</h4>
                      <div className="payment-btn">
                        <div className="custom-radio-check">
                          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                          <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Test Donation
                            <span className="custom-radio"></span>
                          </label>
                        </div>
                        <div className="custom-radio-check">
                          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                          <label className="form-check-label" htmlFor="flexRadioDefault3">
                            Cardiant Donation
                            <span className="custom-radio"></span>
                          </label>
                        </div>
                        <div className="custom-radio-check">
                          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                          <label className="form-check-label" htmlFor="flexRadioDefault4">
                            Office Donation
                            <span className="custom-radio"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="amount">
                      <div className="enter-amount">
                        <button className="amount-btn active">Enter Your Amount</button>
                      </div>
                      <div className="all-amount">
                        <button className="amount-btn active">150$</button>
                        <button className="amount-btn">170$</button>
                        <button className="amount-btn">190$</button>
                        <button className="amount-btn">250$</button>
                      </div>
                    </div>
                  </div>
                  <div className="details-section">
                    <h4 className="pera">Details</h4>
                    <div className="comment-box">
                      <form action="donation-details.html" className="custom-form">
                        <div className="row">
                          <div className="col-xl-6">
                            <div className="form-group">
                              <input type="text" className="form-control custom-input" id="exampleFormControlInput1" placeholder="Alex Jordan*" />
                            </div>
                          </div>
                          <div className="col-xl-6">
                            <div className="form-group">
                              <input type="email" className="form-control custom-input" id="exampleFormControlInput2" placeholder="name@example.com*" />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control custom-input" id="exampleFormControlInput3" placeholder="Company Name*" />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="details-section">
                    <h4 className="pera">Address</h4>
                    <div className="comment-box">
                      <form action="donation-details.html" className="custom-form">
                        <div className="row">
                          <div className="col-xl-6">
                            <div className="form-group">
                              <input type="text" className="form-control custom-input" id="exampleFormControlInput4" placeholder="Postcode*" />
                            </div>
                          </div>
                          <div className="col-xl-6">
                            <div className="form-group">
                              <input type="email" className="form-control custom-input" id="exampleFormControlInput5" placeholder="city*" />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control custom-input" id="exampleFormControlInput6" placeholder="House No*" />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="agreement-section">
                    <div className="form-check custom-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                      <label className="form-check-label" htmlFor="flexCheckChecked"> I agree with the Team Of service </label>
                    </div>
                  </div>
                  <div className="flex gap-16 flex-wrap">
                    <button type="submit" className="submit-btn">Donate Now</button>
                    <button type="submit" className="submit-btn outline">Total Donation: {project.totalDonation}</button>
                  </div>
                </div>
              </div>
              {/* Donate contents section */}
              <div className="donate-content">
                <p className="pera">Charity refers to the act of giving resources, such as money, time, or goods to individuals, organizations, or causes in need. It is driven by the desire to alleviate suffering, support vulnerable populations, promote social welfare, or advance specific charitable objectives. Charity organizations and nonprofits play a crucial role in collecting and distributing funds to address various issues</p>
                <p className="pera">including poverty, education, healthcare, disaster relief, environmental conservation, and more. People can contribute to charities by making financial donations, volunteering their time and skills, or donating goods like clothing, food, or medical supplies.</p>
                <h4 className="title">Our Challenge & Goal</h4>
                <p className="pera">However, if you intended to refer to body or organ donation, that is a separate topic. Organ donation involves the voluntary donation of organs or tissues from a living or deceased person to help save or improve the lives of others in need of transplantation.</p>
                <p className="pera">including poverty, education, healthcare, disaster relief, environmental conservation, and more. People can contribute to charities by making financial donations, volunteering their time and skills,</p>
                <p className="pera">It is a generous act that can make a significant difference in someone's life by providing them with a chance for a healthier future.</p>
                <h4 className="title">Donors</h4>
                <p className="pera">However, if you intended to refer to body or organ donation, that is a separate topic. Organ donation involves the voluntary donation of organs or tissues from a living or deceased person to help save or improve the lives of others in need of transplantation.</p>
              </div>
              {/* Donors */ }
              <div className="row gy-24">
                <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-12">
                  <div className="donor-card">
                    <div className="donor-img">
                      <img src="assets/images/gallery/donor-1.png" alt="image" />
                    </div>
                    <div className="donor-content">
                      <h4 className="title">David Warner</h4>
                      <p className="amount">$500</p>
                      <p className="pera">July 09,2023</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-12">
                  <div className="donor-card">
                    <div className="donor-img">
                      <img src="assets/images/gallery/donor-2.png" alt="image" />
                    </div>
                    <div className="donor-content">
                      <h4 className="title">Carry Jon</h4>
                      <p className="amount">$500</p>
                      <p className="pera">July 09,2023</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-12">
                  <div className="donor-card">
                    <div className="donor-img">
                      <img src="assets/images/gallery/donor-3.png" alt="image" />
                    </div>
                    <div className="donor-content">
                      <h4 className="title">Maxwell</h4>
                      <p className="amount">$500</p>
                      <p className="pera">July 09,2023</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-12">
                  <div className="donor-card">
                    <div className="donor-img">
                      <img src="assets/images/gallery/donor-4.png" alt="image" />
                    </div>
                    <div className="donor-content">
                      <h4 className="title">Cary Minuti</h4>
                      <p className="amount">$500</p>
                      <p className="pera">July 09,2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-4">
              <div className="right-element">
                {/* Category */ }
                <div className="category-section">
                  <p className="pera">Category List</p>
                  <div className="dotted">
                    <div className="active-dot"></div>
                    <div className="inactive-dot"></div>
                  </div>
                  <div className="category-box">
                    <ul className="listing">
                      <li className="single-list">
                        <a className="single" href="javascript:void(0)">Food</a>
                      </li>
                      <li className="single-list">
                        <a className="single" href="javascript:void(0)">Medical</a>
                      </li>
                      <li className="single-list active">
                        <a className="single" href="javascript:void(0)">Global Warming</a>
                      </li>
                      <li className="single-list">
                        <a className="single" href="javascript:void(0)">Wireframing</a>
                      </li>
                      <li className="single-list">
                        <a className="single" href="javascript:void(0)">Recycline</a>
                      </li>
                      <li className="single-list">
                        <a className="single" href="javascript:void(0)">Education</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Post */}

                {/* Related post */}
                <div className="related-post-section">
                  <p className="pera text-capitalize">Related post</p>
                  <div className="dotted">
                    <div className="active-dot"></div>
                    <div className="inactive-dot"></div>
                  </div>
                  <div className="related-box">
                    <div className="single-post">
                      <div className="post-img">
                        <a href="#"><img src="assets/images/gallery/post-1.png" alt="img" /></a>
                      </div>
                      <div className="post-info">
                        <div className="date-time">
                          <i className="ri-time-line"></i>
                          <p className="pera">November 28, 2023</p>
                        </div>
                        <h4 className="title"><a href="#">How Kids Make Sense of Life Experiences.</a></h4>
                      </div>
                    </div>
                    <div className="divider"></div>
                    <div className="single-post">
                      <div className="post-img">
                        <a href="#"><img src="assets/images/gallery/post-2.png" alt="img" /></a>
                      </div>
                      <div className="post-info">
                        <div className="date-time">
                          <i className="ri-time-line"></i>
                          <p className="pera">November 28, 2023</p>
                        </div>
                        <h4 className="title"><a href="#">How Kids Make Sense of Life Experiences.</a></h4>
                      </div>
                    </div>
                    <div className="divider"></div>
                    <div className="single-post">
                      <div className="post-img">
                        <a href="#"><img src="assets/images/gallery/post-3.png" alt="img" /></a>
                      </div>
                      <div className="post-info">
                        <div className="date-time">
                          <i className="ri-time-line"></i>
                          <p className="pera">November 28, 2023</p>
                        </div>
                        <h4 className="title"><a href="#">How Kids Make Sense of Life Experiences.</a></h4>
                      </div>
                    </div>
                    <div className="divider"></div>
                    <div className="single-post">
                      <div className="post-img">
                        <a href="#"><img src="assets/images/gallery/post-4.png" alt="img" /></a>
                      </div>
                      <div className="post-info">
                        <div className="date-time">
                          <i className="ri-time-line"></i>
                          <p className="pera">November 28, 2023</p>
                        </div>
                        <h4 className="title"><a href="#">How Kids Make Sense of Life Experiences.</a></h4>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Concat */}
                <div className="contact-us-section">
                  <form action="donation-details.html" className="custom-form">
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="form-group">
                          <input type="text" className="form-control custom-input" id="exampleFormControlInput7" placeholder="Enter Your Name*" />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="form-group">
                          <input type="email" className="form-control custom-input" id="exampleFormControlInput8" placeholder="Enter your email*" />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="form-group">
                        <input type="text" className="form-control custom-input" id="exampleFormControlInput9" placeholder="Message*" />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <button type="submit" className="submit-btn">Send Message</button>
                    </div>
                  </form>
                </div>
                {/* Tags */}
                <div className="tag-section">
                  <p className="pera">Tags</p>
                  <div className="dotted">
                    <div className="active-dot"></div>
                    <div className="inactive-dot"></div>
                  </div>
                  <div className="tag-box">
                    <div className="tag-info">
                      <div className="badge active">
                        <p className="subtitle">medical</p>
                      </div>
                      <div className="badge">
                        <p className="subtitle">Food</p>
                      </div>
                      <div className="badge">
                        <p className="subtitle">Election</p>
                      </div>
                      <div className="badge">
                        <p className="subtitle">Campaign</p>
                      </div>
                      <div className="badge">
                        <p className="subtitle">Security</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End-of Donation */}
      </>
    );
}



export default ProjectDetail;
