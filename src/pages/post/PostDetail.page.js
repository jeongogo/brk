import React from 'react';
import AppHeaderContainer from '../../containers/AppHeader.container';
import AppFooterContainer from '../../containers/AppFooter.container';
import PostDetailContainer from '../../containers/post/PostDetail.container';

const PostDetailPage = () => {
  return (
    <>
      <AppHeaderContainer />
      <div className="container">
        <PostDetailContainer />
      </div>
      <AppFooterContainer />
    </>
  );
};

export default PostDetailPage;
