import React from 'react';
import AppHeaderContainer from '../../containers/AppHeader.container';
import AppFooterContainer from '../../containers/AppFooter.container';
import AppRight from '../../components/AppRight';
import PostListContainer from '../../containers/post/PostList.container';

const PostListPage = () => {
  return (
    <>
      <AppHeaderContainer />
      <div className="container flex justify-between items-start">
        <PostListContainer />
        <AppRight />
      </div>
      <AppFooterContainer />
    </>
  );
};

export default PostListPage;
