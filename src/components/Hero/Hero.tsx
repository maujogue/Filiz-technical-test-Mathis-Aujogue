import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Bienvenue
          <br />
          chez Café Neko
        </h1>
        <h2 className="hero-subtitle">
          L'endroit où le café rencontre les ronronnements
        </h2>
        <p className="hero-desc">
          Bienvenue dans notre univers où chaque tasse de café est accompagnée
          d'une dose d'amour félin.
        </p>
		<button className="hero-btn" onClick={() => window.location.href = "#booking"}>Nous contacter</button>
      </div>
      <div className="hero-image-wrapper">
        <img
          src="/images/cat-hero-section.png"
          alt="Chat et café"
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default Hero;
