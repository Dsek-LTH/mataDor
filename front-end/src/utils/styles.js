import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100vw;
  display: grid;

  grid-template-areas: "header" "empty" "numbers";
  grid-template-rows: 110px ${props => props.emptySize || "20px"} 1fr;
  grid-template-columns: 1fr;
`;

export const StyledHeader = styled.div`
  grid-area: header;
  display: flex;
  justify-content: center;
  text-decoration: underline;
  font-size: ${props => props.fontSize || "3em"};
  align-self: center;
  text-align: center;
  padding: 0.5em;

  @media (max-width: 700px) {
    font-size: 2.2em;
  }
`;

export const NotifyContainer = styled.div`
  grid-area: empty;
  font-size: ${props => props.fontSize || "1.7em"};
  width: 50vw;
  margin-right: 25vw;
  margin-left: 25vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  text-align: center;
`;

export const FormContainer = styled.div`
  grid-area: empty;
  font-size: ${props => props.fontSize || "1.7em"};
  width: 20vw;
  margin-right: 40vw;
  margin-left: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  text-align: center;
`;

export const WaitInput = styled.input`
  font-size: ${props => props.fontSize || "1.7em"};
  border: none;
  height: 100%;
  width: 100%;
  padding: 0 0.25em;
  box-sizing: border-box;
`;
