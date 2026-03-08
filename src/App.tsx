import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Container from "@mui/material/Container";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import { UserProvider } from "./contexts/UserContext";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<UserProvider>
				<CssBaseline />
				<Container>
					<Router>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/login" element={<Login />} />
							<Route path="/signup" element={<SignUp />} />
							<Route path="/:id" element={<Home />} />
							{/* Redirect automatically all unknown routes to home */}
							<Route path="*" element={<Home />} />
						</Routes>
					</Router>
				</Container>
			</UserProvider>
		</ThemeProvider>
	);
}

export default App;
