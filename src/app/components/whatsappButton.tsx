import React from 'react';
import { Button } from './whatsappButton.styles';

const WhatsAppButton = ({ onClick, children }) => {
	return (
		<Button onClick={onClick} style={{ maxWidth: '100px' }} >
			{children}
		</Button>
	);
};

export default WhatsAppButton;