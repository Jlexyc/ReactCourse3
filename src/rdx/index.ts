import { createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit'
import {reducer as moviesReducer} from './movies/reducer'
import thunk from 'redux-thunk'

import { MoviesState } from './movies/reducer';

export interface RootState {
  movies: MoviesState;
}
const rootReducer = combineReducers({
  movies: moviesReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch