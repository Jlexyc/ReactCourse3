import { getType } from 'typesafe-actions';
import { AppActions } from "../actions"
import { updateThemeAction } from './actions';

export interface AppState {
  theme: 'dark' | 'light',
}

const initialState: AppState = {
  theme: 'light',
};

export const reducer = (state: AppState = initialState, action: AppActions) => {
  switch(action.type) {
  case getType(updateThemeAction):
    return {
      ...state,
      theme: action.payload,
    };

  default: 
    return state;
  }
};
