import React from "react";
import "./Values.css";

const values = [
  {
    icon: "/icons/coffee-icon.svg",
    title: "Passionné de Café",
    desc: `Notre équipe est passionnée par l'art de préparer le café. Chaque grain est soigneusement sélectionné pour offrir une expérience gustative exceptionnelle. Nous nous engageons à vous offrir des saveurs riches et uniques dans chaque tasse.`,
  },
  {
    icon: "/icons/cat-icon.svg",
    title: "Bien-être des Chats",
    desc: `Le bonheur et le bien-être de nos amis félins sont au cœur de notre philosophie. Nous offrons un environnement sûr et confortable à nos chats résidents, où ils peuvent interagir avec nos clients et recevoir toute l'attention et l'affection qu'ils méritent.`,
  },
  {
    icon: "/icons/plant-icon.svg",
    title: "Engagement Environnemental",
    desc: `Nous sommes soucieux de l'impact environnemental de notre entreprise. C'est pourquoi nous nous engageons à utiliser des produits respectueux de l'environnement et à promouvoir des pratiques durables dans tous les aspects de notre activité, de la sélection des fournisseurs à la gestion des déchets.`,
  },
];

const Values: React.FC = () => {
  return (
    <section id="values" className="values">
      <h2 className="values-title">Nos valeurs</h2>
      <div className="values-cards">
        {values.map((v, i) => (
          <div key={i} className="values-card">
            <img src={v.icon} alt={v.title} className="values-icon" />
            <h3 className="values-card-title">{v.title}</h3>
            <p className="values-card-desc">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
