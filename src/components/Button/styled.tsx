import styled from "styled-components"

export const StyledButton = styled.button`
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  border-radius: 0.4rem;
  padding: 0.6rem;
  width: 100%;

  margin-top: 1rem;
  box-shadow: 0 0.4rem 1.2rem rgba(255, 114, 94, 0.2);
  border: 0.1rem solid #eaeaea;
  color: #fff;
  background-color: #ff725e;

  &:hover,
  &:focus {
    background-color: #ef6e5c;
    color: #fff;
    cursor: pointer;
  }
`