import React from 'react';
import { FooterContainer } from './footer.styles';

const Footer = () => {

	const github = process.env.NEXT_PUBLIC_GITHUB_URL;
	return (
		<FooterContainer>
			Created with
			<a href={github} target="_blank" rel="noopener noreferrer">
				<span>&#10084;</span>
			</a>
		</FooterContainer>
	);
};

export default Footer;