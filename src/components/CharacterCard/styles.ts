import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { houses, theme } from '../../styles/theme';


export const Card = styled.div<{ $house: string }>`
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, ${theme.colors.dark} 0%, #2a2a2a 100%);
  border: 2px solid ${theme.colors.gold};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.lg}, ${theme.shadows.glow};
    border-color: #DAA520;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => {
      const character = props as any;
      const house = houses[character.$house?.toLowerCase() as keyof typeof houses];
      return house ? `linear-gradient(90deg, ${house.colors[0]} 0%, ${house.colors[1]} 100%)` : theme.colors.gold;
    }};
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${theme.spacing.md};
`;

export const CharacterImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: ${theme.spacing.md};
  border: 2px solid ${theme.colors.gold};
  flex-shrink: 0;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PlaceholderImage = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, ${theme.colors.dark} 0%, #2a2a2a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.gold};
  font-size: 1.5rem;
  font-family: ${theme.fonts.primary};
`;

export const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CharacterName = styled.h3`
  font-family: ${theme.fonts.primary};
  color: ${theme.colors.gold};
  font-size: 1.3rem;
  margin: 0 0 ${theme.spacing.xs} 0;
`;

export const FavoriteButton = styled.button<{ $isFavorite: boolean }>`
  background: ${props => props.$isFavorite ? theme.colors.gold : 'transparent'};
  color: ${props => props.$isFavorite ? theme.colors.dark : theme.colors.gold};
  border: 2px solid ${theme.colors.gold};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  
  &:hover {
    background: ${theme.colors.gold};
    color: ${theme.colors.dark};
    transform: scale(1.1);
  }
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${theme.spacing.xs};
  font-family: ${theme.fonts.secondary};
  font-size: 0.9rem;
`;

export const Label = styled.span`
  color: ${theme.colors.light};
  opacity: 0.7;
`;

export const Value = styled.span`
  text-align: end;
  color: ${theme.colors.light};
  font-weight: 600;
`;

export const HouseBadge = styled.div<{ $house: string }>`
  display: inline-block;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.sm};
  font-family: ${theme.fonts.secondary};
  font-size: 0.8rem;
  font-weight: 600;
  background: ${props => {
    const house = houses[props.$house?.toLowerCase() as keyof typeof houses];
    return house ? `linear-gradient(135deg, ${house.colors[0]} 0%, ${house.colors[1]} 100%)` : theme.colors.dark;
  }};
  color: ${theme.colors.light};
  margin-top: ${theme.spacing.sm};
`;

export const ViewDetailsButton = styled(Link)`
  display: flex;
  margin-top: auto;
  justify-content: center;
  width: 100%;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background: ${theme.colors.gold};
  color: ${theme.colors.dark};
  text-align: center;
  border-radius: ${theme.borderRadius.md};
  font-family: ${theme.fonts.secondary};
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: #DAA520;
    transform: translateY(-2px);
  }
`;

export const StatusIndicator = styled.div<{ $alive: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.$alive ? '#4CAF50' : '#f44336'};
  margin-left: ${theme.spacing.sm};
  display: inline-block;
`;