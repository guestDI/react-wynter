import React, { useCallback } from 'react'
import { StyledInput, StyledInputContainer } from './styled'

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label: string
  type?: string
  value?: string
  placeholder?: string
  onChange?: (value: string) => void
  error?: string
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement,InputProps> = (
    {
      type = "text",
      label,
      value,
      onChange,
      error = false,
      placeholder = "Type your answer here...",
      ...props
    },
    ref,
  ) => {   
    const handleOnChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
          if (onChange) {
            onChange(e.target.value)
          }
        },
        [onChange],
      )

    return(
        <StyledInputContainer>
            <label>{label}</label>
            <StyledInput
                value={value ?? ""}
                onChange={handleOnChange}
                ref={ref}
                type={type}
                placeholder={placeholder}
                aria-invalid={error ? "true" : "false"}
                {...props}
            />
            {error && <div>{error}</div>}
        </StyledInputContainer>
    )
}

export default React.forwardRef(Input);