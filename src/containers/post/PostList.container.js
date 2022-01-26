import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { getPosts } from '../../lib/api/post';
import Post from '../../components/post/Post';
import Loader from '../../components/common/Loader';

const PostListContainer = () => {
  const { isLoading, data, isError } = useQuery('posts', getPosts);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="post-wrap">
      <Link to="/post/write">글 쓰기</Link>
      <ul className="list">
        {data.data.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostListContainer;
