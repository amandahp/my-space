'use client';

import React from 'react';
import Image from 'next/image';
import { HeaderContainer, HeaderContent, Logo, NavItem, LanguageSwitcher, Nav } from './header.styles';
import { useLanguage} from '../../context/LanguageContext';
import translations from "../../data/translate.json";


type Lang = 'en' | 'es' | 'pt'

const Header: React.FC = () => {
	const [isFixed, setIsFixed] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { lang, setLang } = useLanguage();
  const { about, projects, contact } = translations[lang];

  return (
    <HeaderContainer className={isFixed ? 'fixed' : ''}>
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
					<button onClick={() => setLang('pt')}>PT</button> 
      		<button onClick={() => setLang('en')}>EN</button> 
      		<button onClick={() => setLang('es')}>ES</button>
        </LanguageSwitcher>
      </HeaderContent>
    </HeaderContainer>

  );
};

export default Header;
