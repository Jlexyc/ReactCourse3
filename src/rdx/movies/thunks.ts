import { findMovieAsyncAction, getMovieCastAsynAction } from './actions';
import * as imdbService from '../../services/imdbService'; 
import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { AppActions } from '../actions';

export type ThunkAppType = ThunkAction<Promise<void>, RootState, undefined, AppActions>

export const searchMovies = (query: string): ThunkAppType => 
  async (dispatch) => {
    try {
      const response = await imdbService.findMovies(query);
      if (response.success && response.response) {
        dispatch(findMovieAsyncAction.success(response.response));
      } else {
        dispatch(findMovieAsyncAction.failure({ error: 'Something went wrong' }));
      }
    } catch(error) {
      dispatch(findMovieAsyncAction.failure({ error: 'Something went wrong' }));
    }
};


export const getCast = (movieId: string): ThunkAppType => 
  async (dispatch) => {
    try {
      const response = await imdbService.getCast(movieId);
      if (response.success && response.response) {
        dispatch(getMovieCastAsynAction.success(response.response));
      } else {
        dispatch(getMovieCastAsynAction.failure({ error: 'Something went wrong' }));
      }
    } catch(error) {
      dispatch(getMovieCastAsynAction.failure({ error: 'Something went wrong' }));
    }
};