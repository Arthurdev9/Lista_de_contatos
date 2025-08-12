import styled from 'styled-components'

export const Botao = styled.button`
  display: flex;
  justify-content: center;
  padding: 5px;
  background-color: transparent;
  color: #fff;
  width: 100%;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 25px;
  font-size: 18px;
  transition: all ease-in-out 0.5s;

  &:hover {
    background-color: #1e293b;
    transition: all ease-in-out 0.2s;
  }
`

export const StatusContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Span = styled.span`
  margin-left: 8px;
  padding: 1px 8px;
  border-radius: 6px;
  background-color: #152236ff;
`
