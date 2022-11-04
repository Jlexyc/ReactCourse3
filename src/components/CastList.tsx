import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../rdx/hooks';
import { selectCastResponse } from '../rdx/movies/selectors';
import { getCast } from '../rdx/movies/thunks';
import { CastDetailsCard } from './CastDetailsCards';

export const CastList = () => {
  const dispatch = useAppDispatch();
  const { movieId } = useParams();

  const { cast } = useSelector(selectCastResponse) || {};

  useEffect(() => {
    if (!cast && movieId) {
      dispatch(getCast(movieId));
    }
  }, [movieId]);

  return (
    <React.Fragment>
      {cast?.map((castModel) => <CastDetailsCard castModel={castModel} key={castModel.id} />)}
    </React.Fragment>
  );
};
