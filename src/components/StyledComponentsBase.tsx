import styled from "styled-components"

export const StyledForm = styled.form`
  width: 40rem;

  .form-controls {
    width: 70%;
    margin: 0 auto;

    div:first-of-type {
      margin-bottom: 1.2rem;
    }
  }

  .btn-container {
    width: 45%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .link {
    background:none;
    border:none; 
    padding: 0;
    color: #9c9c9c;
    text-decoration: underline;

    &:hover{
      text-decoration: none;
      cursor: pointer;
    }
  }
`

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

