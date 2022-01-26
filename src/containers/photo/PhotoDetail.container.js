import React from 'react';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { queryClient } from '../../lib/QueryClient';
import { useParams } from 'react-router-dom';
import { getPhotoById } from '../../lib/api/photo';
import Detail from '../../components/photo/Detail';
import Loader from '../../components/common/Loader';

const PhotoDetailContainer = () => {
  const { id } = useParams();
  const { isLoading, data, isError } = useQuery('photo', () =>
    getPhotoById(id),
  );

  useEffect(() => {
    return () => {
      queryClient.resetQueries('photo', { exact: true });
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="photo-wrap">
      <Detail photo={data.data} />
    </div>
  );
};

export default PhotoDetailContainer;
