import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const ListContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.lg};
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
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

export const Controls = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
  flex-wrap: wrap;
  justify-content: center;
`;

export const SearchInput = styled.input`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: 2px solid ${theme.colors.gold};
  border-radius: ${theme.borderRadius.md};
  background: ${theme.colors.dark};
  color: ${theme.colors.light};
  font-family: ${theme.fonts.secondary};
  font-size: 1rem;
  min-width: 250px;
  
  &:focus {
    outline: none;
    box-shadow: ${theme.shadows.glow};
  }
  
  &::placeholder {
    color: ${theme.colors.light};
    opacity: 0.6;
  }
`;

export const FilterButton = styled.button<{ $active?: boolean }>`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: 2px solid ${props => props.$active ? theme.colors.gold : theme.colors.dark};
  border-radius: ${theme.borderRadius.md};
  background: ${props => props.$active ? theme.colors.gold : 'transparent'};
  color: ${props => props.$active ? theme.colors.dark : theme.colors.light};
  font-family: ${theme.fonts.secondary};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${theme.colors.gold};
    color: ${theme.colors.dark};
    transform: translateY(-2px);
  }
`;

export const ListCharacterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.lg};
`;

export const ListErrorMessage = styled.div`
  text-align: center;
  color: #ff6b6b;
  font-family: ${theme.fonts.secondary};
  font-size: 1.1rem;
  padding: ${theme.spacing.xl};
`;

export const EmptyMessage = styled.div`
  text-align: center;
  color: ${theme.colors.light};
  font-family: ${theme.fonts.secondary};
  font-size: 1.1rem;
  padding: ${theme.spacing.xl};
  opacity: 0.7;
`; 