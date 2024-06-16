import React from "react";

import Project from "./project";

import INFO from "../data/profile";

import "../../css/mainProjects.css";

const MainProjects = () => {
	return (
		<div className="main-projects-container">
			{INFO.projects.map((project, index) => (
				<div className="main-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}	
					/>
				</div>
			))}
		</div>
	);
};

export default MainProjects;
