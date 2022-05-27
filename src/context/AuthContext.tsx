import React, { useCallback, useContext, useEffect,useState } from "react"
import { useFetch } from "../hooks"

interface AuthContextProps {
	isUserLoggedIn: boolean
	login: () => void
	checkIfUserExists: (user: string) => boolean
}

const AuthContext = React.createContext<AuthContextProps>({
	isUserLoggedIn: false,
	login: () => {},
	checkIfUserExists: () => false
})

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }: {children: any}) => {
	const { data: users } = useFetch(`${process.env.REACT_APP_DB}/users.json` || "")

	const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false)

	const checkIfUserExists = useCallback((userIdentifier: string) => {
		return !!Object.values(users).find((user: Record<string, string>) => {
			return user.email === userIdentifier
		 })
	}, [users])

	const login = () => {
		setIsUserLoggedIn(true)
	}

	const context = {
		isUserLoggedIn,
		login,
		checkIfUserExists
	}

	return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}
