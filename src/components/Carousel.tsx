import Stack from "@mui/material/Stack"
import type { DiscoverMovieItem } from "../models/Discover"
import Typography from "@mui/material/Typography"
import PosterCard from "./PosterCard"

type CarouselProps = {
    movies: DiscoverMovieItem[];
    title?: string;
    onMovieClick?: (movieId: number) => void;
}

export default function Carousel({ movies, title, onMovieClick }: CarouselProps) {
    return (
        <Stack direction="column" spacing={2}>
            {title && (
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
            )}
            <Stack
                direction="row"
                spacing={2}
                sx={{
                    overflowX: "auto",
                    overflowY: "hidden",
                    "&::-webkit-scrollbar": {
                        height: 8,
                    },
                    "&::-webkit-scrollbar-track": {
                        backgroundColor: "transparent",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "rgba(0,0,0,0.2)",
                        borderRadius: "4px",
                    },
                }}
            >
                {movies.map(movieItem => (
                    <PosterCard key={movieItem.id} movie={movieItem} onClick={() => onMovieClick?.(movieItem.id)} />
                ))}
            </Stack>
        </Stack>
    )
}