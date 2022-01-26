import React from 'react';
import { Link } from 'react-router-dom';

const Photo = ({ photo }) => {
  return (
    <div>
      <Link to={`/photo/${photo.id}`}>
        <img src={photo.thumbnailUrl} alt="" />
        <h3>{photo.title}</h3>
      </Link>
    </div>
  );
};

export default Photo;
