import styled from "styled-components"
import React from "react"

export const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`

export const StyledBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1 100%;
  padding: 1rem 10rem;
`

const AuthLayout: React.FC<{children: React.ReactNode}> = ({ children }) => {
	return (
		<StyledPageContainer>
			<StyledBoxWrapper>{children}</StyledBoxWrapper>
		</StyledPageContainer>
	)
}

export default AuthLayout
