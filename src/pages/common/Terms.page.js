import React from 'react';
import AppHeaderContainer from '../../containers/AppHeader.container';
import AppFooterContainer from '../../containers/AppFooter.container';
import Terms from '../../components/common/Terms';

const TermsPage = () => {
  return (
    <>
      <AppHeaderContainer />
      <div className="container">
        <Terms />
      </div>
      <AppFooterContainer />
    </>
  );
};

export default TermsPage;
