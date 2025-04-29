import styled from "styled-components";

export const Button = styled.button`
	background-color: transparent;
	color: white;
  padding: 0.75rem;
  border: none;
	cursor: pointer;
	border-radius: 100%;
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