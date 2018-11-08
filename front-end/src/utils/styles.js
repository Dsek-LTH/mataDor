import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas: 'header' '.' 'numbers';
  grid-template-rows: 90px 15px 1fr;
  grid-template-columns: 1fr;
`

export const StyledHeader = styled.div`
  grid-area: header;
  display: flex;
  justify-content: center;
  text-decoration: underline;
  font-size: 3em;
  align-self: center;
  text-align: center;
  padding: 0.5em;

  @media (max-width: 700px) {
    font-size: 1.7em;
  }
`

export const NotifyContainer = styled.div`
  grid-area: numbers;
  width: 50vw;
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
`