import React from "react";
import { Form, Input, TextArea, Button } from './form.styles';
import { useLanguage } from "../lib/context/LanguageContext";
import translations from '../../data/translate.json';

export default function ContactForm({ handleForm, isSending, success }) {
	const { lang } = useLanguage();

	const { contactPage } = translations[lang];


	return (
		<Form onSubmit={handleForm}>
			<Input type="input" name="name" placeholder={contactPage.inputName} required />
			<Input type="email" name="email" placeholder={contactPage.inputEmail} required />
			<Input type="text" name="subject" placeholder={contactPage.inputSubject} required />
			<TextArea name="message" placeholder={contactPage.Message} required />
			<Button type="submit">
				{isSending ? `${contactPage.buttonSending}` : success ? `${contactPage.buttonSuccess}` : `${contactPage.buttonSend}`}
			</Button>
		</Form>
	);
}