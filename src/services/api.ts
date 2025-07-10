import { Character } from '../types';
import { config, getApiUrl, validateApiConfig } from '../utils';

export class ApiService {
  static async fetchCharacters(): Promise<Character[]> {
    try {
      // Validate API configuration
      if (!validateApiConfig()) {
        throw new Error('Invalid API configuration');
      }

      const response = await fetch(getApiUrl('characters'));
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      
      // Add unique IDs to characters and handle missing data
      return data.map((character: any, index: number) => ({
        id: character.id || `char_${index}`,
        name: character.name || config.defaults.unknownValue,
        alternate_names: character.alternate_names || [],
        species: character.species || config.defaults.unknownValue,
        gender: character.gender || config.defaults.unknownValue,
        house: character.house || config.defaults.unknownValue,
        dateOfBirth: character.dateOfBirth || config.defaults.unknownValue,
        yearOfBirth: character.yearOfBirth || null,
        wizard: character.wizard || false,
        ancestry: character.ancestry || config.defaults.unknownValue,
        eyeColour: character.eyeColour || config.defaults.unknownValue,
        hairColour: character.hairColour || config.defaults.unknownValue,
        wand: {
          wood: character.wand?.wood || config.defaults.unknownValue,
          core: character.wand?.core || config.defaults.unknownValue,
          length: character.wand?.length || null
        },
        patronus: character.patronus || config.defaults.unknownValue,
        hogwartsStudent: character.hogwartsStudent || false,
        hogwartsStaff: character.hogwartsStaff || false,
        actor: character.actor || config.defaults.unknownValue,
        alternate_actors: character.alternate_actors || [],
        alive: character.alive || false,
        image: character.image || ''
      }));
    } catch (error) {
      console.error('Error fetching characters:', error);
      throw new Error('Failed to fetch characters from the API');
    }
  }

  static async fetchCharacterById(id: string): Promise<Character | null> {
    try {
      const characters = await this.fetchCharacters();
      return characters.find(char => char.id === id) || null;
    } catch (error) {
      console.error('Error fetching character by ID:', error);
      return null;
    }
  }

  static async fetchStudents(): Promise<Character[]> {
    try {
      const characters = await this.fetchCharacters();
      return characters.filter(char => char.hogwartsStudent);
    } catch (error) {
      console.error('Error fetching students:', error);
      return [];
    }
  }

  static async fetchStaff(): Promise<Character[]> {
    try {
      const characters = await this.fetchCharacters();
      return characters.filter(char => char.hogwartsStaff);
    } catch (error) {
      console.error('Error fetching staff:', error);
      return [];
    }
  }

  static async fetchCharactersByHouse(house: string): Promise<Character[]> {
    try {
      const characters = await this.fetchCharacters();
      return characters.filter(char => 
        char.house.toLowerCase() === house.toLowerCase()
      );
    } catch (error) {
      console.error('Error fetching characters by house:', error);
      return [];
    }
  }
} 