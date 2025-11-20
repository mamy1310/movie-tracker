import Carousel from "../../components/Carousel";
import { use } from "react";
import { Suspense } from "react";
import Skeleton from "@mui/material/Skeleton";
import popularMoviesPromise from "./PopularUtils";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

export default function Popular() {
    const movieItems = use(popularMoviesPromise);
    const navigate = useNavigate();

    const handleMovieClick = (movieId: number) => {
        navigate(`/${movieId}`);
    }

    return (
        <>
            <Suspense fallback={
                <Box style={{ display: "flex", gap: 16 }}>
                    {[...Array(5)].map((_, i) => (
                        <Skeleton key={i} variant="rectangular" width={200} height={300} />
                    ))}
                </Box>
            }>
                <Carousel movies={movieItems} title="Les plus populaires" onMovieClick={handleMovieClick} />
            </Suspense>
        </>
    );
}