import type { DiscoverMovieItem, MovieImagesResponse } from "../../models/Discover";

const API_URL = "https://api.themoviedb.org/3/movie/now_playing?sort_by=vote_average.desc&language=fr";

const fetchMovieImages = async (movieId: number): Promise<MovieImagesResponse> => {
    const token = import.meta.env.VITE_TMDB_TOKEN;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/images`, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });
    if (!res.ok) throw new Error(`Erreur lors du chargement des images pour le film ${movieId}`);
    return await res.json();
};

const fetchNowPlayingMovies = async (): Promise<DiscoverMovieItem[]> => {
    const token = import.meta.env.VITE_TMDB_TOKEN;
    const res = await fetch(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });
    if (!res.ok) throw new Error("Erreur lors du chargement des films à l'affiche");
    const data = await res.json();
    const movies = data.results as DiscoverMovieItem[];

    // Prendre les 5 premiers films et fetch leurs images
    const first5Movies = movies.slice(0, 5);
    const imagePromises = first5Movies.map(movie => fetchMovieImages(movie.id));
    const imagesResults = await Promise.all(imagePromises);

    // Ajouter les images aux films correspondants avec filtrage des logos
    first5Movies.forEach((movie, index) => {
        const movieImages = imagesResults[index];

        // Filtrer les logos : privilégier "fr", sinon "en"
        let filteredLogos = movieImages.logos.filter(logo => logo.iso_639_1 === "fr");
        if (filteredLogos.length === 0) {
            filteredLogos = movieImages.logos.filter(logo => logo.iso_639_1 === "en");
        }

        movie.images = {
            ...movieImages,
            logos: filteredLogos
        };
    });

    return first5Movies;
};

const nowPlayingMoviesPromise = fetchNowPlayingMovies();

export default nowPlayingMoviesPromise;