import Carousel from "../../components/Carousel";
import { use } from "react";
import { Suspense } from "react";
import Skeleton from "@mui/material/Skeleton";
import popularMoviesPromise from "./PopularUtils";

export default function Popular() {
    const movieItems = use(popularMoviesPromise);

    return (
        <Suspense fallback={
            <div style={{ display: "flex", gap: 16 }}>
                {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} variant="rectangular" width={200} height={300} />
                ))}
            </div>
        }>
            <Carousel movies={movieItems} title="Les plus populaires" />
        </Suspense>
    );
}