/**
 * Application configuration utilities
 */

export const config = {
  // API Configuration
  api: {
    baseUrl: process.env.REACT_APP_API_BASE_URL || 'https://hp-api.onrender.com/api',
    timeout: parseInt(process.env.REACT_APP_API_TIMEOUT || '10000'),
    retryAttempts: parseInt(process.env.REACT_APP_API_RETRY_ATTEMPTS || '3')
  },
  
  // App Configuration
  app: {
    name: process.env.REACT_APP_NAME || 'Harry Potter Mischief Managed',
    version: process.env.REACT_APP_VERSION || '1.0.0',
    description: process.env.REACT_APP_DESCRIPTION || 'A Harry Potter themed character browsing app',
    localStorageKeys: {
      favorites: 'hp-favorites',
      selectedHouse: 'hp-selected-house'
    }
  },
  
  // Feature Flags
  features: {
    enableImageFallback: process.env.REACT_APP_ENABLE_IMAGE_FALLBACK === 'true',
    enableOfflineMode: process.env.REACT_APP_ENABLE_OFFLINE_MODE === 'true',
    enableCaching: process.env.REACT_APP_ENABLE_CACHING === 'true'
  },
  
  // UI Configuration
  ui: {
    fonts: {
      primary: process.env.REACT_APP_DEFAULT_FONT_PRIMARY || 'Cinzel',
      secondary: process.env.REACT_APP_DEFAULT_FONT_SECONDARY || 'Crimson Text'
    },
    themeColor: process.env.REACT_APP_THEME_COLOR || '#000000'
  },
  
  // Fallback Values
  defaults: {
    unknownValue: process.env.REACT_APP_DEFAULT_UNKNOWN_VALUE || 'Unknown',
    errorMessage: process.env.REACT_APP_DEFAULT_ERROR_MESSAGE || 'Unknown error'
  }
};

/**
 * Get API endpoint URL
 * @param endpoint - The API endpoint path
 * @returns Full API URL
 */
export const getApiUrl = (endpoint: string): string => {
  const baseUrl = config.api.baseUrl.replace(/\/$/, ''); // Remove trailing slash
  const cleanEndpoint = endpoint.replace(/^\//, ''); // Remove leading slash
  return `${baseUrl}/${cleanEndpoint}`;
};

/**
 * Validate API configuration
 * @returns Whether the API configuration is valid
 */
export const validateApiConfig = (): boolean => {
  try {
    const url = new URL(config.api.baseUrl);
    return url.protocol === 'https:' || url.protocol === 'http:';
  } catch {
    return false;
  }
}; 