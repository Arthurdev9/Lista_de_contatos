import styled from 'styled-components'

export const Lista = styled.div`
  padding: 8px;
  font-size: 8px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Nome = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 12px;
`

export const Span = styled.span`
  padding: 8px;
  font-size: 12px;
  border-radius: 16px;
  background-color: #ccc;
  color: #000;
`

export const Sobre = styled.div`
  color: #000;
  font-size: 16px;
  margin-top: 14px;
`

export const Icons = styled.button`
  margin-top: 8px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  margin-right: 8px;
  transition: ease-in-out 0.5s;

  svg {
    font-size: 24px;
  }

  &:hover {
    scale: 1.2;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
`

export const Select = styled.select`
  padding: 6px;
  border-radius: 6px;
  border: 1px solid #ccc;
`
