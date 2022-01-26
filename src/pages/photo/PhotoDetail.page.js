import React from 'react';
import AppHeaderContainer from '../../containers/AppHeader.container';
import AppFooterContainer from '../../containers/AppFooter.container';
import PhotoDetailContainer from '../../containers/photo/PhotoDetail.container';

const PhotoDetailPage = () => {
  return (
    <>
      <AppHeaderContainer />
      <div className="container">
        <PhotoDetailContainer />
      </div>
      <AppFooterContainer />
    </>
  );
};

export default PhotoDetailPage;
