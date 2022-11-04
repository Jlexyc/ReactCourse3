import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import type {} from 'redux-thunk/extend-redux';

import {reducer as moviesReducer} from './movies/reducer';
import {reducer as appReducer} from './app/reducer';

import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { MoviesState } from './movies/reducer';
import { AppState } from './app/reducer';

export interface RootState {
  movies: MoviesState;
  app: AppState;
}

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: [
  //   'movies',
  // ]
};

const rootReducer = combineReducers<RootState>({
  movies: moviesReducer,
  app: appReducer
});

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch