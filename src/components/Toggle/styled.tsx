import styled from "styled-components"

export const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 1rem;

    label {
        margin-right: 0.5rem;
    }
`
;

export const StyledToggle = styled.label`
    position: relative;
    width: 60px;
    height: 30px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    padding-top: 6px;
    padding-bottom: 7px;


  /* Hiding the default checkbox*/
    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

  /* The slider */
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #cccccc;
        -webkit-transition: .3s;
        transition: .3s;
    }

  /* Before sliding */
  .slider:before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    left: 5px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: .3s;
    transition: .3s;
  }
  input:checked + .slider {
    background-color: #ff725e;;
  }
  input:focus + .slider {
    box-shadow: 0 0 1px #ff725e;;
  }
  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

`