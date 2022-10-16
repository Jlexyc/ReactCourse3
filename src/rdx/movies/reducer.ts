import { AnyAction } from 'redux';
import { isActionOf } from 'typesafe-actions';

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

export const reducer = (state: MoviesState = initialState, action: AnyAction) => {
  switch(action.type) {
    case isActionOf(findMovieAsyncAction.request):
      return {
        ...state,
        isListLoading: true,
      }

    case isActionOf(findMovieAsyncAction.success):
      return {
        ...state,
        isListLoading: false,
      }

    case isActionOf(findMovieAsyncAction.failure):
      return {
        ...state,
        isListLoading: false,
      }

  }
  return {
    ...state,
  }
}