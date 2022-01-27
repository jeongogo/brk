import React from 'react';
import AppHeaderContainer from '../../containers/AppHeader.container';
import AppFooterContainer from '../../containers/AppFooter.container';
import AppRight from '../../components/AppRight';
import PostDetailContainer from '../../containers/post/PostDetail.container';

const PostDetailPage = () => {
  return (
    <>
      <AppHeaderContainer />
      <div className="container flex justify-between items-start">
        <PostDetailContainer />
        <AppRight />
      </div>
      <AppFooterContainer />
    </>
  );
};

export default PostDetailPage;
