import React from "react";
import project from "./data/project.json";

const Projects = () => {
  return (
    <div className="container projects my-5" id="projects">
      <h1 className="underline text-center">PROJECTS</h1>
      {project.map((data, index) => (
        <div
          key={data.key}
          className={`row project-card my-5 align-items-center ${
            index % 2 === 0 ? "flex-row-reverse" : ""
          }`}
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="col-md-6 project-image-container text-center p-4">
            <img
              src={data.imageSrc} // Corrected line
              className="project-image"
              alt={data.title}
            />
          </div>
          <div className="col-md-6 text-light project-info">
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <div className="project-buttons">
              <a href={data.demo} className="btn btn-primary mx-2">
                Demo
              </a>
              <a href={data.source} className="btn btn-warning mx-2">
                Source
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
