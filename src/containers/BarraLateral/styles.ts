import styled from 'styled-components'

export const Aside = styled.aside<{ $aberta: boolean }>`
  padding: 16px;
  height: 100vh;
  background-color: #0f172a;

  @media (min-width: 769px) {
    transform: translateX(0);
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    transform: ${({ $aberta }) =>
      $aberta ? 'translateX(0)' : 'translateX(-100%)'};
    z-index: 999;
  }
`

export const Input = styled.input`
  padding: 8px;
  border-radius: 6px;
  border: none;
`

export const ToggleButton = styled.button`
  display: none;
  position: fixed;
  top: 16px;
  left: 16px;
  background-color: #0d121aff;
  border: none;
  color: white;
  font-size: 24px;
  padding: 8px 10px;
  border-radius: 6px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`
export const CloseButton = styled.button`
  display: none;
  position: fixed;
  background: transparent;
  border: none;
  color: white;
  font-size: 24px;
  padding: 6px;
  border-radius: 12px;
  background-color: #0d121aff;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    left: 200px;
    top: 12px;
  }
`
