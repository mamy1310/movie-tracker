import { Box, Button, Typography, Paper, Link } from "@mui/material";
import TextField from "../components/CustomTextField";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../contexts/UserContext";
import { validateEmail } from "../utils/validateEmail";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailError, setEmailError] = useState("");
	const { login } = useUser();
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setEmailError("");
		if (!validateEmail(email)) {
			setEmailError("Adresse email invalide");
			return;
		}
		if (email && password) {
			login({
				id: "mock-user-id",
				email: email,
				name: email.split("@")[0],
			});

			navigate("/");
		}
	};
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
					Connexion
				</Typography>
				<Box
					component="form"
					noValidate
					autoComplete="off"
					display="flex"
					flexDirection="column"
					gap={2}
					onSubmit={handleSubmit}
				>
					<TextField
						label="Email"
						type="email"
						value={email}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setEmail(e.target.value)
						}
						helperText={emailError}
						error={!!emailError}
					/>
					<TextField
						label="Mot de passe"
						type="password"
						value={password}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setPassword(e.target.value)
						}
					/>
					<Button
						type="submit"
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
						Se connecter
					</Button>
					<Link
						component={RouterLink}
						to="/signup"
						underline="hover"
						sx={{
							color: "primary.main",
							mt: 2,
							textAlign: "center",
							fontWeight: 500,
						}}
					>
						Pas encore de compte ? S'inscrire
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

export default Login;
