import React from 'react';
import AppHeaderContainer from '../../containers/AppHeader.container';
import AppFooterContainer from '../../containers/AppFooter.container';
import LoginContainer from '../../containers/auth/Login.container';

const LoginPage = () => {
  return (
    <>
      <AppHeaderContainer />
      <div className="container">
        <LoginContainer />
      </div>
      <AppFooterContainer />
    </>
  );
};

export default LoginPage;
