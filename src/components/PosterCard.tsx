import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import type { DiscoverMovieItem } from "../models/Discover";

export default function PosterCard(movieItem: DiscoverMovieItem) {
    return (
        <Card sx={{ borderRadius: "5px", minWidth: "185px" }}>
            <CardActionArea sx={{ height: "100%" }}>
                <CardMedia
                    component="img"
                    image={`${localStorage.getItem("image_base_url")}${import.meta.env.VITE_POSTER_SIZE}${movieItem.poster_path}`}
                    alt={movieItem.title}
                    sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                    }}
                />
            </CardActionArea>
        </Card>
    )
}