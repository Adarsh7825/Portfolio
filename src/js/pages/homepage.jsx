import  React from "react";
import { Helmet } from "react-helmet";

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import MainProjects from "../components/mainprojects";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedin,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";


import INFO from "../data/profile"
import SEO from "../data/seo";

import "../../css/homepage.css";

const Homepage = () => {

  const currentSEO = SEO.find((item) => item.page === "homepage");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`${INFO.primary.title}`}</title>
        <meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
      </Helmet>
      <div className="page-content">
        <Navbar active="home"/>
        <div className="content-wrapper">
          <div className="homepage-container">
            <div className="homepage-intro">
              <div className="homepage-intro-left-side">
                <div className="title homepage-title">
                  {INFO.homepage.title}
                </div>
                <div className="subtitle homepage-subtitle">
                  {INFO.homepage.description}
                </div>
              </div>
              <div className="homepage-intro-right-side">
                <div className="homepage-image-container">
                  <div className="homepage-image-wrapper">
                    <img
                      src="portfolio_logo.png"
                      alt="logo"
                      className="homepage-image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="homepage-socials">
              <a href={INFO.socials.github} target="_blank"><FontAwesomeIcon icon={faGithub} className="homepage-social-icon"/></a>
              <a href={INFO.socials.linkedin} target="_blank"><FontAwesomeIcon icon={faLinkedin} className="homepage-social-icon"/></a>
              <a href={`https://mail.google.com/mail/?view=cm&source=mailto&to=${INFO.primary.email}`} target="_blank"><FontAwesomeIcon icon={faMailBulk} className="homepage-social-icon"/></a>
            </div>
            <div className="homepage-projects">
              <div className="midtitle homepage-midtitle">
                Main projects
              </div>
              <MainProjects />
            </div>
            <div className="homepage-articles">

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

export default Homepage;
