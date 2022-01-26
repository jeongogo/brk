import React from 'react';
import AppHeaderContainer from '../../containers/AppHeader.container';
import AppFooterContainer from '../../containers/AppFooter.container';
import PostWriteContainer from '../../containers/post/PostWrite.container';

const PostWritePage = () => {
  return (
    <>
      <AppHeaderContainer />
      <div className="container">
        <PostWriteContainer />
      </div>
      <AppFooterContainer />
    </>
  );
};

export default PostWritePage;
