export type MovieDetails = {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: {
        id: number;
        name: string;
        poster_path: string | null;
        backdrop_path: string | null;
    } | null;
    budget: number;
    genres: { id: number; name: string }[];
    homepage: string | null;
    id: number;
    imdb_id: string | null;
    original_language: string;
    original_title: string;
    overview: string | null;
    popularity: number;
    poster_path: string | null;
    production_companies: {
        id: number;
        logo_path: string | null;
        name: string;
        origin_country: string;
    }[];
    production_countries: {
        iso_3166_1: string;
        name: string;
    }[];
    release_date: string; // YYYY-MM-DD
    revenue: number;
    runtime: number | null;
    spoken_languages: {
        english_name: string;
        iso_639_1: string;
        name: string;
    }[];
    status: string;
    tagline: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    credits?: MovieCredits
    "watch/providers"?: MovieWatchProvidersResponse
};

// MovieCredits.ts

export type MovieCredits = {
    id: number;
    cast: CastMember[];
    crew: CrewMember[];
};

export type CastMember = {
    adult: boolean;
    gender: number | null; // 0/1/2/3 according to TMDB, sometimes not provided
    id: number;
    known_for_department: string | null;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    cast_id: number | null;
    character: string | null;
    credit_id: string;
    order: number;
};

export type CrewMember = {
    adult: boolean;
    gender: number | null;
    id: number;
    known_for_department: string | null;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    credit_id: string;
    department: string;
    job: string;
};


// WatchProviders.ts

// A provider (element of flatrate/rent/buy arrays)
export type WatchProviderEntry = {
    logo_path: string | null;
    provider_id: number;
    provider_name: string;
    display_priority: number;
};

// Block per country (e.g.: FR, US, AE...). All properties are optional
// because some movies/countries may not have each category.
export type CountryWatchProviders = {
    link?: string; // TMDB URL to the providers page for this country
    flatrate?: WatchProviderEntry[]; // subscription streaming
    rent?: WatchProviderEntry[]; // individual rental
    buy?: WatchProviderEntry[]; // digital purchase
    free?: WatchProviderEntry[]; // sometimes present: free
    ads?: WatchProviderEntry[]; // sometimes present: free with ads
};

// The "results" key is a dictionary whose keys are ISO-3166-1 country codes (FR, US, AE, etc.)
export type WatchProvidersResults = {
    [countryCode: string]: CountryWatchProviders | undefined;
};

// Complete response from the /movie/{movie_id}/watch/providers endpoint
export type MovieWatchProvidersResponse = {
    id: number;
    results: WatchProvidersResults;
};


