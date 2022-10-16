type MovieType = 'tvSeries' | 'short' | 'tvMovie';

export interface MovieImage {
  height: number;
  width: number;
  id: string;
  url: string;
}

export interface MovieBase {
  id: string;
  title: string;
  runningTimeInMinutes: number;
  titleType: MovieType;
  year: number;
  image?: MovieImage;
}

export interface MovieTVSeries extends MovieBase {
  nextEpisode?: string;
  numberOfEpisodes?: number;
  seriesEndYear?: number;
  titleType: 'tvSeries';
}

export interface MovieShort extends MovieBase {
  titleType: 'short';
}

export interface MovieTV extends MovieBase {
  titleType: 'tvMovie';
}

export type MovieModel = MovieTVSeries | MovieShort | MovieTV;

export interface FindResponse {
 results: Array<MovieModel>;
}
