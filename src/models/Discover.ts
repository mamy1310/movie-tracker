export type DiscoverMovieItem = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string; // YYYY-MM-DD
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  images?: MovieImagesResponse;
};

export type DiscoverMovieResponse = {
  page: number;
  results: DiscoverMovieItem[];
  total_pages: number;
  total_results: number;
};

export type ImageItem = {
  aspect_ratio: number;
  height: number;
  iso_639_1: string | null;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
};

export type MovieImagesResponse = {
  backdrops: ImageItem[];
  logos: ImageItem[];
  posters: ImageItem[];
  id: number;
};
