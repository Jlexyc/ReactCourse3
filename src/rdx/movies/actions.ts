import { FindResponse, GetCastResponse } from './../../services/models';
import { createAsyncAction } from 'typesafe-actions';

enum MOVIE_ACTIONS {
  FIND_MOVIES_START = '@movies/FIND_MOVIES_LOADING',
  FIND_MOVIES_SUCCESS = '@movies/FIND_MOVIES_SUCCESS',
  FIND_MOVIES_FAILED = '@movies/FIND_MOVIES_FAILED',

  GET_MOVIE_CAST_START = '@movies/GET_MOVIE_CAST_START',
  GET_MOVIE_CAST_SUCCESS = '@movies/GET_MOVIE_CAST_SUCCESS',
  GET_MOVIE_CAST_FAILED = '@movies/GET_MOVIE_CAST_FAILED',
  
}

interface MovieError {
  error: string,
}

export const findMovieAsyncAction = createAsyncAction(
  MOVIE_ACTIONS.FIND_MOVIES_START, 
  MOVIE_ACTIONS.FIND_MOVIES_SUCCESS, 
  MOVIE_ACTIONS.FIND_MOVIES_FAILED
)<undefined, FindResponse, MovieError>();

export const getMovieCastAsynAction = createAsyncAction(
  MOVIE_ACTIONS.GET_MOVIE_CAST_START, 
  MOVIE_ACTIONS.GET_MOVIE_CAST_SUCCESS, 
  MOVIE_ACTIONS.GET_MOVIE_CAST_FAILED
)<undefined, GetCastResponse, MovieError>();