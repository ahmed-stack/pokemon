import styled from "styled-components";
import { strokeBlue, yellow } from "./global";

export const ButtonWrapper = styled.div`
  button {
    background-color: ${strokeBlue};
    border-radius: 10px;
    padding: 6px 10px !important;
    outline: none;
    border: none;
    color: ${yellow};
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
      transform: scale(1.01);
    }
  }
`;

export const SelectWrapper = styled.div`
  select {
    appearance: none;
    outline: 0;
    border: 0;
    box-shadow: none;
    flex: 1;
    padding: 0.2em 1.2em;
    color: ${yellow};
    font-weight: bold;
    background-color: #718c9e;
    background-image: none;
    cursor: pointer;
  }

  select::-ms-expand {
    display: none;
  }

  position: relative;
  display: flex;
  border-radius: 0.25em;
  overflow: hidden;
  margin-right: 20px;

  &:after {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1em;
    background-color: #34495e;
    transition: 0.25s all ease;
    pointer-events: none;
  }

  &:hover::after {
    color: #f39c12;
  }

  @media (max-width: 900px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const InputWrapper = styled.div`
  input {
    color: ${yellow};
    border: none;
    border-bottom: 1px solid #718c9e;
    box-sizing: border-box;
    font-weight: bold;
    transition: 0.3s all ease;
    padding-bottom: 6px;
    ::-webkit-appearance: none;
    background: transparent;
    &:focus {
      outline: none;
      top: -7px;
      font-size: 14px;
      font-weight: 500;
    }

    &:valid {
      top: -7px;
      font-size: 14px;
      font-weight: 500;
    }
  }
`;

export const LoadingWrapper = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: wait;
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

export const NotFoundWrapper = styled.div`
  text-align: center;
  color: ${yellow};
  font-size: 20px;
  font-weightL bold;
`

