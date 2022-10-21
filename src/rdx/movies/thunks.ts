import { ThunkAppType } from './actions';

import { findMovieAsyncAction } from './actions';
import { findMovies } from '../../services/imdbService'; 

export const searchMovies = (query: string): ThunkAppType  => 
  async (dispatch) => {
    try {
      const response = await findMovies(query);
      if (response.success && response.response) {
        dispatch(findMovieAsyncAction.success(response.response));
      } else {
        dispatch(findMovieAsyncAction.failure({ error: 'Something went wrong' }));
      }
    } catch(error) {
      dispatch(findMovieAsyncAction.failure({ error: 'Something went wrong' }));
    }
};