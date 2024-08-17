import React from "react";
import "./Skills.css";

import lb from "/images/lineleft.png";

const skills = [
  { name: "MySQL Database Management", level: 4 },
  { name: "React.js", level: 4 },
  { name: "HTML5/CSS3", level: 5 },
  {
    name: "JavaScript",
    level: 3,
    learning: true,
    note: "Refreshing knowledge",
  },
  { name: "Agile Scrum", level: 5 },
  { name: "User Experience Research", level: 3, learning: true },
  { name: "PHP", level: 4, note: "Planned Refreshing knowledge" },
  { name: "Symfony Framework", level: 4, note: "Planned Refreshing knowledge" },
  { name: "API Calls in React", level: 3, learning: true },
  { name: "WordPress", level: 4, learning: true },
  {
    name: "WooCommerce",
    level: 3,
    learning: true,
    note: "Planned Refreshing knowledge",
  },
  {
    name: "Divi/Elementor",
    level: 3,
    learning: true,
    note: "Planned Refreshing knowledge",
  },
];

const Skills = () => {
  return (
    <section id="skillsSection" className="skills mt-5 mb-5">
      <div className="container">
        <h2 className="text-center skillsTitle mt-5">Skills</h2>
        {[0, 4, 8].map((startIndex, rowIndex) => (
          <div
            key={rowIndex}
            className="row justify-content-center mb-0 mb-md-4"
          >
            {skills.slice(startIndex, startIndex + 4).map((skill, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6 col-sm-12 mb-3 text-center"
              >
                <div className="skill-tooltip">
                  <button className="skillsButton">
                    {skill.name}
                    {skill.learning ? " *" : ""}
                  </button>
                  <span className="skill-level">
                    Level: {skill.level}/5
                    {skill.note && <br />}
                    {skill.note}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))}
        <p className="mt-5 skillsLegend">
          Skills marked with an asterisk (*) are areas of active development.{" "}
          <br />
          Hover over each skill to view my current proficiency level, based on
          my own self-assessment.
        </p>
        <div className="text-center d-none d-lg-block">
        <img src={lb} alt="Linebreaker" className="linebreaker" />

        </div>
      </div>
    </section>
  );
};

export default Skills;
