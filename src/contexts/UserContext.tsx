import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

export type User = {
	id: string;
	email: string;
	name?: string;
};

type UserContextType = {
	user: User | null;
	isAuthenticated: boolean;
	login: (user: User) => void;
	logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const USER_STORAGE_KEY = "movie_tracker_user";

export function UserProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const storedUser = localStorage.getItem(USER_STORAGE_KEY);
		if (storedUser) {
			try {
				const parsedUser = JSON.parse(storedUser);
				setUser(parsedUser);
			} catch (error) {
				console.error(
					"Erreur lors de la lecture du localStorage:",
					error,
				);
				localStorage.removeItem(USER_STORAGE_KEY);
			}
		}
	}, []);

	useEffect(() => {
		if (user) {
			localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
		} else {
			localStorage.removeItem(USER_STORAGE_KEY);
		}
	}, [user]);

	const login = (userData: User) => {
		setUser(userData);
	};

	const logout = () => {
		setUser(null);
	};

	const value: UserContextType = {
		user,
		isAuthenticated: user !== null,
		login,
		logout,
	};

	return (
		<UserContext.Provider value={value}>{children}</UserContext.Provider>
	);
}

export function useUser() {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error(
			"useUser doit être utilisé à l'intérieur d'un UserProvider",
		);
	}
	return context;
}
