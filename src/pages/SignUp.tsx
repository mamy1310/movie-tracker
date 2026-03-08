import { Box, Button, TextField, Typography, Paper, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const SignUp = () => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			minHeight="100vh"
			sx={{ bgcolor: "background.default" }}
		>
			<Paper
				elevation={6}
				sx={{
					p: 4,
					minWidth: 340,
					bgcolor: "background.paper",
					color: "text.primary",
					boxShadow: "0 8px 32px 0 rgba(0,0,0,0.7)",
				}}
			>
				<Typography
					variant="h5"
					component="h2"
					align="center"
					gutterBottom
					sx={{ color: "text.primary" }}
				>
					Inscription
				</Typography>
				<Box
					component="form"
					noValidate
					autoComplete="off"
					display="flex"
					flexDirection="column"
					gap={2}
				>
					<TextField
						label="Nom"
						type="text"
						variant="outlined"
						required
						fullWidth
						slotProps={{ inputLabel: { shrink: true } }}
						sx={{
							"& .MuiInputBase-input": {
								color: "text.primary",
								background: "background.default",
								borderRadius: 1,
							},
							"& .MuiInputLabel-root": {
								color: "text.secondary",
							},
						}}
					/>
					<TextField
						label="Email"
						type="email"
						variant="outlined"
						required
						fullWidth
						slotProps={{ inputLabel: { shrink: true } }}
						sx={{
							"& .MuiInputBase-input": {
								color: "text.primary",
								background: "background.default",
								borderRadius: 1,
							},
							"& .MuiInputLabel-root": {
								color: "text.secondary",
							},
						}}
					/>
					<TextField
						label="Mot de passe"
						type="password"
						variant="outlined"
						required
						fullWidth
						slotProps={{ inputLabel: { shrink: true } }}
						sx={{
							"& .MuiInputBase-input": {
								color: "text.primary",
								background: "background.default",
								borderRadius: 1,
							},
							"& .MuiInputLabel-root": {
								color: "text.secondary",
							},
						}}
					/>
					<Button
						variant="contained"
						color="primary"
						fullWidth
						sx={{
							mt: 2,
							bgcolor: "primary.main",
							color: "primary.contrastText",
							fontWeight: 600,
							"&:hover": { bgcolor: "#bfa12e" },
						}}
					>
						S'inscrire
					</Button>
					<Link
						component={RouterLink}
						to="/login"
						underline="hover"
						sx={{
							color: "primary.main",
							mt: 2,
							textAlign: "center",
							fontWeight: 500,
						}}
					>
						Déjà un compte ? Se connecter
					</Link>
					<Link
						component={RouterLink}
						to="/"
						underline="hover"
						sx={{
							color: "primary.main",
							textAlign: "center",
							fontWeight: 500,
						}}
					>
						Retour à l'accueil
					</Link>
				</Box>
			</Paper>
		</Box>
	);
};

export default SignUp;
