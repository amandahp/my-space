'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import WhatsAppForm from '../components/whatsappForm';
import ContactForm from '../components/form';
import WhatsAppButton from '../components/whatsappButton';
import { useLanguage } from '../lib/context/LanguageContext';
import translations from '../../data/translate.json';
import { LinkButton, Links, Container, FormContainer } from './styles';



const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		maxWidth: '500px',
		width: '100%',
		padding: '2rem',
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
	},
};

export default function ContactPage() {
	const [isSending, setIsSending] = useState(false);
	const [success, setSuccess] = useState(false);
	const [modalIsOpen, setIsOpen] = useState(false);
	const { lang } = useLanguage();

	const { contactPage } = translations[lang];

	const github = process.env.NEXT_PUBLIC_GITHUB_URL;
	const medium = process.env.NEXT_PUBLIC_MEDIUM_URL;
	const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL;


	useEffect(() => {
		Modal.setAppElement('#root');
	}, []);

	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}


	const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSending(true);
		setSuccess(false);

		const form = e.currentTarget;
		const formData = new FormData(form);
		const data = {
			email: formData.get('email'),
			subject: formData.get('subject'),
			message: formData.get('message'),
		};

		const response = await fetch('/api/contact', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		});

		if (response.ok) {
			setSuccess(true);
			form.reset();
			setTimeout(() => setSuccess(false), 3000);
		} else {
			alert('Erro ao enviar mensagem.');
		}

		setIsSending(false);
	};

	return (
		<Container id="root">
			<h2>{contactPage.title}</h2>
			<FormContainer>
				<ContactForm handleForm={handleFormSubmit} isSending={isSending} success={success} />

				<Links>
					<LinkButton href={medium} target="_blank">
						<Image src="/utils/icon/medium-icon-svgrepo-com.svg" alt="Medium" width={20}
							height={20} />
					</LinkButton>
					<LinkButton href={linkedin} target="_blank">
						<Image src="/utils/icon/linkedin-svgrepo-com.svg" alt="Linkedin" width={20}
							height={20} />
					</LinkButton>
					<LinkButton href={github} target="_blank">
						<Image src="/utils/icon/git-svgrepo-com.svg" alt="Github" width={20}
							height={20} />
					</LinkButton>
					<WhatsAppButton onClick={openModal}>
						<Image src="/utils/icon/whatsapp-whats-app-svgrepo-com.svg" alt="WhatsApp" width={20}
							height={20} />
					</WhatsAppButton>
				</Links>
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					style={customStyles}
				>
					<WhatsAppForm />
				</Modal>
			</FormContainer>

		</Container>
	);
}