import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles/theme';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  gap: ${theme.spacing.lg};
`;

export const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 4px solid ${theme.colors.dark};
  border-top: 4px solid ${theme.colors.gold};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const LoadingText = styled.p`
  font-family: ${theme.fonts.primary};
  color: ${theme.colors.gold};
  font-size: 1.2rem;
  text-align: center;
`; 