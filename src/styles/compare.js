import styled from "styled-components";
import { strokeBlue, yellow } from "./global";

export const CompareWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  .compare-container {
      padding: 10px;
      border: 1px solid ${strokeBlue}
  }

  @media (max-width: 992px) {
    grid-template-columns: 100%;
    grid-template-rows: 50% 50%;
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