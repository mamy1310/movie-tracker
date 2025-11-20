import Stack from "@mui/material/Stack"
import type { DiscoverMovieItem } from "../models/Discover"
import Typography from "@mui/material/Typography"
import PosterCard from "./PosterCard"

type CarouselProps = {
    movies: DiscoverMovieItem[];
    title?: string;
}

export default function Carousel({ movies, title }: CarouselProps) {
    return (
        <Stack direction="column" spacing={2}>
            {title && (
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
            )}
            <Stack direction="row" spacing={2} overflow="auto">
                {movies.map(movieItem => (
                    <PosterCard key={movieItem.id} {...movieItem} />
                ))}
            </Stack>
        </Stack>
    )
}