import React, { useState } from "react";
import useFadeInSection from "./UseFadeInSection";

function Project({ title, description, tags, icon, stars, url }) {
  return (
    <div className="project fade-in">
      <div className="project-details">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <h3>
            {title} <span>&#8599;</span>
          </h3>
        </a>
        <p>{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        {stars && <p className="project-stars">★ {stars}</p>}
      </div>
    </div>
  );
}

function Projects() {
  const [showMore, setShowMore] = useState(false);
  const [loadedProjects, setLoadedProjects] = useState([]);
  const fadeInRef = useFadeInSection();

  const projects = [
    {
      title: "Covid X-Ray Classifier",
      description:
        "A CNN that uses X-Ray images to classify the severity of Covid within the patient.",
      tags: ["Machine Learning", "PyTorch", "Pandas", "NumPy"],
      icon: "link-to-icon",
      stars: null,
      url: "https://github.gatech.edu/Medical-Imaging-VIP/active-learning",
    },
    {
      title: "Dungeon Crawler Game",
      description:
        " An Android Studio mobile game created for players to explore procedurally generated dungeons and engage in turn-based battles.",
      tags: ["Android Studio", "Java", "Agile"],
      icon: "link-to-icon",
      stars: null,
      url: "https://github.com/arinkhanna/CS2340C_Team55",
    },
    {
      title: "GT Esports Discord Bot",
      description:
        "Developed and maintained a Discord bot for the GT Esports team and also used to organize events for the club.",
      tags: ["Discord API"],
      icon: "link-to-icon",
      stars: null,
      url: "https://github.com/gt-esports/gtesports-website",
    },
    {
      title: "MNIST Model",
      description:
        "This project achieves the goal of loading the MNIST dataset, constructing a neural network with custom layers and activation functions, and training the network to recognize handwritten digits from the dataset.",
      tags: ["NumPy", "PyTorch", "Machine Learning"],
      icon: "link-to-icon",
      stars: null,
      url: "https://github.com/elichen1230/Mnist_Database",
    },
    {
      title: "GBA Game",
      description:
        "Created a GameBoy Advanced game, Pong, using the language C",
      tags: ["C", "GBA"],
      icon: "link-to-icon",
      stars: null,
      url: "https://example.com/project-5",
    },
    {
      title: "Personal Website",
      description:
        "Created a portfolio website to showcase myself and the experience I've gained throught my years as a CS student",
      tags: ["React", "Server API", "HTML", "CSS", "Java Script"],
      icon: "link-to-icon",
      stars: null,
      url: "https://example.com/project-6",
    },
  ];

  const initialProjects = projects.slice(0, 3);
  const additionalProjects = projects.slice(3);

  const handleShowMore = () => {
    setShowMore(!showMore);
    if (!showMore) {
      additionalProjects.forEach((project, index) => {
        setTimeout(() => {
          setLoadedProjects((prev) => [...prev, project]);
        }, index * 100);
      });
    } else {
      setLoadedProjects([]);
    }
  };

  return (
    <div ref={fadeInRef} className="fade-in-section">
      <div className="projects-container">
        <span className="title">Projects</span>
        <div className="projects-grid">
          {initialProjects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              icon={project.icon}
              stars={project.stars}
              url={project.url}
            />
          ))}
        </div>
        {showMore && (
          <div className="projects-grid more-projects">
            {loadedProjects.map((project, index) => (
              <Project
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
                icon={project.icon}
                stars={project.stars}
                url={project.url}
              />
            ))}
          </div>
        )}
        <div className="button-container">
          <button
            className="button2"
            onClick={handleShowMore}
            aria-expanded={showMore}
          >
            {showMore ? "Show Less" : "More Projects"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
