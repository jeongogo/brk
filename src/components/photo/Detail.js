import React from 'react';

const Detail = ({ photo }) => {
  return (
    <div className="detail">
      <img src={photo.thumbnailUrl} alt="" />
      <h1>{photo.title}</h1>
    </div>
  );
};

export default Detail;
