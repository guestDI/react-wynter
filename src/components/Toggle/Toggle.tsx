import React, { ReactNode, useCallback } from 'react';
import { StyledWrapper, StyledToggle } from './styled';

interface ToggleProps {
  onChange: Function
  children: ReactNode
  value: boolean
}

const Toggle: React.FC<ToggleProps> = ({value, onChange, children}) => {
  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e.target.checked)
      }
    },
    [onChange],
  )

  return (
    <StyledWrapper>
        <StyledToggle>
            <input type='checkbox' onChange={handleOnChange} checked={value}/>
            <span className="slider round"></span>
        </StyledToggle>
        {children}
    </StyledWrapper>
   
  );
}

export default Toggle