import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/sonam-priyadarshini-singh-7b84403b7/"
        target="_blank"
        rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/khushicode1234" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>

    </div>
  );
}

export default HeaderSocials