import React from 'react';
import AppHeaderContainer from '../../containers/AppHeader.container';
import AppFooterContainer from '../../containers/AppFooter.container';
import RegisterContainer from '../../containers/auth/Register.container';

const RegisterPage = () => {
  return (
    <>
      <AppHeaderContainer />
      <div className="container">
        <RegisterContainer />
      </div>
      <AppFooterContainer />
    </>
  );
};

export default RegisterPage;
