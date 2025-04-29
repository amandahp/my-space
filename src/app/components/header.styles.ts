'use client';

import styled from 'styled-components';
import Link from 'next/link';

export const HeaderContainer = styled.header`
  position: relative;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  transition: box-shadow 0.3s ease, border-bottom 0.3s ease;
  z-index: 100;
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
	padding: 2rem;
`;

export const Logo = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;

  img {
    width: 100px;
    height: auto;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

export const NavItem = styled.button`
  text-decoration: none;
  padding: 10px 20px;  
  border: none;  
  background-color: transparent;
  border-radius: 5px;  
  cursor: pointer; 
	font-size: 1rem;
  transition: all 0.3s ease; 
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
	}

  &:focus {
    outline: none; 
  }
`;

export const LanguageSwitcher = styled.div`
  font-size: 0.9rem;

  button {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary};
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
		border-style: solid;
		border-width: 0 2px 0 0;
		background: transparent;
		cursor: pointer;
		border-color: transparent #3333 transparent transparent;
  }
`;
