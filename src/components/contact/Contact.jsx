import React from 'react'
import {MdOutlineMailOutline} from "react-icons/md";
import { BsLinkedin } from "react-icons/bs/";
import './contact.css'

const Contact = () => {

  const subTheForm = (event)=>{
    event.preventDefault();
    console.log(
      event.target.name.value,'\n',
      event.target.email.value,'\n',
      event.target.message.value
    );
  }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMailOutline className="contact_option-icon" />
            <h4>Email</h4>
            <h5>khusirajput6370@gmail.com</h5>
            <a href="mailto:khusirajput6370@gmail.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsLinkedin className="contact_option-icon" />
            <h4>Linkedin</h4>
            <h5>sonam singh</h5>
            <a
              href="https://www.linkedin.com/in/rahul-gupta-73371a20b/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form action="" onSubmit={subTheForm}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact