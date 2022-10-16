import { FindResponse } from './../../services/models';
import { createAsyncAction } from 'typesafe-actions';

export enum MOVIE_ACTIONS {
  FIND_MOVIES_START = '@movies/FIND_MOVIES_LOADING',
  FIND_MOVIES_SUCCESS = '@movies/FIND_MOVIES_SUCCESS',
  FIND_MOVIES_FAILED = '@movies/FIND_MOVIES_FAILED',
}

interface MovieError {
  error: string,
}

export const findMovieAsyncAction = createAsyncAction(
  MOVIE_ACTIONS.FIND_MOVIES_START, 
  MOVIE_ACTIONS.FIND_MOVIES_SUCCESS, 
  MOVIE_ACTIONS.FIND_MOVIES_FAILED
)<undefined, FindResponse, MovieError>();

