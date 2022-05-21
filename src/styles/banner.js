import styled from "styled-components";
import { strokeBlue, yellow } from "./global";

export const BannerContainer = styled.div`
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  h1 {
    color: ${yellow};
    font-size: 28px;
    -webkit-text-stroke: 1px ${strokeBlue};
  }
  @media (max-width: 900px) {
    height: 25%;
    flex-direction: column;

    h1 {
      margin: 5px;
    }
  }
`;

export const FilterWrapper = styled.div`
  right: 0;
  position: absolute;
  padding: 10px;
  display: flex;
  @media (max-width: 900px) {
    position: relative;
    flex-direction: column;
  }
`;

export const LinkWrapper = styled.div`
  left: 0;
  position: absolute;
  padding: 11em 2em;
  color: ${yellow};
  cursor: pointer;
  text-decoration : underline;
  display: flex;
  @media (max-width: 900px) {
    position: relative;
    flex-direction: column;
    padding: 0px;
  }
`;
