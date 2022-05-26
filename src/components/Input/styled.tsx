import styled from "styled-components";

export const StyledInput = styled.input`
    height: 2.2rem;
    border-radius: 4px;
    border: 1px solid #bfbfbf;
    width: 100%;
    color: #525E62;
    padding: 0.4rem;
    width: 100%;

    &::placeholder {
        color: #9c9c9c;
        font-size: 0.7rem;
    }

    &:focus::placeholder {
        color: transparent;
    }
`