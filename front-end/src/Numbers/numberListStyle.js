import styled from "styled-components";

export const NumberDiv = styled.div`
  background-color: #f280a1;
  font-size: ${props => (props.tv ? "7em" : "4em")};
  ${props => props.tv && "color: black"};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const NumberListContainer = styled.div`
  grid-area: numbers;
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 15px;
  grid-column-gap: 15px;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
