import React from 'react';

const Detail = ({ post }) => {
  return (
    <div className="detail">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Detail;
