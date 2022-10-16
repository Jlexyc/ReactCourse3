import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { RootState } from '../index';

import { findMovieAsyncAction } from './actions';
import { findMovies } from '../../services/imdbService'; 

export const searchMovies = (query: string): ThunkAction<void, RootState, undefined, AnyAction> => 
  async (dispatch, getState) => {
    try {
      const response = await findMovies(query);
      if (response.success && response.response) {
        dispatch(findMovieAsyncAction.success(response.response))
      } else {
        dispatch(findMovieAsyncAction.failure({ error: 'Something went wrong' }));
      }
    } catch(error) {
      dispatch(findMovieAsyncAction.failure({ error: 'Something went wrong' }));
    }
}