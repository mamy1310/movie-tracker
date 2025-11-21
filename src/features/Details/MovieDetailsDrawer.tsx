import Drawer from "@mui/material/Drawer";
import MovieDetails from "./MovieDetails";

interface MovieDetailsDrawerProps {
    id?: string;
    onClose: () => void;
}

export default function MovieDetailsDrawer({ id, onClose }: MovieDetailsDrawerProps) {

    return (
        <Drawer
            open={Boolean(id)}
            onClose={onClose}
            anchor="bottom"
            className="drawer"
            hideBackdrop={false}
            slotProps={{
                paper: {
                    sx: {
                        height: "95vh",
                        width: { xs: "100%", md: "75%", lg: "50%" },
                        marginLeft: "auto",
                        marginRight: "auto",
                        left: 0,
                        right: 0,
                        overflowY: "auto",
                        overflowX: "hidden",
                        border: "0.5px solid grey",
                        borderRadius: "24px 24px 0 0",
                        backgroundColor: "rgb(0, 0, 0)",
                    }
                }
            }}
        >
            {id && <MovieDetails onClose={onClose} />}
        </Drawer>
    )
}