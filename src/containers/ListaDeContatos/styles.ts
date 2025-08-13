import styled from 'styled-components'

export const Contatos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: min-content;
  height: 100vh;
  margin-left: 120px;
  padding: 25px;
  gap: 24px;
  overflow-y: auto;

  @media (max-width: 768px) {
    grid-template-columns: 250px;
    margin-left: 80px;
  }
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
    font-size: 28px;
    color: #fff;
  }
`
