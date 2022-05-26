import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
    display: flex;
    align-items: end;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 1.4rem 0.6rem;
    font-size: 1rem;

    .search {
        min-width: 20rem;
        label {
            color: #000;
        }
    }
`

export const StyledBasicBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;    
`