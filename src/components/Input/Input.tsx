import React, { useCallback } from 'react'
import { StyledInput } from './styled'

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  type?: string
  value?: string
  placeholder?: string
  onChange?: (value: string) => void
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement,InputProps> = (
    {
      type = "text",
      value,
      onChange,
      placeholder,
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
      <StyledInput
        value={value ?? ""}
        onChange={handleOnChange}
        ref={ref}
        type={type}
        placeholder={placeholder}
        {...props}
      />
    )
}

export default React.forwardRef(Input);