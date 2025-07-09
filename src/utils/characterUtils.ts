import { Character } from '../types';

/**
 * Get the role of a character based on their Hogwarts status
 * @param character - The character object
 * @param detailed - Whether to return detailed role names (default: false)
 * @returns The character's role as a string
 */
export const getCharacterRole = (character: Character, detailed: boolean = false): string => {
  if (character.hogwartsStaff) {
    return detailed ? 'Hogwarts Staff' : 'Staff';
  }
  if (character.hogwartsStudent) {
    return detailed ? 'Hogwarts Student' : 'Student';
  }
  return 'Other';
};

/**
 * Generate initials from a character's name
 * @param name - The character's full name
 * @returns The initials (up to 2 characters)
 */
export const getCharacterInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

/**
 * Handle image error by hiding the image and showing placeholder
 * @param e - The error event
 */
export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>): void => {
  const target = e.target as HTMLImageElement;
  target.style.display = 'none';
  const placeholder = target.nextElementSibling as HTMLElement;
  if (placeholder) {
    placeholder.style.display = 'flex';
  }
};

/**
 * Check if a character is a favorite
 * @param characterId - The character's ID
 * @param favorites - Array of favorite character IDs
 * @returns Whether the character is a favorite
 */
export const isCharacterFavorite = (characterId: string, favorites: string[]): boolean => {
  return favorites.includes(characterId);
};

/**
 * Get the appropriate star symbol for favorite status
 * @param isFavorite - Whether the character is a favorite
 * @returns The star symbol (filled or empty)
 */
export const getFavoriteStar = (isFavorite: boolean): string => {
  return isFavorite ? '★' : '☆';
}; 