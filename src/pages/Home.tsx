import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Popular from "../features/Popular/Popular";
import TopRated from "../features/TopRated/TopRated";
import { useEffect } from "react";
import MovieDetailsDrawer from "../features/Details/MovieDetailsDrawer";
import { useNavigate, useParams } from "react-router-dom";
import NowPlaying from "../features/NowPlaying/NowPlaying";
import NavBar from "../components/NavBar";

export default function Home() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    useEffect(() => {
        // Set local storage image_base_url
        localStorage.setItem("image_base_url", "https://image.tmdb.org/t/p/");
    }, []);

    return (
        <>
            <NavBar />
            <Toolbar /> {/* Espacement pour le NavBar fixe */}
            <Stack direction="column" spacing={4} padding="0 16px">
                <NowPlaying />
                <TopRated />
                <Popular />
            </Stack>

            <MovieDetailsDrawer id={id} onClose={() => navigate("/")} />
        </>
    )
}