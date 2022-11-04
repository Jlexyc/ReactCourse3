import { ActionType } from 'typesafe-actions';
import * as moviesActions from './movies/actions';
import * as appActions from './app/actions';

const allActions = {
  moviesActions,
  appActions,
};

export type AppActions = ActionType<typeof allActions>
