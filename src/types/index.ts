export interface Character {
  id: string;
  name: string;
  alternate_names: string[];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: {
    wood: string;
    core: string;
    length: number;
  };
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
}

export interface House {
  id: string;
  name: string;
  colors: string[];
  animal: string;
  founder: string;
  traits: string[];
}

export interface AppState {
  selectedHouse: string | null;
  favorites: string[];
  characters: Character[];
  loading: boolean;
  error: string | null;
}

export type HouseId = 'gryffindor' | 'slytherin' | 'ravenclaw' | 'hufflepuff'; 