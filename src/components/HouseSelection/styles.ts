import styled from 'styled-components';
import { houses, theme } from '../../styles/theme';
import { HouseId } from '../../types';

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: ${theme.spacing.lg};
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xxl};
`;

export const Title = styled.h1`
  font-family: ${theme.fonts.primary};
  color: ${theme.colors.gold};
  font-size: 2.5rem;
  margin-bottom: ${theme.spacing.md};
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`;

export const Subtitle = styled.p`
  font-family: ${theme.fonts.secondary};
  color: ${theme.colors.light};
  font-size: 1.1rem;
  opacity: 0.8;
`;

export const HouseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.xl};
  margin-top: ${theme.spacing.xl};
`;

export const HouseCard = styled.div<{ $house: HouseId; $selected: boolean }>`
  background: linear-gradient(135deg, 
    ${props => houses[props.$house].colors[0]} 0%, 
    ${props => houses[props.$house].colors[1]} 100%
  );
  border: 3px solid ${props => props.$selected ? theme.colors.gold : 'transparent'};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${theme.shadows.lg}, ${theme.shadows.glow};
  }
  
  ${props => props.$selected && `
    box-shadow: ${theme.shadows.glow};
    transform: scale(1.05);
  `}
`;

export const HouseName = styled.h2`
  font-family: ${theme.fonts.primary};
  color: ${theme.colors.light};
  font-size: 1.8rem;
  margin-bottom: ${theme.spacing.md};
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`;

export const HouseAnimal = styled.div`
  font-family: ${theme.fonts.secondary};
  color: ${theme.colors.light};
  font-size: 1.2rem;
  margin-bottom: ${theme.spacing.md};
  opacity: 0.9;
`;

export const HouseFounder = styled.div`
  font-family: ${theme.fonts.secondary};
  color: ${theme.colors.light};
  font-size: 1rem;
  margin-bottom: ${theme.spacing.lg};
  opacity: 0.8;
`;

export const TraitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
`;

export const Trait = styled.li`
  font-family: ${theme.fonts.secondary};
  color: ${theme.colors.light};
  font-size: 0.9rem;
  margin-bottom: ${theme.spacing.xs};
  padding-left: ${theme.spacing.sm};
  position: relative;
  
  &::before {
    content: '•';
    color: ${theme.colors.gold};
    font-weight: bold;
    position: absolute;
    left: 0;
  }
`;

export const SelectionBadge = styled.div`
  position: absolute;
  top: ${theme.spacing.md};
  right: ${theme.spacing.md};
  background: ${theme.colors.gold};
  color: ${theme.colors.dark};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const ClearButton = styled.button`
  display: block;
  margin: ${theme.spacing.xl} auto 0;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: transparent;
  color: ${theme.colors.gold};
  border: 2px solid ${theme.colors.gold};
  border-radius: ${theme.borderRadius.md};
  font-family: ${theme.fonts.secondary};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${theme.colors.gold};
    color: ${theme.colors.dark};
    transform: translateY(-2px);
  }
`; 