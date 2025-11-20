import type { DiscoverMovieItem } from "../../models/Discover";

const API_URL = "https://api.themoviedb.org/3/movie/top_rated?language=fr";

const fetchTopRatedMovies = async (): Promise<DiscoverMovieItem[]> => {
    const token = import.meta.env.VITE_TMDB_TOKEN;
    const res = await fetch(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });
    if (!res.ok) throw new Error("Erreur lors du chargement des films les mieux notés");
    const data = await res.json();
    return data.results as DiscoverMovieItem[];
};

const topRatedMoviesPromise = fetchTopRatedMovies();

export default topRatedMoviesPromise;