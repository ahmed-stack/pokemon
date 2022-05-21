import styled from "styled-components";
import { strokeBlue, yellow } from "./global";

export const CardWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: end;
  height: 25em;
  cursor: pointer;
  transition: transform 0.3s;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 8px;
  &:hover {
    transform: scale(1.05);
    background-image: url(${(props) => props.shinyImage});
  }
`;

export const TextWrapper = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(25, 24, 26, 0.9);
  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  overflow-y: hidden;
  color: ${yellow};
  h1 {
    font-size: 24px;
    -webkit-text-stroke: 1px ${strokeBlue};
  }
  div {
    padding: 10px;
    display: none;
  }
  ${CardWrapper}:hover & {
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
      rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
      rgba(0, 0, 0, 0.07) 0px 16px 16px;

    div {
      display: flex;
    }
  }
`;

export const ButtonConatiner = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  justify-content: space-around;
`;

export const FavouriteIconConatiner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  padding: 10px;
  img {
    width: 100%;
  }
`
