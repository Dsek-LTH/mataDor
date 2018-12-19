import styled from "styled-components";

export const AdminForm = styled.form`
  grid-area: header;
  display: grid;
  width: 96%;
  padding: 2%;
  grid-template-columns 1fr 7fr 1fr;
  grid-template-areas: "clear currentInput send";

  @media (max-width: 700px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
     "clear send"
     "currentInput currentInput";
    width: 100%;
    padding: 0;
  }
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
