import React from 'react';
import { useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import { getPostById, getComments } from '../../lib/api/post';
import Detail from '../../components/post/Detail';
import Comment from '../../components/post/Comment';
import Loader from '../../components/common/Loader';

const PostDetailContainer = () => {
  const queryClient = useQueryClient();
  const { id } = useParams();

  const {
    isLoading: isLoadingPost,
    data: post,
    isError: isErrorPost,
    error: errorPost,
  } = useQuery('post', () => getPostById(id));

  const {
    isLoading: isLoadingComments,
    data: comments,
    isError: isErrorComments,
    error: errorComments,
  } = useQuery('comments', () => getComments(id));

  useEffect(() => {
    return () => {
      queryClient.resetQueries('post', { exact: true });
      queryClient.resetQueries('comments', { exact: true });
    };
  }, []);

  return (
    <div className="post-wrap">
      {isLoadingPost ? (
        <Loader />
      ) : isErrorPost ? (
        <div>Error: {errorPost.message}</div>
      ) : (
        <Detail post={post.data} />
      )}
      {isLoadingComments ? (
        <Loader />
      ) : isErrorComments ? (
        <div>Error: {errorComments.message}</div>
      ) : (
        <ul className="comment-list">
          {comments.data.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostDetailContainer;
