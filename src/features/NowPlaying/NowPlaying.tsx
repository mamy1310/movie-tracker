import BigCarousel from "../../components/BigCarousel";
import { use } from "react";
import { Suspense } from "react";
import Skeleton from "@mui/material/Skeleton";
import nowPlayingMoviesPromise from "./NowPlayingUtils";
import Box from "@mui/material/Box";

export default function NowPlaying() {
    const movieItems = use(nowPlayingMoviesPromise);

    return (
        <>
            <Suspense fallback={
                <Box style={{ display: "flex", gap: 16 }}>
                    {[...Array(5)].map((_, i) => (
                        <Skeleton key={i} variant="rectangular" width={200} height={300} />
                    ))}
                </Box>
            }>
                <BigCarousel movies={movieItems} />
            </Suspense>
        </>
    );
}