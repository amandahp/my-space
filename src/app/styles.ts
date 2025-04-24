'use client';
import styled from 'styled-components';


export const Container = styled.div`
  width: 100%; 
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  width: 100%; 
  max-width: 1200px; 
  margin: 2rem auto 0;  
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }

	.name, .about {
		color: ${({theme}) => theme.colors.black};
		font-size: 40px;
	}
	h2 {
		color: ${({theme}) => theme.colors.secondary};
		font-size: 30px;
	}
	.skills {
		color: ${({theme}) => theme.colors.secondary};
		font-size: 40px;
	}
	p {
		color: ${({theme}) => theme.colors.black};
		font-size: 20px;
	}
`;

export const ProfileImage = styled.img`
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  object-fit: cover;
`;

export const TextBlock = styled.div`
  flex: 1;

  h2 {
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
  }

	a {
		padding: 0rem 2rem 0rem 0rem;
		&:hover {
    color: ${({ theme }) => theme.colors.secondary};
		transition: color 0.3s ease, border-bottom 0.3s ease	
	}

`;



export const SkillsGrid = styled.div`
	display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 2rem;
  width: 100%;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); 
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; 
  }
`;

export const SkillBox = styled.div`
 	width: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.boxBg || '#f0f0f0'};
  border-radius: 1.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  img {
    max-width: 150px;
    height: 150px;
    object-fit: contain;
  }

  span {
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
  }
`;
