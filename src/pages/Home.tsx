import Stack from "@mui/material/Stack";
import Popular from "../features/Popular/Popular";
import TopRated from "../features/TopRated/TopRated";
import { useEffect } from "react";
import MovieDetailsDrawer from "../features/Details/MovieDetailsDrawer";

export default function Home() {
    useEffect(() => {
        // Set local storage image_base_url
        localStorage.setItem("image_base_url", "https://image.tmdb.org/t/p/");
    }, []);

    return (
        <>
            <Stack direction="column" spacing={4} padding={4}>
                <Popular />
                <TopRated />
            </Stack>

            <MovieDetailsDrawer />
        </>
    )
}