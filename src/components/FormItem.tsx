import React from "react"
import styled from "styled-components"

interface FormItemProps {
    label: string
    children?: React.ReactNode
    error?: string
}

const StyledFormItem = styled.div`
    label {
        display: block;
        margin-bottom: 0.3rem;
        color: #9c9c9c;
    }
`

const FormItem: React.FC<FormItemProps> = ({ label, error, children }) => {
	return (
		<StyledFormItem>
			<label>{label}</label>
			{children}
            {error && <span>{error}</span>}
		</StyledFormItem>
	)
}

export default FormItem
