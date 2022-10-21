import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {reducer as moviesReducer} from './movies/reducer';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { MoviesState } from './movies/reducer';

export interface RootState {
  movies: MoviesState;
}

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  movies: moviesReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch