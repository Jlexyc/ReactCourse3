import { RootState } from "../";

export const selectMoviesList = (state: RootState) => state.movies.list;