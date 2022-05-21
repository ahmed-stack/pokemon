import styled from "styled-components";
import { strokeBlue, yellow } from "./global";

export const DetailWrapper = styled.div`
  display: grid;
  min-height: 22em;
  grid-template-columns: 40% 60%;
  overflow-y: auto;

  @media (max-width: 992px) {
    grid-template-columns: 100%;
    grid-template-rows: 10em 20em;
  }
  ::-webkit-scrollbar {
    width: 10px;
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 25px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${strokeBlue};
    border-radius: 25px;
  }
`;

export const ImageWrapper = styled.div`
  padding: 1em;

  img {
    width: 100%;
    @media (max-width: 992px) {
      width: auto;
      height: 100%;
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
  }
`;

export const DetailContainer = styled.table`
  padding: 1em;
  color: ${strokeBlue};
  font-weight: bold;
  .title {
    font-size: 36px;
    -webkit-text-stroke: 0.4px ${yellow};
    margin-bottom: 20px;
    @media (max-width: 992px) {
      text-align: center;
    }
  }

  tr {
    display: grid;
    grid-template-columns: 40% 60%;
    margin-bottom: 5px;
  }

  @media (max-width: 992px) {
    font-size: 0.8em;
  }

  @media (max-width: 440px) {
    font-size: 0.6em;
  }
`;

export const TagWrapper = styled.p`
  display: inline-block;
  background-color: ${strokeBlue};
  color: ${yellow};
  border-radius: 8px;
  padding: 0px 10px;
  margin: 1px 4px 1px 0px;
`;

export const ProgressBarWrapper = styled.td`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
