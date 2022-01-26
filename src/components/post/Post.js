import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <div className="item">
      <div className="number">{post.id}.</div>
      <div className="title">
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </div>
    </div>
  );
};

export default Post;
