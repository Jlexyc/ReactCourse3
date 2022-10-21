import { FindResponse } from './../../services/models';
import { createAsyncAction } from 'typesafe-actions';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { AppActions } from '../actions';

enum MOVIE_ACTIONS {
  FIND_MOVIES_START = '@movies/FIND_MOVIES_LOADING',
  FIND_MOVIES_SUCCESS = '@movies/FIND_MOVIES_SUCCESS',
  FIND_MOVIES_FAILED = '@movies/FIND_MOVIES_FAILED',
}

interface MovieError {
  error: string,
}

export type ThunkAppType = ThunkAction<Promise<void>, RootState, undefined, AppActions>

export const findMovieAsyncAction = createAsyncAction(
  MOVIE_ACTIONS.FIND_MOVIES_START, 
  MOVIE_ACTIONS.FIND_MOVIES_SUCCESS, 
  MOVIE_ACTIONS.FIND_MOVIES_FAILED
)<undefined, FindResponse, MovieError>();

