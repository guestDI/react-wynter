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

    .error {
        display: inline-block;
        color: red;
        font-weight: 600;
        margin-top: 0.2rem;
    }
`

const FormItem: React.FC<FormItemProps> = ({ label, error, children}) => {
	return (
		<StyledFormItem>
			<label>{label}</label>
			{children}
            {error && <span className="error">{error}</span>}
		</StyledFormItem>
	)
}

export default FormItem
