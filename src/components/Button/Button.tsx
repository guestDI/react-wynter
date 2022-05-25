import React from "react";
import { StyledButton } from './styled'

interface ButtonProps {
    children: React.ReactNode
    onClick: () => void
}

const Button: React.FC<ButtonProps> = ({onClick, children, ...props}) => {
    return (
        <StyledButton onClick={onClick} {...props}>
            {children}
        </StyledButton>
    )
}

export default Button