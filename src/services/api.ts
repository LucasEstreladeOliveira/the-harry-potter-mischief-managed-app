import { Character } from '../types';

const API_BASE_URL = 'https://hp-api.onrender.com/api';

export class ApiService {
  static async fetchCharacters(): Promise<Character[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/characters`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      
      // Add unique IDs to characters and handle missing data
      return data.map((character: any, index: number) => ({
        id: character.id || `char_${index}`,
        name: character.name || 'Unknown',
        alternate_names: character.alternate_names || [],
        species: character.species || 'Unknown',
        gender: character.gender || 'Unknown',
        house: character.house || 'Unknown',
        dateOfBirth: character.dateOfBirth || 'Unknown',
        yearOfBirth: character.yearOfBirth || null,
        wizard: character.wizard || false,
        ancestry: character.ancestry || 'Unknown',
        eyeColour: character.eyeColour || 'Unknown',
        hairColour: character.hairColour || 'Unknown',
        wand: {
          wood: character.wand?.wood || 'Unknown',
          core: character.wand?.core || 'Unknown',
          length: character.wand?.length || null
        },
        patronus: character.patronus || 'Unknown',
        hogwartsStudent: character.hogwartsStudent || false,
        hogwartsStaff: character.hogwartsStaff || false,
        actor: character.actor || 'Unknown',
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