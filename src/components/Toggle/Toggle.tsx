import React, { ReactNode } from 'react';

import { StyledWrapper, StyledToggle } from './styled';

const Toggle: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <StyledWrapper>
        <StyledToggle>
            <input type='radio'/>
            <span className="slider round"></span>
        </StyledToggle>
        {children}
    </StyledWrapper>
   
  );
}

export default Toggle