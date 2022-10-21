import { ActionType } from 'typesafe-actions';
import * as moviesActions from './movies/actions';

const allActions = {
  moviesActions,
};

export type AppActions = ActionType<typeof allActions>
