import React from "react";

const Jumbotron = ({ title, description, buttonText, buttonUrl }) => {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container py-5">
        <h1 className="display-4">{title}</h1>
        <p className="lead">{description}</p>
        <a href={buttonUrl} className="btn btn-primary btn-lg">{buttonText}</a>
      </div>
    </div>
  );
};

export default Jumbotron;
