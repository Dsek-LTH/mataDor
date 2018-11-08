import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100vw;
  display: grid;
  grid-template-areas:
    '. . . '
    '. header .'
    '. . .'
    ' . numbers . ';
  grid-template-rows: 30px 90px 30px 1fr;
  grid-template-columns: 50px 1fr 50px;

  @media (max-width: 700px) {
    grid-template-rows: 30px 90px 10px 1fr;
    grid-template-columns: 20px 1fr 20px;
  }
`

export const StyledHeader = styled.div`
  grid-area: header;
  display: flex;
  justify-content: center;
  text-decoration: underline;
  font-size: 3em;

  @media (max-width: 700px) {
    font-size: 1.7em;
  }
`
