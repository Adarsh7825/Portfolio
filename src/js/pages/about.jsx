import React from "react";
import { Helmet } from "react-helmet";

import Footer from "../components/footer"
import Navbar from "../components/navbar";
import Socials from "../components/socials";

import "../../css/about.css";

import INFO from "../data/profile";
import SEO from "../data/seo";

const About = () => {

  const currentSEO = SEO.find((item) => item.page === "about");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`About | ${INFO.primary.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>
      <div className="page-content">
        <Navbar active="about"/>
        <div className="content-wrapper">
          <div className="about-container">
            <div className="about-content">
              <div className="about-content-left-side">
                <div className="title about-title">
                  {INFO.about.title}
                </div>

                <div className="subtitle about-subtitle">
                  {INFO.about.description}
                </div>
              </div>

              <div className="about-content-right-side">
              <div className="about-image-container">
                    <div className="about-image-wrapper">
                      <img
                        src="portfolio_logo.png"
                        alt="logo"
                        className="about-image"
                      />
                    </div>
                  </div>

                <div className="about-socials">
                  <Socials />
                </div>
              </div>
            </div>
            <div className="about-socials-mobile">
							  <Socials />
						    </div>
            <div className="page-footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
