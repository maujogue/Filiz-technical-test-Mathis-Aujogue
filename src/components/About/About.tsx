import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-image-wrapper">
        <img
          src="/images/image-about-us.png"
          alt="Tasse chat"
          className="about-image"
        />
      </div>
      <div className="about-content">
        <h2 className="about-title">Qui sommes–nous ?</h2>
        <p className="about-desc about-desc--lead">
          Bienvenue chez Café Neko, l’endroit où le café et les chats se
          rencontrent pour créer une expérience unique en son genre.
        </p>
        <p className="about-desc">
          Chez Café Neko, nous sommes passionnés par deux choses : le café de
          qualité et le bien-être des chats. Fondé par des amoureux des félins
          et des aficionados du café, Café Neko est bien plus qu’un simple café.
          C’est un refuge pour les amoureux des chats, un havre de paix où l’on
          peut savourer une bonne tasse de café tout en câlinant nos adorables
          résidents à quatre pattes.
        </p>
      </div>
    </section>
  );
};

export default About;
