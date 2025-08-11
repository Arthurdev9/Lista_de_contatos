import styled from 'styled-components'

export const InputsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 400px;
  height: 400px;
  padding: 100px;
  background-color: #ccc;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
`

export const Input = styled.input`
  display: flex;
  width: 26em;
  margin-top: 12px;
  margin-bottom: 4px;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 16px;
`

export const Radios = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  margin: 12px 0;

  label {
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
  }
`

export const Button = styled.button`
  background-color: blue;
  padding: 8px;
  border-radius: 8px;
  margin-top: 16px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: aliceblue;
  }
`
