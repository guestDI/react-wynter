import React, { useContext, useEffect,useState } from "react"

interface AuthContextProps {
  userRights: string[]
}

const AuthContext = React.createContext<AuthContextProps>({
	userRights: []
})

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }: {children: any}) => {
	const [userRights, setUserRights] = useState<string[]>([])

	useEffect(() => {
		setUserRights(["superadmin"])
	}, [setUserRights])

	const context = {
		userRights
	}

	return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}
