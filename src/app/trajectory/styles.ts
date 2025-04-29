import styled from 'styled-components';

export const TitleContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ theme }) => theme.colors.primary};	
`;

export const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const CentralLine = styled.div`
  position: absolute;
  width: 2px;
  background: #333;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

export const YearContentWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  z-index: 2;
	.item-box{
  	padding: 1rem;
  	box-sizing: border-box;
		margin: 2px;
  	border-left: 6px solid ${({ theme }) => theme.colors.secondary};    
  	background-color: #aaf1ef; 
  	border-radius: 8px;
	}
	
`;

export const YearMarker = styled.button`
  background: ${({ theme }) => theme.colors.black};
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
  z-index: 3;
  transition: all 0.3s ease;
  margin: 10px 0;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    transform: scale(1.1);
  }
`;
