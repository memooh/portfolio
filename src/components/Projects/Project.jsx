import "./Project.css";

import bookmarkd from "/images/projects/bookmarkd.png";
import arshi from "/images/projects/arshi.png";
import opulence from "/images/projects/opulence.png";
import barbershop from "/images/projects/barbershop.jpg";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "BookMark'd",
      description:
        "A bookmarking app that allows users to save and organize their favorite books.",
      image: bookmarkd,
      github: "https://github.com/memooh/bookmarkd",
    },
    {
      id: 2,
      title: "Arshi | Digital Agency",
      description:
        "A digital agency website that showcases the agency's work and services.",
      image: arshi,
      github: "https://github.com/memooh/digital_agency",
    },
    {
      id: 3,
      title: "Opulence",
      description:
        "An interior design website that showcases the companies work and services.",
      image: opulence,
      github: "https://github.com/memooh/opulence",
    },
    {
      id: 4,
      title: "Barbershop",
      description:
        "a barber shop website that showcases the barbershop's work and services.",
      image: barbershop,
      github: "https://github.com/memooh/barbershop",
    },
  ];
  return (
    <section className="projects mb-5">
      <div className="container">
        <h1 className="text-center projectsTitle">Personal Projects</h1>
        <div className="row">
          {projects.map((project) => (
            <div className="col-lg-6 col-md-6 mb-4" key={project.id}>
              <div className="project">
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid"
                />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="projectButton">View on GitHub</button>
                </a>
              </div>
            </div>
          ))}
        </div>
        <h5 className="mt-3">Explore my full portfolio of projects on <a href="https://github.com/memooh" className='gitLink' target="_blank" rel="noopener noreferrer">GitHub</a></h5>
        </div>
    </section>
  );
};

export default Project;
