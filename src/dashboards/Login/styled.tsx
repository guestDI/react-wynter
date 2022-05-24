import styled from "styled-components"

export const StyledFormHeader = styled.h1`
  font-size: 3.5rem;
  font-weight: 600;
`

export const StyledSeparator = styled.div`
  margin: 2rem 0;
  color: #bababa;
  text-transform: uppercase;
  overflow: hidden;
  text-align: center;

  &:before,
  &:after {
    content: '';
    display: inline-block;
    height: 0.1rem;
    position: relative;
    vertical-align: middle;
    width: 50%;
    background-color: #bababa;
  }

  &:before {
    right: 0.5em;
    margin-left: -50%;
  }

  &:after {
    left: 0.5em;
    margin-right: -50%;
  }
`

export const StyledButton = styled.button`
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  border-radius: 0.4rem;
  padding: 0.6rem;
`

export const StyledFormButton = styled(StyledButton)`
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

