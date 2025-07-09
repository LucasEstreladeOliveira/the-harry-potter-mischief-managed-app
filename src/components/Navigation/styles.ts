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
`;

export const NavLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
  align-items: center;
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
`; 