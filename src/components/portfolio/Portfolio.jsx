import React from 'react'
import './portfolio.css'
import coinInsight from "../../assets/coinInsight.jpg";
import URLShortener from "../../assets/URLShortener.jpg";
import ShoppingCart from "../../assets/ShoppingCart.jpg";


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={coinInsight} alt="" />
          </div>

          <h3>Coin Insight</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/khushicode1234/Crypto-tracker"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://crypto-tracker-sps.netlify.app"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={URLShortener} alt="" />
          </div>

          <h3>URL-Shortener-Generator</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/khushicode1234?tab=repositories"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/khushicode1234/URL-Shortner.git"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={ShoppingCart} alt="" />
          </div>

          <h3>Online Shopping Cart</h3>
          <div className="portfolio_item-cta">
            <a
             href="https://github.com/khushicode1234?tab=repositories"
            className="btn"
              target="_blank"
            >
              Github
            </a>
            <a href="#" className="btn btn-primary" target="root">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio