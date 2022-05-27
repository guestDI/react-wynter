import React, { useCallback, useContext, useState } from "react"
import { useFetch } from "../hooks"

interface AuthContextProps {
	isUserLoggedIn: boolean
	login: () => void
	checkIfUserExists: (users: Record<string, string>[], user: string) => boolean
}

const AuthContext = React.createContext<AuthContextProps>({
	isUserLoggedIn: false,
	login: () => {},
	checkIfUserExists: () => false
})

export const useAuthContext = () => useContext(AuthContext)

// const checkUserExists = async (email: string, cb: () => void ) => {
// 	await fetch(`${process.env.REACT_APP_DB}/users.json`, {
// 			method: "POST",
// 			body: JSON.stringify({
// 					email
// 			}) 
// 	}).then(() => {
// 			cb()
// 	})
// }

export const AuthContextProvider = ({ children }: {children: any}) => {
	const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false)

	const checkIfUserExists = useCallback((users: Record<string, string>[], userIdentifier: string) => {
		return !!Object.values(users).find((user: Record<string, string>) => {
			return user.email === userIdentifier
		 })
	}, [])

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
