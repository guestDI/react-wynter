import styled from "styled-components"
import React from "react"

export const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  min-height: 100vh;
`

export const StyledBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1 100%;
  padding: 6rem 10rem;
`

export const StyledImageBoxWrapper = styled.div`
  background-size: 90%;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
`

const AuthLayout: React.FC<{children: React.ReactNode}> = ({ children }) => {
	return (
		<StyledPageContainer>
			<StyledBoxWrapper>{children}</StyledBoxWrapper>
		</StyledPageContainer>
	)
}

export default AuthLayout
