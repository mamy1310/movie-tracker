import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import type { DiscoverMovieItem } from "../models/Discover";
import BackdropCard from "./BackdropCard";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Carousel from "./Carousel";

type BigCarouselProps = {
    movies: DiscoverMovieItem[];
}

export default function BigCarousel({ movies }: BigCarouselProps) {
    const navigate = useNavigate();
    const stackRef = useRef<HTMLDivElement>(null);
    const currentIndexRef = useRef(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        if (movies.length === 0 || isMobile) return;

        const interval = setInterval(() => {
            currentIndexRef.current = (currentIndexRef.current + 1) % movies.length;

            if (stackRef.current) {
                const screenWidth = window.innerWidth;
                let cardWidth = 800; // md (900px)
                if (screenWidth >= 1200) {
                    cardWidth = 1000; // lg (1200px)
                }

                const spacing = 16; // spacing={2} = 16px
                const scrollPosition = currentIndexRef.current * (cardWidth + spacing);
                stackRef.current.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                });
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [movies.length, isMobile]);

    return (
        <>
            {isMobile ? (
                <Carousel movies={movies} onMovieClick={(movieId) => navigate(`/${movieId}`)} title="En salle" />
            ) : (
                <Stack
                    ref={stackRef}
                    direction={"row"}
                    spacing={2}
                    sx={{
                        overflowX: "auto",
                        overflowY: "hidden",
                        scrollBehavior: "smooth",
                        "&::-webkit-scrollbar": {
                            height: 0,
                        },
                        "&::-webkit-scrollbar-track": {
                            backgroundColor: "transparent",
                        },
                        "&::-webkit-scrollbar-thumb": {
                            backgroundColor: "rgba(0,0,0,0)",
                        },
                    }}
                >
                    {movies.map(movieItem => (
                        <BackdropCard key={movieItem.id} movie={movieItem} onClick={() => navigate(`/${movieItem.id}`)} />
                    ))}
                </Stack>
            )}
        </>
    )
}