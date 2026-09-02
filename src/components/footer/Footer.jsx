import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { FaGithub } from "react-icons/fa";
import './footer.css'

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#home" className="footer_logo">
        PORTFOLIO
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/sonam-priyadarshini-singh-7b84403b7/"
        >
          <BsLinkedin className="icon" />
        </a>
        <a target="_blank"
         rel="noreferrer"
         href="https://github.com/khushicode1234" >
          <FaGithub className="icon" />
        </a>
      </div>
      <div className="footer_copyright">
        <small>Thank you for visiting my portfolio website.</small>
      </div>
    </footer>
  );
}

export default Footer