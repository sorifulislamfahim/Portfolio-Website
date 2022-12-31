import React from "react";
import IMG1 from "../../assets/midtro doctor.png";
import IMG2 from "../../assets/praxis learning.png";
import IMG3 from "../../assets/genius car.png";

import "./portfolio.css";
//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Midtro Doctor",
      img: IMG1,
      description: "A Hospital Service Web Application.",
      technologies: "React Js | Tailwind",
      link: "https://meditro-client.web.app/",
      github: "https://github.com/sorifulislamfahim/Midtro-Doctors-Client",
    },
    {
      id: 2,
      title: " Praxis Learning",
      img: IMG2,
      description: "A Educational Course Related Web Application.",
      technologies: "React Js | Tailwind",
      link: "https://praxis-larning.web.app/",
      github: "https://github.com/sorifulislamfahim/Praaxis-Larning-Coching-Center",
    },
    {
      id: 3,
      title: " Genius Car",
      img: IMG3,
      description: "A Car All Parts Services Web Application.",
      technologies: "React Js | Tailwind",
      link: "https://genious-car-d21a1.web.app/",
      github: "https://github.com/sorifulislamfahim/Genious-Car",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a href={pro.github} target="_blank" className="btn" rel="noreferrer">
                GitHub
              </a>
              <a href={pro.link} target="_blank" className="btn btn-primary" rel="noreferrer">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
