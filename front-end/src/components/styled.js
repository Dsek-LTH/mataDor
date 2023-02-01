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
  font-size: ${props => props.fontSize || "1em"};
  width: 20vw;
  margin-right: 40vw;
  margin-left: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  text-align: center;

  @media (max-width: 700px) {
    width: 80vw;
    margin-right: 10vw;
    margin-left: 10vw;
  }
`;

export const WaitInput = styled.input`
  font-size: ${props => props.fontSize || "1.7em"};
  border: none;
  height: 100%;
  width: 100%;
  padding: 0 0.25em;
  box-sizing: border-box;
`;

export const AdminForm = styled.form`
  grid-area: header;
  display: grid;
  width: 96%;
  padding: 2%;
  grid-template-columns 7fr 1fr;
  grid-template-areas: "currentInput send";
`;

export const ColoredButton = styled.button`
  grid-area: ${props => props.area}
  font-size: 2em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color};
  height: 100%;
  width: 100%;
  cursor: pointer;
  border: 0;
  font-size: 2em;
  padding: 0.5em 0.75em;
`;

export const FocusInput = styled.input`
  grid-area: currentInput;
  font-size: 3em;
  text-align: right;
  border: none;
  height: 100%;
  width: 100%;
  padding: 0 0.25em;
  box-sizing: border-box;
`;

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
