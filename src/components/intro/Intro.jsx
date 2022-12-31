import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import fahim from "../../assets/fahim.png";
import "./intro.css";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={fahim} alt="" srcset="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p className="about">Hello! I am Soriful Islam Fahim. I can build web applications that are fully responsive on any device. I always write standard codes that are so much clean and easy to understand, that are reusable, and supported by all browsers. I build websites by writing a minimum line of code, and that website load faster. I write SEO-friendly code. I have built lots of websites since 2021 using HTML 5, CSS 3, JavaScript, Bootstrap, and Tailwind. Now I am also learning MongoDB, Express, React, and NodeJS to become a MERN Stack Developer.</p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
