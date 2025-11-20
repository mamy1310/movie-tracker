import type { MovieDetails } from "../../models/MovieDetails";

const fetchMovieDetails = async (movieId: string): Promise<MovieDetails> => {
    const token = import.meta.env.VITE_TMDB_TOKEN;
    const API_URL = `https://api.themoviedb.org/3/movie/${movieId}?append_to_response=watch/providers,credits&language=fr`;

    const res = await fetch(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });
    if (!res.ok) throw new Error("Erreur lors du chargement des détails du film");
    const data = await res.json();
    return data as MovieDetails;
};

// Cache des promesses par ID de film
const movieDetailsCache = new Map<string, Promise<MovieDetails>>();

export const getMovieDetailsPromise = (movieId: string): Promise<MovieDetails> => {
    if (!movieDetailsCache.has(movieId)) {
        movieDetailsCache.set(movieId, fetchMovieDetails(movieId));
    }
    return movieDetailsCache.get(movieId)!;
};