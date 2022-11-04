type MovieType = 'tvSeries' | 'short' | 'tvMovie';

export enum CastCategory {
  DIRECTOR = "director",
  PRODUCER = "producer",
  ACTRESS = "actress",
  ACTOR = "actor",
}

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

export interface RoleModel {
  character: string;
}

export interface CastModel {
  id: string;
  legacyNameText: string;
  name: string;
  category: CastCategory;
  akas?: Array<string>;
  characters?: Array<string>;
  roles?: Array<RoleModel>;
}

export type MovieModel = MovieTVSeries | MovieShort | MovieTV;

export interface FindResponse {
 results: Array<MovieModel>;
}

export interface GetCastResponse {
  id: string;
  base: {
    id: string;
    title: string;
    titleType: string;
    year: number;
  };
  cast: Array<CastModel>;
  crew: {
    director: Array<CastModel>;
    producer: Array<CastModel>;
  }
}
