import React from 'react';
import AppHeaderContainer from '../containers/AppHeader.container';
import AppFooterContainer from '../containers/AppFooter.container';
import CustomerContainer from '../containers/Customer.container';

const CustomerPage = () => {
  return (
    <>
      <AppHeaderContainer />
      <div className="container">
        <CustomerContainer />
      </div>
      <AppFooterContainer />
    </>
  );
};

export default CustomerPage;
