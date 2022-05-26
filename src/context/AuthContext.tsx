import React, { useContext, useEffect,useState } from "react"

interface AuthContextProps {
	isUserLoggedIn: boolean
	login: () => void
}

const AuthContext = React.createContext<AuthContextProps>({
	isUserLoggedIn: false,
	login: () => {}
})

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }: {children: any}) => {
	const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false)

	const login = () => {
		setIsUserLoggedIn(true)
	}

	const context = {
		isUserLoggedIn,
		login
	}

	return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}
