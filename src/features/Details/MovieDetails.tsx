import { useParams } from "react-router-dom";
import { use, Suspense } from "react";
import Skeleton from "@mui/material/Skeleton";
import { getMovieDetailsPromise } from "./MovieDetailsUtils";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";

export default function MovieDetails() {
    const { id } = useParams<{ id: string }>();

    if (!id) throw new Error("ID du film manquant");

    const movieDetailsPromise = getMovieDetailsPromise(id);

    const movieDetails = use(movieDetailsPromise);

    return (
        <Box height={"100%"} role="presentation" sx={{ backgroundColor: "rgb(0, 0, 0)", color: "white" }}>
            <Suspense fallback={
                <Skeleton variant="rectangular" width="100%" height={400} />
            }>
                <Stack direction="column" spacing={3}>
                    {movieDetails.backdrop_path && (
                        <div style={{ position: "relative", overflow: "hidden" }}>
                            <img
                                src={`${localStorage.getItem("image_base_url")}original${movieDetails.backdrop_path}`}
                                alt={movieDetails.title}
                                style={{ width: "100%", height: "400px", objectFit: "cover" }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 99%)",
                                    pointerEvents: "none"
                                }}
                            />
                        </div>
                    )}

                    <Stack direction="column" spacing={2} sx={{ padding: 2 }}>
                        <Typography variant="h5" component="h1">
                            {movieDetails.title}
                        </Typography>
                        <Typography variant="body2" component={"p"}>
                            {movieDetails.overview}
                        </Typography>
                        <Stack direction={"column"} sx={{ color: grey[700] }}>
                            <Typography variant="caption" component={"p"}>
                                Durée: {movieDetails.runtime} minutes
                            </Typography>
                            {
                                movieDetails.credits && movieDetails.credits.cast.length > 0 && (
                                    <Typography variant="caption" component={"p"}>
                                        Acteurs principaux: {
                                            movieDetails.credits.cast
                                                .filter(castMember => castMember.known_for_department === "Acting")
                                                .sort((a, b) => b.popularity - a.popularity)
                                                .slice(0, 3).map(castMember => castMember.name).join(", ")
                                        }
                                    </Typography>
                                )
                            }
                            <Typography variant="caption" component={"p"}>
                                Genres: {movieDetails.genres.map(genre => genre.name).join(", ")}
                            </Typography>
                            <Typography variant="caption" component={"p"}>
                                Date de sortie: {movieDetails.release_date.split("-").reverse().join("/")}
                            </Typography>
                        </Stack>

                        {/* Watch providers logos with  redirect to "link" */}
                        {
                            movieDetails["watch/providers"] && movieDetails["watch/providers"].results.FR && (
                                <Stack direction={"column"} sx={{ color: grey[700] }} spacing={1}>
                                    <Typography variant="body2" component={"p"}>
                                        Disponibilité:
                                    </Typography>
                                    {movieDetails["watch/providers"].results.FR.flatrate && (
                                        <Stack direction={"column"} spacing={0.5}>
                                            <Typography variant="caption" component={"p"}>
                                                En streaming:
                                            </Typography>
                                            <Stack direction="row" spacing={1} alignItems="center" sx={{ flexWrap: "wrap" }}>
                                                {movieDetails["watch/providers"].results.FR.flatrate.map(provider => (
                                                    <a key={provider.provider_id} href={movieDetails["watch/providers"]?.results.FR?.link} target="_blank" rel="noopener noreferrer">
                                                        <img
                                                            src={`${localStorage.getItem("image_base_url")}w92${provider.logo_path}`}
                                                            alt={provider.provider_name}
                                                            style={{ width: "32px", height: "32px", objectFit: "contain" }}
                                                        />
                                                    </a>
                                                ))}
                                            </Stack>
                                        </Stack>
                                    )}
                                    {movieDetails["watch/providers"].results.FR.rent && (
                                        <Stack direction={"column"} spacing={0.5}>
                                            <Typography variant="caption" component={"p"}>
                                                En location:
                                            </Typography>
                                            <Stack direction="row" spacing={1} alignItems="center" sx={{ flexWrap: "wrap" }}>
                                                {movieDetails["watch/providers"].results.FR.rent.map(provider => (
                                                    <a key={provider.provider_id} href={movieDetails["watch/providers"]?.results.FR?.link} target="_blank" rel="noopener noreferrer">
                                                        <img
                                                            src={`${localStorage.getItem("image_base_url")}w92${provider.logo_path}`}
                                                            alt={provider.provider_name}
                                                            style={{ width: "32px", height: "32px", objectFit: "contain" }}
                                                        />
                                                    </a>
                                                ))}
                                            </Stack>
                                        </Stack>
                                    )}
                                    {movieDetails["watch/providers"].results.FR.buy && (
                                        <Stack direction={"column"} spacing={0.5}>
                                            <Typography variant="caption" component={"p"}>
                                                En achat:
                                            </Typography>
                                            <Stack direction="row" spacing={1} alignItems="center" sx={{ flexWrap: "wrap" }}>
                                                {movieDetails["watch/providers"].results.FR.buy.map(provider => (
                                                    <a key={provider.provider_id} href={movieDetails["watch/providers"]?.results.FR?.link} target="_blank" rel="noopener noreferrer">
                                                        <img
                                                            src={`${localStorage.getItem("image_base_url")}w92${provider.logo_path}`}
                                                            alt={provider.provider_name}
                                                            style={{ width: "32px", height: "32px", objectFit: "contain" }}
                                                        />
                                                    </a>
                                                ))}
                                            </Stack>
                                        </Stack>
                                    )}
                                    {movieDetails["watch/providers"].results.FR.free && (
                                        <Stack direction={"column"} spacing={0.5}>
                                            <Typography variant="caption" component={"p"}>
                                                Gratuit:
                                            </Typography>
                                            <Stack direction="row" spacing={1} alignItems="center" sx={{ flexWrap: "wrap" }}>
                                                {movieDetails["watch/providers"].results.FR.free.map(provider => (
                                                    <a key={provider.provider_id} href={movieDetails["watch/providers"]?.results.FR?.link} target="_blank" rel="noopener noreferrer">
                                                        <img
                                                            src={`${localStorage.getItem("image_base_url")}w92${provider.logo_path}`}
                                                            alt={provider.provider_name}
                                                            style={{ width: "32px", height: "32px", objectFit: "contain" }}
                                                        />
                                                    </a>
                                                ))}
                                            </Stack>
                                        </Stack>
                                    )}
                                </Stack>
                            )
                        }
                    </Stack>
                </Stack>
            </Suspense>
        </Box>
    );
}