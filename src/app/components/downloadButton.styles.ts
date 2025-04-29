import styled from 'styled-components';

export const FloatingButton = styled.a`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #0ABAB5;
  color: white;
  padding: 0.8rem 1.2rem;
  border-radius: 2rem;
  text-decoration: none;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 1000;

  &:hover {
    background-color: #089d9a;
  }
`;