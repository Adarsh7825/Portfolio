import React from "react";
import { useParams } from "react-router-dom";
import INFO from "../data/profile";
import "../../css/ProjectDetail.css";

const ProjectDetail = () => {
    const { projectName } = useParams();
    const project = INFO.projects.find((p) => p.title === projectName);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="project-detail">
            <div>
                <video src={project.videolink} width="1500px" height="600" controls />
            </div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <div>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                    GitHub Link
                </a>
            </div>
            <div>
                <a href={project.linkText} target="_blank" rel="noopener noreferrer">
                    Project Link
                </a>
            </div>
        </div>
    );
};

export default ProjectDetail;