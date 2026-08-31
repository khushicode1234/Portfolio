import React from "react";
import ME from "../../assets/ME.jpg";
import "./about.css";
import { FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>DSA</h5>
              <small>4 star coder</small>
            </article>
          </div>
          <p>
          Hello, my name is Sonam Priyadarshini Singh. I am an aspiring software engineer, passionate about contributing to innovative software solutions. I graduated with a Bsc in Computer Science from Vinayak degree college Bhadrak, Odisha, and I am currently pursuing a "Master's degree(MSC)" in Computer Science from Bhadrak Autonomous College. My passion for technology drives me to continuously learn and explore new advancements in the field. I am eager to apply my skills and knowledge to make a positive impact in the world of software development.

I have extensive experience in programming languages such as Java, c++, JavaScript, SQL, html, css, React.

Additionally, I specialize in building web applications using REACT. I solved over 100+ problems on LeetCode.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
