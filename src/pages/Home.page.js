import React from 'react';
import AppHeaderContainer from '../containers/AppHeader.container';
import AppFooterContainer from '../containers/AppFooter.container';
import HomeContainer from '../containers/Home.container';

const HomePage = () => {
  return (
    <>
      <AppHeaderContainer />
      <div className="container">
        <HomeContainer />
      </div>
      <AppFooterContainer />
    </>
  );
};

export default HomePage;
