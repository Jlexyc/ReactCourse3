import { RootState } from "../";

export const selectMoviesList = (state: RootState) => state.movies.list;
export const selectCastResponse = (state: RootState) => state.movies.castResponse;