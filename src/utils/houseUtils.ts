import { houses } from '../styles/theme';

/**
 * Get the display name of a house by its ID
 * @param houseId - The house ID
 * @returns The house name or 'Select House' if not found
 */
export const getHouseName = (houseId: string): string => {
  const house = houses[houseId as keyof typeof houses];
  return house ? house.name : 'Select House';
};

/**
 * Check if a house ID is valid
 * @param houseId - The house ID to validate
 * @returns Whether the house ID is valid
 */
export const isValidHouseId = (houseId: string): boolean => {
  return houseId in houses;
};

/**
 * Get house colors by house ID
 * @param houseId - The house ID
 * @returns Array of house colors or empty array if not found
 */
export const getHouseColors = (houseId: string): string[] => {
  const house = houses[houseId as keyof typeof houses];
  return house ? house.colors : [];
};

/**
 * Get house information by ID
 * @param houseId - The house ID
 * @returns House object or null if not found
 */
export const getHouseInfo = (houseId: string) => {
  return houses[houseId as keyof typeof houses] || null;
}; 