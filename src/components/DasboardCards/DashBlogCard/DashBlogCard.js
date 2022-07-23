import React from "react";
import "./DashBlogCard.css";

function DashBlogCard() {
  return (
    <div className="dash-blog-card">
      <div className="d-b-card-upper"></div>
      <div className="d-b-card-lower">
        <div className="title">What is machine learning ?</div>
        <div className="description">
          Machine learning (ML) is a branch of artificial intelligence (AI) that
          enables computers to “self-learn” from training data and improve over
          time, without being explicitly programmed.
        </div>
        <div className="author">
          <div className="name">Natasha Mathew</div>
          <div className="d-flex">
            <div className="department">Computer Science</div>
            <div className="batch">1968 Batch</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBlogCard;
