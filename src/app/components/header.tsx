'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { HeaderContainer, HeaderContent, Logo, NavItem, LanguageSwitcher, Nav, HamburgerButton, MobileMenu, LanguageMobile } from './header.styles';
import { useLanguage } from '../lib/context/LanguageContext';
import translations from "../../data/translate.json";


const Header: React.FC = () => {
	const [isFixed, setIsFixed] = React.useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

	const router = useRouter();

	const navigateToPage = (page: string) => {
		router.push(`/${page}`);
		setIsMobileMenuOpen(false);
	};

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
						src="/utils/ahp-high-resolution-logo.png"
						alt="Logo de Amanda"
						width={200}
						height={200}
					/>
				</Logo>


				<Nav>
					<NavItem onClick={() => navigateToPage('')}>{about}</NavItem>
					<NavItem onClick={() => navigateToPage('trajectory')}>{projects}</NavItem>
					<NavItem onClick={() => navigateToPage('contact')}>{contact}</NavItem>
				</Nav>
				<LanguageSwitcher>
					<button onClick={() => setLang('pt')}>PT</button>
					<button onClick={() => setLang('en')}>EN</button>
					<button onClick={() => setLang('es')}>ES</button>
				</LanguageSwitcher>
				<HamburgerButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
					☰
				</HamburgerButton>
				{isMobileMenuOpen && (
					<MobileMenu>
						<NavItem onClick={() => navigateToPage('')}>{about}</NavItem>
						<NavItem onClick={() => navigateToPage('trajectory')}>{projects}</NavItem>
						<NavItem onClick={() => navigateToPage('contact')}>{contact}</NavItem>
						<LanguageMobile>
							<button onClick={() => setLang('pt')}>PT</button>
							<button onClick={() => setLang('en')}>EN</button>
							<button onClick={() => setLang('es')}>ES</button>
						</LanguageMobile>
					</MobileMenu>

				)}


			</HeaderContent>
		</HeaderContainer>

	);
};

export default Header;
