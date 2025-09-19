
import React from "react";
import "./../styles/Features.css";
import featuresData from "./../data/features.json";

const Features = () => {
  return (
    <section id="features" className="features">
      <h2>Features</h2>
      <div className="feature-list">
        {featuresData.map((feature, index) => (
          <div key={index} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
