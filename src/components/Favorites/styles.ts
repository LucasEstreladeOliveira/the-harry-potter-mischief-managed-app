import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
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

export const CharacterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.lg};
`;

export const EmptyMessage = styled.div`
  text-align: center;
  color: ${theme.colors.light};
  font-family: ${theme.fonts.secondary};
  font-size: 1.2rem;
  padding: ${theme.spacing.xxl};
  opacity: 0.7;
`;

export const EmptyIcon = styled.div`
  font-size: 4rem;
  margin-bottom: ${theme.spacing.lg};
  opacity: 0.5;
`; 