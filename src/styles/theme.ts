export const theme = {
  colors: {
    // House colors
    gryffindor: {
      primary: '#740001',
      secondary: '#D3A625',
      accent: '#FFD700',
      background: '#2A1810'
    },
    slytherin: {
      primary: '#1A472A',
      secondary: '#2A623D',
      accent: '#5D5D5D',
      background: '#0A0A0A'
    },
    ravenclaw: {
      primary: '#0E1A40',
      secondary: '#946B2D',
      accent: '#B8860B',
      background: '#1A1A2E'
    },
    hufflepuff: {
      primary: '#ECB939',
      secondary: '#F0C75E',
      accent: '#726255',
      background: '#2D2D2D'
    },
    // Common colors
    gold: '#FFD700',
    silver: '#C0C0C0',
    bronze: '#CD7F32',
    dark: '#1A1A1A',
    light: '#F5F5F5',
    parchment: '#F4F1E8',
    ink: '#2C2C2C'
  },
  fonts: {
    primary: "'Cinzel', serif",
    secondary: "'Crimson Text', serif"
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem'
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px'
  },
  shadows: {
    sm: '0 2px 4px rgba(0,0,0,0.1)',
    md: '0 4px 8px rgba(0,0,0,0.15)',
    lg: '0 8px 16px rgba(0,0,0,0.2)',
    glow: '0 0 20px rgba(255,215,0,0.3)'
  }
};

export const houses = {
  gryffindor: {
    id: 'gryffindor',
    name: 'Gryffindor',
    colors: ['#740001', '#D3A625'],
    animal: 'Lion',
    founder: 'Godric Gryffindor',
    traits: ['Bravery', 'Courage', 'Nobility', 'Chivalry']
  },
  slytherin: {
    id: 'slytherin',
    name: 'Slytherin',
    colors: ['#1A472A', '#2A623D'],
    animal: 'Serpent',
    founder: 'Salazar Slytherin',
    traits: ['Ambition', 'Cunning', 'Leadership', 'Resourcefulness']
  },
  ravenclaw: {
    id: 'ravenclaw',
    name: 'Ravenclaw',
    colors: ['#0E1A40', '#946B2D'],
    animal: 'Eagle',
    founder: 'Rowena Ravenclaw',
    traits: ['Wisdom', 'Intelligence', 'Creativity', 'Learning']
  },
  hufflepuff: {
    id: 'hufflepuff',
    name: 'Hufflepuff',
    colors: ['#ECB939', '#F0C75E'],
    animal: 'Badger',
    founder: 'Helga Hufflepuff',
    traits: ['Loyalty', 'Patience', 'Hard Work', 'Fairness']
  }
}; 