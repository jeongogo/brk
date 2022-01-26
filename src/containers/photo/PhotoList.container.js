import { useState } from 'react';
import { useQuery } from 'react-query';
import { getPhotos } from '../../lib/api/photo';
import Photo from '../../components/photo/Photo';
import Loader from '../../components/common/Loader';

const PhotoListContainer = () => {
  const totalCount = 50;
  const [page, setPage] = useState(1);
  const { isLoading, data, isError } = useQuery(
    ['photos', page],
    () => getPhotos(page),
    {
      keepPreviousData: true,
    },
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="photo-wrap">
      <ul className="list">
        {data.data.map((photo) => (
          <li key={photo.id}>
            <Photo photo={photo} />
          </li>
        ))}
      </ul>
      <div className="pagination">
        <span>Current Page: {page}</span>
        <button
          type="button"
          onClick={() => {
            setPage((old) => Math.max(old - 1, 0));
          }}
          disabled={page === 1}
        >
          PREV
        </button>
        <button
          type="button"
          onClick={() => {
            setPage((old) => old + 1);
          }}
          disabled={page === totalCount}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default PhotoListContainer;
