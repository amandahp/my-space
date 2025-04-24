'use client';

import React from 'react';
import Image from 'next/image';
import { HeaderContainer, HeaderContent, Logo, NavItem, LanguageSwitcher, Nav } from './header.styles';
import translations from "../../data/translate.json";


type Lang = 'en' | 'es' | 'pt'

const Header: React.FC = () => {

	const [lang, setLang] = React.useState<Lang>('en');

	const handleLanguageChange = (language : Lang) => {
		setLang(language); 
	}

	const {about, projects, contact} = translations[lang];

  return (
    <HeaderContainer>
      <HeaderContent>
				<Logo href="/">
					<Image
						src="/utils/ahp-high-resolution-logo-light.png"
						alt="Logo de Amanda"
						width={100}
						height={100}
					/>
				</Logo>
        <Nav>
					<NavItem href="#about">{about}</NavItem>
					<NavItem href="#projects">{projects}</NavItem>
					<NavItem href="#contact">{contact}</NavItem>
        </Nav>
        <LanguageSwitcher>
					<button onClick={() => handleLanguageChange('en')}>EN</button>
        	<button onClick={() => handleLanguageChange('es')}>ES</button>
        	<button onClick={() => handleLanguageChange('pt')}>PT</button>
        </LanguageSwitcher>
      </HeaderContent>
    </HeaderContainer>

  );
};

export default Header;
