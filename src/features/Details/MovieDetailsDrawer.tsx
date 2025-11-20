import Drawer from "@mui/material/Drawer";
import { useNavigate, useParams } from "react-router-dom";
import MovieDetails from "./MovieDetails";

export default function MovieDetailsDrawer() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    return (
        <Drawer
            open={Boolean(id)}
            onClose={() => navigate("/")}
            anchor="bottom"
            className="drawer"
            hideBackdrop={false}
            slotProps={{
                paper: {
                    sx: {
                        height: "95vh",
                        width: { xs: "100%", md: "50%" },
                        marginLeft: "auto",
                        marginRight: "auto",
                        left: 0,
                        right: 0,
                        overflowY: "auto",
                        overflowX: "hidden",
                        border: "0.5px solid grey",
                        borderRadius: "24px 24px 0 0",
                        backgroundColor: "rgb(0, 0, 0)",
                        "&::-webkit-scrollbar": {
                            width: 0,
                        },
                        "&::-webkit-scrollbar-track": {
                            backgroundColor: "transparent",
                        },
                        "&::-webkit-scrollbar-thumb": {
                            backgroundColor: "rgba(0,0,0,0)",
                            borderRadius: "4px",
                        },
                        "&::-webkit-scrollbar-thumb:hover": {
                            backgroundColor: "rgba(0,0,0,0)",
                        },
                    }
                }
            }}
        >
            {id && <MovieDetails />}
        </Drawer>
    )
}