// import React from 'react'
import "./CardHome.css";
import Title from "../Title";

const CardHome = ({ id, title, subtitle, image, description, txtButton }) => {
  return (
    <div id={id} className="container-fluid custom-container">
      <Title title={title} />
      <div className="d-flex flex-column align-items-center flex-md-row">
        <img src={image} className="image-home" alt="..." />
        <div className="d-flex flex-column gap-3 margin-home">
          <h1 className="txt subtitle">{subtitle}</h1>
          <p className="txt description">{description}</p>
          <button className="more">{txtButton}</button>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
