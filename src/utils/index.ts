// Character utilities
export {
  getCharacterRole,
  getCharacterInitials,
  handleImageError,
  isCharacterFavorite,
  getFavoriteStar
} from './characterUtils';

// House utilities
export {
  getHouseName,
  isValidHouseId,
  getHouseColors,
  getHouseInfo
} from './houseUtils';

// Configuration utilities
export {
  config,
  getApiUrl,
  validateApiConfig
} from './config';

// Device utilities
export {
  isMobile,
  isMobileByUserAgent,
  isMobileByScreenSize,
} from './deviceUtils'; 