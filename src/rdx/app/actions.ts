import { createAction } from 'typesafe-actions';

enum APP_ACTIONS {
  UPDATE_THEME = '@app/updateTheme',
}

export const updateThemeAction = createAction(APP_ACTIONS.UPDATE_THEME)<'dark' | 'light'>();