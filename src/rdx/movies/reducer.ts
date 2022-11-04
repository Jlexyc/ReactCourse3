import { GetCastResponse } from './../../services/models';
import { getType } from 'typesafe-actions';

import { AppActions } from '../actions';
import { findMovieAsyncAction, getMovieCastAsynAction } from './actions';
import { MovieModel } from '../../services/models';

export interface MoviesState {
  list: Array<MovieModel>
  isListLoading: boolean;
  isCastLoading: boolean;
  castResponse?: GetCastResponse;
}

const initialState: MoviesState = {
  list: [],
  isListLoading: false,
  isCastLoading: false,
}

export const reducer = (state: MoviesState = initialState, action: AppActions) => {
  console.log('action: ', action);
  switch(action.type) {
  case getType(findMovieAsyncAction.request):
    return {
      ...state,
      isListLoading: true,
    };

  case getType(findMovieAsyncAction.success):
    return {
      ...state,
      list: action.payload.results,
      isListLoading: false,
    };

  case getType(findMovieAsyncAction.failure):
    return {
      ...state,
      isListLoading: false,
    };

  case getType(getMovieCastAsynAction.request):
    return {
      ...state,
      isCastLoading: true,
    };

  case getType(getMovieCastAsynAction.success):
    return {
      ...state,
      castResponse: action.payload,
      isCastLoading: false,
    };

  case getType(getMovieCastAsynAction.failure):
    return {
      ...state,
      isCastLoading: false,
    };

  default:
    return state;
  }
};