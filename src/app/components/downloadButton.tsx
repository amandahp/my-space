'use client';
import React from 'react';
import { useLanguage } from '../lib/context/LanguageContext';
import { FloatingButton } from './downloadButton.styles';
import translations from '../../data/translate.json';


export default function DownloadButton() {
	const { lang } = useLanguage();

	const { donwloadButton } = translations[lang];


	const getCVPath = () => {
		switch (lang) {
			case 'es': return '/cv/en-cv.pdf';
			case 'pt': return '/cv/pt-cv.pdf';
			default: return '/cv/en-cv.pdf';
		}
	};


	return (
		<FloatingButton href={getCVPath()} download>
			{donwloadButton}&#10515;
		</FloatingButton>
	);
}