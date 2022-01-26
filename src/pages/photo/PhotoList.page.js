import React from 'react';
import AppHeaderContainer from '../../containers/AppHeader.container';
import AppFooterContainer from '../../containers/AppFooter.container';
import PhotoListContainer from '../../containers/photo/PhotoList.container';

const PhotoListPage = () => {
  return (
    <>
      <AppHeaderContainer />
      <div className="container">
        <PhotoListContainer />
      </div>
      <AppFooterContainer />
    </>
  );
};

export default PhotoListPage;
