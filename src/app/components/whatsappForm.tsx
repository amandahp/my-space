'use client';
import { useState } from 'react';
import { Input, Button } from './form.styles';
import { useLanguage } from '../lib/context/LanguageContext';
import translations from '../../data/translate.json';


export default function WhatsAppForm() {
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const { lang } = useLanguage();

	const { contactPage } = translations[lang];
	const { whatsappModal } = contactPage;

	const handleRequest = async () => {
		try {
			const res = await fetch('/api/send-email', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, telefone: phone }),
			});

			const result = await res.json();
			if (res.ok) {
				alert('Solicitação enviada com sucesso!');
			} else {
				alert(result.error || 'Erro ao enviar');
			}
		} catch (err) {
			console.error(err);
			alert('Erro ao enviar');
		}
	};

	return (
		<>
			<h1>{whatsappModal.title}</h1>
			<Input
				type="email"
				placeholder={whatsappModal.email}
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			<Input
				type="tel"
				placeholder={whatsappModal.tel}
				value={phone}
				onChange={(e) => setPhone(e.target.value)}
			/>
			<Button onClick={handleRequest}>
				{whatsappModal.button}
			</Button>
		</>
	);
}