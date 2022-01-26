import React from 'react';
import AppHeaderContainer from '../../containers/AppHeader.container';
import AppFooterContainer from '../../containers/AppFooter.container';
import Privacy from '../../components/common/Privacy';

const PrivacyPage = () => {
  return (
    <>
      <AppHeaderContainer />
      <div className="container">
        <Privacy />
      </div>
      <AppFooterContainer />
    </>
  );
};

export default PrivacyPage;
