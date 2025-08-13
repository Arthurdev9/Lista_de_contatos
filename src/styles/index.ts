import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 226px auto;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px) {
    grid-template-columns: 400px;
  }
`

export default EstiloGlobal
