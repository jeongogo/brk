import React from 'react';

const Comment = ({ comment }) => {
  return (
    <li>
      <div className="info">
        <span className="name">{comment.name}</span>
      </div>
      <div className="contents">{comment.body}</div>
    </li>
  );
};

export default Comment;
