import { getType } from 'typesafe-actions';

import { AppActions } from '../actions';
import { findMovieAsyncAction } from './actions';
import { MovieModel } from '../../services/models';

export interface MoviesState {
  list: Array<MovieModel>
  isListLoading: boolean;
}

const initialState: MoviesState = {
  list: [],
  isListLoading: false,
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
  default:
    return state;
  }
};