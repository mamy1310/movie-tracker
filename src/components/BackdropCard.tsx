import Box from "@mui/material/Box";
import type { DiscoverMovieItem } from "../models/Discover";

type BackdropCardProps = {
    movie: DiscoverMovieItem;
    onClick?: () => void;
}

export default function BackdropCard({ movie, onClick }: BackdropCardProps) {
    return (
        <Box
            sx={{
                width: { md: "800px", lg: "1000px" },
                position: "relative",
                flexShrink: 0,
                borderRadius: "10px",
                cursor: onClick ? "pointer" : "default"
            }}
            onClick={onClick}
        >
            <img
                src={`${localStorage.getItem("image_base_url")}original${movie.backdrop_path}`}
                alt={movie.title}
                style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 99%)",
                }}
            />
            {movie.images && movie.images?.logos?.length && (
                <Box
                    sx={{
                        position: "absolute",
                        left: 50,
                        bottom: 125,
                        pointerEvents: "none",
                        maxHeight: 100,
                        maxWidth: 300,
                    }}
                >
                    <img
                        src={`${localStorage.getItem("image_base_url")}w300${movie.images.logos[0].file_path}`}
                        alt={movie.title}
                        style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
                    />
                </Box>
            )}
        </Box>
    );
}