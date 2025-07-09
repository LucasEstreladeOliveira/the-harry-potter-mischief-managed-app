import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.fonts.secondary};
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
    color: ${theme.colors.light};
    min-height: 100vh;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.primary};
    font-weight: 600;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: ${theme.fonts.secondary};
    cursor: pointer;
    border: none;
    outline: none;
    transition: all 0.3s ease;
  }

  .scrollbar {
    scrollbar-width: thin;
    scrollbar-color: ${theme.colors.gold} ${theme.colors.dark};
  }

  .scrollbar::-webkit-scrollbar {
    width: 8px;
  }

  .scrollbar::-webkit-scrollbar-track {
    background: ${theme.colors.dark};
  }

  .scrollbar::-webkit-scrollbar-thumb {
    background: ${theme.colors.gold};
    border-radius: 4px;
  }

  .scrollbar::-webkit-scrollbar-thumb:hover {
    background: #DAA520;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 5px rgba(255, 215, 0, 0.3);
    }
    50% {
      box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .fade-in {
    animation: fadeIn 0.6s ease-out;
  }

  .glow {
    animation: glow 2s ease-in-out infinite;
  }

  .float {
    animation: float 3s ease-in-out infinite;
  }
`; 