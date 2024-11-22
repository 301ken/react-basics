import React from 'react';
import '../styles.css';

const BlogCard = ({ title, description, imageUrl }) => {
  return (
    <div className="blog-card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default BlogCard;