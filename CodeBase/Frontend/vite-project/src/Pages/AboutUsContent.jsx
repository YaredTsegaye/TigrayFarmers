// AboutUs.jsx
import React, { useState } from "react";

const AboutUsContent = () => {
  // State to manage the visibility of the "Our Vision" section's extended content
  const [isVisionExpanded, setIsVisionExpanded] = useState(true);
  const [isJoinUsExpanded, setIsJoinUsExpanded] = useState(false);
  const [isHowWeHelpExpanded, setIsHowWeHelpExpanded] = useState(false);
  const [isApproachExpanded, setIsApproachExpanded] = useState(false);

  return (
    <section className="about-area">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6 my-auto">
            <div className="section-tittle mb-35">
              <span className="sub-tittle text-capitalize font-600">
              </span>
              <h2 className="title font-700 pb-15">
                Empowering the Farmers Inc
              </h2>
              <p className="pera-subtitle mb-15">
                Welcome to Empowering the Farmers Inc., where our mission is to rejuvenate and transform agriculture in the Tigray region of Ethiopia. In the wake of devastation wrought by recent conflicts, our nonprofit stands as a beacon of hope and support for local farmers who are the backbone of their communities and the economy. With your help, we are making strides towards a future where agriculture in Tigray not only recovers but flourishes with strength, wealth, and sustainability.
                </p>

            </div>
            <div className="about-info">
              <div className="row">
                {/* Vision */}
                <div className="col-lg-10 mb-20">
                  <div className="d-flex gap-20">
                    <div className="info-icon">
                      <i className="ri-hand-heart-line"></i>
                    </div>
                    <div className="info-content">
                      <h4 className="title">Our Vision</h4>
                      <p className="pera">
                        At Empowering the Farmers Inc., we envision a Tigray
                        where every farmer has access to the tools, technology,
                        and resources needed to thrive...
                        {isVisionExpanded && (
                          <span>
                            {/* Extended content goes here */}
                            Our goal is to replace labor-intensive traditional
                            farming methods with modern, sustainable, and
                            efficient agricultural practices. By doing so, we
                            aim to secure not just the livelihoods of individual
                            farmers but also ensure food security and resilience
                            against economic and environmental challenges for
                            the entire region.
                          </span>
                        )}
                      </p>
                      <button
                        onClick={() => setIsVisionExpanded(!isVisionExpanded)}
                        className="btn btn-primary"
                      >
                        {isVisionExpanded ? "Read Less" : "Read More"}
                      </button>
                    </div>
                  </div>
                </div>
                {/* How We Help */}
                <div className="col-lg-10 mb-20">
                  <div className="d-flex gap-20">
                    <div className="info-icon">
                      <i className="ri-user-line"></i>
                    </div>
                    <div className="info-content">
                      <h4 className="title">How We Help</h4>
                      <p className="pera">
                        Thanks to the generous support of donors like you, we
                        provide essential farming supplies...
                      
                      {isHowWeHelpExpanded && (
                        <span>
                          {/* Extended content goes here */}
                          and equipment, including bulls, tractors, crops,
                          generators, and mills. These resources are vital in
                          enabling our farmers to produce a variety of essential
                          foods, thereby supporting their families and
                          communities. In partnership with other
                          Non-Governmental Organizations (NGOs) and local
                          entities, we're bringing innovative solutions to the
                          forefront of Tigray's agricultural sector. One such
                          initiative is our investment in rainwater harvesting
                          techniques. This approach allows farmers to cultivate
                          their lands all year round, regardless of weather
                          conditions, thus enabling them to grow fruits and
                          vegetables continuously while protecting their crops
                          against droughts, floods, and other weather-related
                          adversities.
                        </span>
                      )}
                      </p>
                      <button
                        onClick={() => setIsHowWeHelpExpanded(!isHowWeHelpExpanded)}
                        className="btn btn-primary"
                      >
                        {isHowWeHelpExpanded ? "Read Less" : "Read More"}
                      </button>
                    </div>
                  </div>
                </div>
                {/* Our Approach */}
                <div className="col-lg-10 mb-20">
                  <div className="d-flex gap-20">
                    <div className="info-icon">
                      <i className="ri-hand-heart-line"></i>
                    </div>
                    <div className="info-content">
                      <h4 className="title">Our Approach</h4>
                      <p className="pera">
                        Empowering the Farmers Inc. is dedicated to introducing
                        modern farming techniques...
                      
                      {isApproachExpanded && (
                        <span>
                          {/* Extended content goes here */}
                          that enhance productivity without compromising the
                          quality of produce. We believe in the power of
                          education and provide training and support to farmers,
                          helping them to adopt these new methods successfully.
                          By doing so, we not only aid in immediate recovery
                          efforts but also lay the groundwork for long-term
                          sustainability and growth in the agricultural sector
                          of Tigray.
                        </span>
                      )}
                      </p>
                      <button
                        onClick={() => setIsApproachExpanded(!isApproachExpanded)}
                        className="btn btn-primary"
                      >
                        {isApproachExpanded ? "Read Less" : "Read More"}
                      </button>
                    </div>
                  </div>
                </div>
                {/* Join Our Mission */}
                <div className="col-lg-10 mb-20">
                  <div className="d-flex gap-20">
                    <div className="info-icon">
                      <i className="ri-hand-heart-line"></i>
                    </div>
                    <div className="info-content">
                      <h4 className="title">Join Our Mission</h4>
                      <p className="pera">
                        The journey towards rebuilding Tigray's agricultural
                        strength is long, but with your support...
                      {isJoinUsExpanded && (
                        <span>
                          {/* Extended content goes here */}
                          we can make a lasting impact. Your donations empower
                          us to continue our work, bringing hope and tangible
                          help to the farmers and communities of Tigray.
                          Together, we can create a future where agriculture is
                          not just a means of survival but a thriving and
                          prosperous sector that benefits everyone. Be a part of
                          this transformative mission. With every donation,
                          you're not just aiding in the recovery of a region;
                          you're investing in its prosperous and sustainable
                          future. Thank you for believing in our cause and for
                          your continued support.
                        </span>
                      )}
                      </p>

                      <button
                        onClick={() => setIsJoinUsExpanded(!isJoinUsExpanded)}
                        className="btn btn-primary"
                      >
                        {isJoinUsExpanded ? "Read Less" : "Read More"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="position-relative h-100">
              {/* Images */}
              <div>
                <img
                  className="w-100 d-none d-lg-block"
                  src="/src/assets/images/gallery/tigraydisaster-01.png"
                  alt="image"
                />
              </div>
              <div>
                <img
                  className="w-100 d-none d-lg-block"
                  src="/src/assets/images/gallery/PHOTO-2024-03-26-07-58-16_10.jpg"
                  alt="image"
                />
              </div>
              <div>
                <img
                  className="w-100 d-none d-lg-block"
                  src="/src/assets/images/gallery/PHOTO-2024-03-26-07-58-16_8.jpg"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUsContent;
