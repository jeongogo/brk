import React from 'react';
import AppHeaderContainer from '../../containers/AppHeader.container';
import AppFooterContainer from '../../containers/AppFooter.container';
import PostListContainer from '../../containers/post/PostList.container';

const PostListPage = () => {
  return (
    <>
      <AppHeaderContainer />
      <div className="container">
        <PostListContainer />
      </div>
      <AppFooterContainer />
    </>
  );
};

export default PostListPage;
