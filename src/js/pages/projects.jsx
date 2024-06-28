import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import MainProjects from "../components/mainprojects";

import INFO from "../data/profile";
import SEO from "../data/seo";

import "../../css/projects.css";

const Projects = () => {
  const currentSEO = SEO.find((item) => item.page === "projects");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Projects | ${INFO.primary.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>
      <div className="page-content">
        <Navbar active="projects" />
        <div className="content-wrapper">
          <div className="projects-container">
            <div className="title projects-title">
              {INFO.projectspage.title}
            </div>
            <div className="subtitle projects-subtitle">
              {INFO.projectspage.description}
            </div>
            <div className="homepage-projects">
              <div className="midtitle homepage-midtitle"></div>
              <Link to={`/project/${INFO.projectspage.title}`}>
              </Link>
              <MainProjects />
            </div>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;