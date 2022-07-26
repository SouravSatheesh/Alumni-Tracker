import React from "react";
import { useEffect } from "react";
import "./BlogCard.css";

function BlogCard({ key, blog }) {
  return (
    <div className="blog-card-main">
      <div className="blog-card-title">{blog.title}</div>
      <div className="blog-card-domain">{blog.domain.join(", ")}</div>
      <div className="blog-card-content">{blog.content}</div>
      <div className="blog-card-author">{blog.firstName} {blog.lastName}</div>
    </div>
  );
}

export default BlogCard;
