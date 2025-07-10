import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { houses, theme } from '../../styles/theme';

export const NavContainer = styled.nav`
  background: linear-gradient(135deg, ${theme.colors.dark} 0%, #2a2a2a 100%);
  padding: ${theme.spacing.md} 0;
  box-shadow: ${theme.shadows.md};
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    padding: ${theme.spacing.sm} 0;
  }
`;

export const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${theme.spacing.md};

  @media (max-width: 768px) {
    padding: 0 ${theme.spacing.md};
    gap: ${theme.spacing.sm};
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: ${theme.spacing.sm};
  }
`;

export const Logo = styled(Link)`
  font-family: ${theme.fonts.primary};
  font-size: 1.8rem;
  font-weight: 700;
  color: ${theme.colors.gold};
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    color: #DAA520;
    text-shadow: ${theme.shadows.glow};
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
  align-items: center;

  @media (max-width: 768px) {
    gap: ${theme.spacing.sm};
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: ${theme.spacing.xs};
    width: 100%;
  }
`;

export const NavLink = styled(Link)<{ $active?: boolean }>`
  font-family: ${theme.fonts.secondary};
  color: ${props => props.$active ? theme.colors.gold : theme.colors.light};
  text-decoration: none;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    color: ${theme.colors.gold};
    background: rgba(255, 215, 0, 0.1);
  }
  
  ${props => props.$active && `
    background: rgba(255, 215, 0, 0.2);
    box-shadow: ${theme.shadows.glow};
  `}

  @media (max-width: 768px) {
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    font-size: 0.9rem;
    white-space: nowrap;
  }

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
    padding: ${theme.spacing.sm};
    border-radius: ${theme.borderRadius.sm};
  }
`;

export const NavHouseBadge = styled.div<{ $house: string }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  background: ${props => {
    const house = houses[props.$house as keyof typeof houses];
    return house ? `linear-gradient(135deg, ${house.colors[0]} 0%, ${house.colors[1]} 100%)` : theme.colors.dark;
  }};
  color: ${theme.colors.light};
  font-family: ${theme.fonts.secondary};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.md};
  }

  @media (max-width: 768px) {
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    font-size: 0.8rem;
    white-space: nowrap;
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
    padding: ${theme.spacing.sm};
    border-radius: ${theme.borderRadius.sm};
  }
`;

// Mobile menu toggle button with animation
export const MobileMenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${theme.colors.gold};
  font-size: 1.5rem;
  cursor: pointer;
  padding: ${theme.spacing.xs};
  border-radius: ${theme.borderRadius.sm};
  transition: all 0.3s ease;
  position: relative;
  z-index: 101;

  &:hover {
    background: rgba(255, 215, 0, 0.1);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 480px) {
    display: block;
  }
`;

// Animated mobile menu container
export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  background: ${theme.colors.dark};
  border-top: 1px solid ${theme.colors.gold};
  padding: ${theme.spacing.md};
  box-shadow: ${theme.shadows.md};
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: top;
  z-index: 101;
  
  @media (max-width: 480px) {
    max-height: ${props => props.$isOpen ? '500px' : '0'};
    opacity: ${props => props.$isOpen ? '1' : '0'};
    transform: ${props => props.$isOpen ? 'scaleY(1)' : 'scaleY(0)'};
    padding: ${props => props.$isOpen ? theme.spacing.md : '0'};
    margin-top: ${props => props.$isOpen ? '0' : '-10px'};
  }

  @media (min-width: 481px) {
    display: none;
  }
`;

// Animated mobile menu links container
export const MobileMenuLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
  width: 100%;
  opacity: ${props => props.$isOpen ? '1' : '0'};
  transform: ${props => props.$isOpen ? 'translateY(0)' : 'translateY(-20px)'};
  transition: all 0.3s ease;
  transition-delay: ${props => props.$isOpen ? '0.1s' : '0s'};
`;

// Animated mobile menu backdrop
export const MobileMenuBackdrop = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${props => props.$isOpen ? '1' : '0'};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  z-index: 99;

  @media (max-width: 480px) {
    display: block;
  }

  @media (min-width: 481px) {
    display: none;
  }
`; 