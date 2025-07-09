import styled from "styled-components";
import { houses, theme } from "../../styles/theme";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${theme.spacing.lg};
`;

export const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: ${theme.colors.gold};
  text-decoration: none;
  font-family: ${theme.fonts.secondary};
  margin-bottom: ${theme.spacing.lg};
  transition: all 0.3s ease;
  
  &:hover {
    color: #DAA520;
    transform: translateX(-5px);
  }
`;

export const CharacterCard = styled.div`
  background: linear-gradient(135deg, ${theme.colors.dark} 0%, #2a2a2a 100%);
  border: 2px solid ${theme.colors.gold};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.lg};
`;

export const CharacterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${theme.spacing.lg};
  flex-wrap: wrap;
  gap: ${theme.spacing.md};
`;

export const CharacterImageSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing.lg};
  flex: 1;
`;

export const CharacterImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid ${theme.colors.gold};
  flex-shrink: 0;
  box-shadow: ${theme.shadows.md};
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
  font-size: 3rem;
  font-family: ${theme.fonts.primary};
`;

export const CharacterInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const CharacterName = styled.h1`
  display: flex;
  align-items: center;
  font-family: ${theme.fonts.primary};
  color: ${theme.colors.gold};
  font-size: 2.5rem;
  margin: 0 0 ${theme.spacing.md} 0;
  word-wrap: break-word;
`;

export const FavoriteButton = styled.button<{ $isFavorite: boolean }>`
  background: ${props => props.$isFavorite ? theme.colors.gold : 'transparent'};
  color: ${props => props.$isFavorite ? theme.colors.dark : theme.colors.gold};
  border: 2px solid ${theme.colors.gold};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.5rem;
  flex-shrink: 0;
  
  &:hover {
    background: ${theme.colors.gold};
    color: ${theme.colors.dark};
    transform: scale(1.1);
  }
`;

export const StatusBadge = styled.div<{ $alive: boolean }>`
  display: inline-block;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.sm};
  font-family: ${theme.fonts.secondary};
  font-size: 0.9rem;
  font-weight: 600;
  background: ${props => props.$alive ? '#4CAF50' : '#f44336'};
  color: white;
  margin-left: ${theme.spacing.sm};
`;

export const HouseBadge = styled.div<{ $house: string }>`
  display: inline-block;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  font-family: ${theme.fonts.secondary};
  font-size: 1rem;
  font-weight: 600;
  background: ${props => {
    const house = houses[props.$house?.toLowerCase() as keyof typeof houses];
    return house ? `linear-gradient(135deg, ${house.colors[0]} 0%, ${house.colors[1]} 100%)` : theme.colors.dark;
  }};
  color: ${theme.colors.light};
  margin-top: ${theme.spacing.md};
`;

export const InfoSection = styled.div`
  margin-bottom: ${theme.spacing.lg};
`;

export const SectionTitle = styled.h3`
  font-family: ${theme.fonts.primary};
  color: ${theme.colors.gold};
  font-size: 1.3rem;
  margin-bottom: ${theme.spacing.md};
  border-bottom: 2px solid ${theme.colors.gold};
  padding-bottom: ${theme.spacing.sm};
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.md};
`;

export const InfoItem = styled.div`
  font-family: ${theme.fonts.secondary};
`;

export const Label = styled.div`
  color: ${theme.colors.light};
  opacity: 0.7;
  font-size: 0.9rem;
  margin-bottom: ${theme.spacing.xs};
`;

export const Value = styled.div`
  color: ${theme.colors.light};
  font-weight: 600;
  font-size: 1rem;
`;

export const WandInfo = styled.div`
  background: rgba(255, 215, 0, 0.1);
  border: 1px solid ${theme.colors.gold};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.md};
  margin-top: ${theme.spacing.md};
`;

export const ErrorMessage = styled.div`
  text-align: center;
  color: #ff6b6b;
  font-family: ${theme.fonts.secondary};
  font-size: 1.1rem;
  padding: ${theme.spacing.xl};
`;