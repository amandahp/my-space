'use client';

import styled from 'styled-components';
import Link from 'next/link';

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 1.5rem;
  position: sticky;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
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

export const NavItem = styled(Link)<{ active?: boolean }>`
  text-decoration: none;
  color: ${({ active, theme }) => (active ? theme.colors.purple : theme.colors.text)};
  font-weight: ${({ active }) => (active ? '600' : '400')};
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const LanguageSwitcher = styled.div`
  font-size: 0.9rem;

  button {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondaryText};
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
		border: none;
		background: transparent;
		cursor: pointer;
  }
`;
