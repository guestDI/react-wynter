import React from "react";
import { StyledButton } from './styled'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    type?: "button" | "submit"
  }

const Button: React.FC<ButtonProps> = ({onClick, type = "button", children, ...props}) => {
    return (
        <StyledButton type={type} onClick={onClick} {...props}>
            {children}
        </StyledButton>
    )
}

export default Button