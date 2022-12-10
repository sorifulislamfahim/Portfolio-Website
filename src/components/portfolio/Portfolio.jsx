import React from "react";
import IMG1 from "../../assets/unicar.png";
import IMG2 from "../../assets/nabiganj it.png";
import IMG3 from "../../assets/dr john doe.png";

import "./portfolio.css";
//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: " Unicar",
      img: IMG1,
      description: "Single Page Application.All Crud Operation(Create,Read,Update,Delete).React Router Dom package for client side routing",
      technologies: "React Js | Tailwind",
      link: "https://shimmering-nougat-90c938.netlify.app/",
      github: "https://github.com/fayjulislamalimran/unicar-client-side",
    },
    {
      id: 2,
      title: " Nabiganj IT",
      img: IMG2,
      description: "Each course card is dynamic so you click this card and redirect to your details page.",
      technologies: "React Js | Tailwind",
      link: "https://nabiganj-it-server-client.web.app/",
      github: "https://github.com/fayjulislamalimran/nabiganj-it-client-side",
    },
    {
      id: 3,
      title: " Dr John Doe",
      img: IMG3,
      description: "Saw some services and added your service, every service has a details button to redirect the details page.",
      technologies: "React Js | Tailwind",
      link: "https://dr-john-doe-client.web.app/",
      github: "https://github.com/fayjulislamalimran/dr-john-doe-client-side",
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
