import styled from 'styled-components'

export const AdminPanel = styled.div`
  grid-area: header;
  display: grid;
  width: 100%;
  @media (max-width: 700px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 
     "clear undo send" 
     "currentInput currentInput currentInput";
  }
  
  @media (min-width: 700px) {
    grid-template-columns 1fr 6fr 1fr 1fr;
    grid-template-areas: "clear currentInput send undo";
  }
`

export const ColoredButton = styled.div`
  grid-area: ${props => props.area}
  font-size: 2em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color};
  height: 100%;
  width: 100%;
  cursor: pointer;
`

export const FocusInput = styled.input`
  grid-area: currentInput;
  font-size: 3em;
  text-align: right;
  border: none;
  height: 100%;
  width: 100%;
`
