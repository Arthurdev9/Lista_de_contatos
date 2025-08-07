import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 226px auto;
`

export default EstiloGlobal
