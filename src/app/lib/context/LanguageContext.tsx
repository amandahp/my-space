'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
	lang: string;
	setLang: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [lang, setLangState] = useState('en');

	useEffect(() => {
		const savedLang = localStorage.getItem('lang');
		if (savedLang) {
			setLangState(savedLang);
		} else {
			const browserLang = navigator.language || navigator.languages[0] || 'en';
			const normalizedLang = browserLang.split('-')[0];
			setLangState(normalizedLang);
			localStorage.setItem('lang', normalizedLang);
		}
	}, []);

	const setLang = (newLang: string) => {
		setLangState(newLang);
		localStorage.setItem('lang', newLang);
	};

	return (
		<LanguageContext.Provider value={{ lang, setLang }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
	return context;
};
