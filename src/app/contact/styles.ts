import styled from "styled-components";

export const LinkButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 100%;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
	max-width: 100px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #ddd;

    img {
      transform: scale(1.2);
    }
  }

  img {
    transition: transform 0.2s ease;
  }
`;

export const Links = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
	justify-content: center; 
	align-items: center;
`;

export const Container = styled.main`
  min-height: 100vh; 
	h2 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
	padding: 4rem;
	color: ${({ theme }) => theme.colors.secondary};
	text-transform: uppercase;
	text-align: center;
}

`;

export const FormContainer = styled.div`
	max-width: 800px;
  margin: auto;
	padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center; 
	min-height: 50vh;; 
`