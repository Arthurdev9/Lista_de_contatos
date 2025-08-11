import styled from 'styled-components'

export const Contatos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 60vw;
  height: 400px;
  margin-left: 120px;
  padding: 25px;
  gap: 16px;
`
export const ButtonAdicionar = styled.button`
  position: absolute;
  bottom: 24px;
  right: 24px;
  cursor: pointer;
  border: none;
  background-color: green;
  padding: 24px;
  border-radius: 50%;

  svg {
    font-size: 32px;
    color: #fff;
  }
`
