import React from "react";
import skills from "./data/skills.json";

const Skills = () => {
  return (
    <>
      <div className="container skills" id="skills">
        <h1 className="  underline text-center mt-5 mb-5 ">Skills</h1>

        <div className="items">
          {skills.map((data) => (
            <div
              className="item"
              key={data.id}
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <img src={`/assets/${data.imageSrc}`} alt={data.title} />
              <h3>{data.title}</h3>

              <div className="skill-bar">
                <div
                  className="progress"
                  style={{ "--progress": `${data.proficiency}%` }} // Set the percentage
                >
                  <span className="percentage-text">{data.proficiency}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
